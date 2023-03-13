import { styled } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

function NavBar() {
  const location = useLocation();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div>
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
    </div>
  );
}

const StyledLinks = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "100%",
  background: "white",
});

const StyledLink = styled(Link)(({ theme, state }) => ({
  color: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  width: "150px",
  height: "50px",
  padding: "16px",
  alignItems: "center",
  background: `${state ? "red" : "none"}`,
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

export default NavBar;
