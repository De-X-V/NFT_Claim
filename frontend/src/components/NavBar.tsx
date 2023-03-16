import { styled } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Logo from "../../public/logo.jpg";
import theme from "../theme/Theme";
import { makeShortAddress } from "../utils/transform";

function NavBar() {
  const location = useLocation();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <Wrap>
      <StyledLogo>
        <img src={Logo} alt="logo" width="72px" height="72px" />
      </StyledLogo>
      <StyledMenuIcon onClick={toggleMenu}>☰</StyledMenuIcon>
      <StyledLinks isOpen={isOpen} theme={theme}>
        <StyledLink to="/" state={location.pathname === "/"}>
          home
        </StyledLink>
        <StyledLink to="/dashboard" state={location.pathname === "/dashboard"}>
          dashboard
        </StyledLink>
        <StyledLink to="/profile" state={location.pathname === "/profile"}>
          profile
        </StyledLink>
        <StyledLink to="/faq" state={location.pathname === "/faq"}>
          FAQ
        </StyledLink>
        {isConnected ? (
          <div>
            {makeShortAddress(address)}
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )}
      </StyledLinks>
    </Wrap>
  );
}

const Wrap = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "72px",
  width: "100%",
  background: "black",
}));

const StyledLogo = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  fontWeight: "bold",
  color: theme.palette.text.primary,
  marginLeft: "20px",
}));

const StyledLinks = styled("div")(
  ({ theme, isOpen }: { theme: any; isOpen: Boolean }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "72px",
    width: "100%",

    "@media (max-width: 768px)": {
      display: `${isOpen ? "flex" : "none"}`,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",

      top: "72px",

      bottom: 0,

      height: "200px",
      backgroundColor: theme.palette.primary.main,

      transition: "all 0.3s ease-in-out",
      zIndex: 998,
    },
  })
);

const StyledMenuIcon = styled("div")({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    position: "absolute",
    top: "-20px",
    right: "0",

    transform: "translate(-100%, 65%)",
    fontSize: "1.8rem",
    cursor: "pointer",
    zIndex: 999,
    color: "white",
  },
});

const StyledLink = styled(Link)(({ theme, state }) => ({
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "50px",
  marginRight: "40px",
  marginLeft: "40px",
  alignItems: "center",
  background: `${
    state
      ? "linear-gradient(101.05deg, #36a9e8 -5.36%, #36dde9 29.46%, #39b6d8 56.03%, #34ceed 81.92%);"
      : "none"
  }`,
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",

  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

export default NavBar;
