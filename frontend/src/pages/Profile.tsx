import { styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect, useProvider } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import NftBox from "../DashBoard/NftBox";
import { makeEtherFromBigNumber, makeShortAddress } from "../utils/transform";

function Profile() {
  const { address, isConnected } = useAccount();
  const [walletBalance, setWalletBalance] = useState(1);
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const provider = useProvider();
  const getMyBalance = async (_account: any) => {
    const balance = await provider.getBalance(_account);
    console.log(balance);
    return makeEtherFromBigNumber(balance);
  };
  useEffect(() => {
    if (address) {
      getMyBalance(address).then((result) => {
        console.log(result);
        setWalletBalance(result);
      });
    }
  }, []);
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
