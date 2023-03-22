import { styled } from "@mui/material";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import NftBox from "../DashBoard/NftBox";
import { makeEtherFromBigNumber, makeShortAddress } from "../utils/transform";
import { getNftsForOwner, getNftsfromAxios } from "../utils/getNfts";

function Profile() {
  const { address, isConnected } = useAccount();
  const [walletBalance, setWalletBalance] = useState(0);
  const [tokens, setTokens] = useState<any[] | undefined>([]);
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
  /*
  const getERC721Tokens = async (_account: any) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const abi = [
        "function balanceOf(address owner) view returns (uint256)",
        "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
      ];
      const contractAddress = "0x7c40c393dc0f283f318791d746d894ddd3693572";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      console.log(contract);
      //const balance = await contract.balanceOf();

      const tokens = [];
      
      for (let i = 0; i < balance.toNumber(); i++) {
        const token = await contract.tokenOfOwnerByIndex(_account, i);
        tokens.push(token.toNumber());
      }
      for (let i = 0; i < 3; i++) {
        const token = await contract.tokenOfOwnerByIndex(_account, i);
        tokens.push(token.toNumber());
      }
      console.log(tokens);
      return tokens;
    } catch (e) {
      console.log(e);
    }
  };
  */

  useEffect(() => {
    if (address) {
      getMyBalance(address).then((result) => {
        console.log(result);
        setWalletBalance(result);
      });
      /*
      try {
        getNftsfromAxios(address).then((result) => {
          console.log(result);
        });
      } catch (e) {
        console.log(e);
      }
      */

      try {
        getNftsForOwner(address).then((result) => {
          console.log(result);
          //setTokens(result);
        });
      } catch (e) {
        console.log("error", e);
      }

      /*
      getERC721Tokens(address).then((result) => {
        console.log(result);
        setTokens(result);
      });
      */
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
          <StyledContent>보유중인 토큰들{tokens} </StyledContent>
        </StyledUserInfo>
      </StyledBox>
      <StyledBox>
        <NftBox
          img="https://i.imgur.com/6YQ9Z9r.png"
          title="pepe1"
          content="0"
        />
      </StyledBox>
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
const StyledTitle = styled("div")(({ theme }) => ({
  fontSize: "30px",
  background: theme.palette.secondary.main,
}));
const StyledContent = styled("div")(({ theme }) => ({
  fontSize: "15px",
  background: theme.palette.secondary.main,
}));

export default Profile;
