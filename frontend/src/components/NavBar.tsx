import { styled } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Logo from "../../public/logo.jpg";

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
  };

  return (
    <Wrap>
      <StyledLogo>
        <img src={Logo} alt="logo" width="72px" height="72px" />
      </StyledLogo>
      <StyledMenuIcon onClick={toggleMenu}>☰</StyledMenuIcon>
      <StyledLinks>
        <StyledLink to="/" state={location.pathname === "/"}>
          home
        </StyledLink>
        <StyledLink to="/dashboard" state={location.pathname === "/dashboard"}>
          dashboard
        </StyledLink>
        <StyledLink to="/profile" state={location.pathname === "/profile"}>
          profile
        </StyledLink>
        {isConnected ? (
          <div>
            Connected to {address}
            <button onClick={() => disconnect()}>Disconnect</button>
          </div>
        ) : (
          <button onClick={() => connect()}>Connect</button>
        )}
      </StyledLinks>
    </Wrap>
  );
}

const Wrap = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "72px",
  width: "100%",
  background: "black",
});

const StyledLogo = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "10px",
  fontWeight: "bold",
  color: "white",
  marginLeft: "20px",
});

const StyledLinks = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "72px",
  width: "100%",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const StyledMenuIcon = styled("div")({
  display: "none",
  "@media (max-width: 768px)": {
    display: "flex",
    position: "fixed",
    top: "0",
    right: "0",

    transform: "translate(-100%, 65%)",
    fontSize: "1.8rem",
    cursor: "pointer",
    zIndex: 999,
    color: "white",
  },
});

const StyledLink = styled(Link)(({ theme, state }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "50px",
  marginRight: "40px",
  alignItems: "center",
  background: `${
    state
      ? "linear-gradient(101.05deg, #E24040 -5.36%, #EC3C3C 29.46%, #F25E5E 56.03%, #EE3742 81.92%);"
      : "none"
  }`,
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export default NavBar;
