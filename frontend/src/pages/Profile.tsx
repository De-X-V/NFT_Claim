import { styled } from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import NftBox from "../DashBoard/NftBox";
import { makeEtherFromBigNumber, makeShortAddress } from "../utils/transform";
import { getNftsForOwner } from "../utils/getNfts";

function Profile() {
  interface Nft {
    address: string;
    title: string;
    imgsrc: string;
  }
  const { address, isConnected } = useAccount();
  const [walletBalance, setWalletBalance] = useState(0);
  const [tokens, setTokens] = useState<Nft[] | undefined>([]);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const getMyBalance = async (_account: string) => {
    if (!window.ethereum) {
      throw new Error("No ethereum provider found");
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(_account);

    return makeEtherFromBigNumber(balance);
  };

  useEffect(() => {
    if (address) {
      getMyBalance(address).then((result) => {
        console.log(result);
        setWalletBalance(result);
      });

      async function fetchData() {
        try {
          const result = await getNftsForOwner(address);
          const Nfts = result.ownedNfts;
          console.log(Nfts);
          Nfts.map((nft: any) => {
            const address = nft.contract.address;
            const title = nft.title;
            const imgSrc = nft.metadata.image;
            setTokens((tokens) => [
              ...tokens,
              { address: address, title: title, imgsrc: imgSrc },
            ]);
          });
          //setTokens(Nfts);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
  }, [address]);
  return (
    <Wrap>
      <StyledBox>
        <StyledProfileImg src="https://i.imgur.com/6YQ9Z9r.png" alt="nft" />
        <StyledUserInfo>
          <StyledTitle>Profile</StyledTitle>
          <StyledContent>{makeShortAddress(address)}</StyledContent>
          <StyledContent>보유중인 NFT</StyledContent>
          <StyledContent>보유중인 ETH</StyledContent>
          <StyledContent>{walletBalance}</StyledContent>
        </StyledUserInfo>
      </StyledBox>
      <StyledNftBox>
        {tokens.map((token) => (
          <NftBox img={token.imgsrc} title={token.title} content="0" />
        ))}
      </StyledNftBox>
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",

  fontSize: "30px",
  margin: "20px",

  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const StyledProfileImg = styled("img")(({ theme }) => ({
  width: "400px",
  height: "400px",
  borderRadius: "50%",
  background: theme.palette.primary.main,
}));

const StyledUserInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "30px",
  margin: "20px",
  background: theme.palette.secondary.main,
  color: theme.palette.text.primary,
}));

const StyledBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  fontSize: "30px",
}));

const StyledNftBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: "30px",
}));

const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "30px",
  background: theme.palette.secondary.main,
}));
const StyledContent = styled("div")(({ theme }) => ({
  fontSize: "15px",
  background: theme.palette.secondary.main,
}));

export default Profile;
