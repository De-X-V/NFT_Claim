import { styled } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <div>
      <StyledLink to="/" state={location.pathname === "/"}>
        home
      </StyledLink>
      <StyledLink to="/dashboard" state={location.pathname === "/dashboard"}>
        dashboard
      </StyledLink>
      <StyledLink to="/profile" state={location.pathname === "/profile"}>
        profile
      </StyledLink>
    </div>
  );
}

const StyledLink = styled(Link)(({ theme, state }) => ({
  color: theme.palette.primary.main,
  display: "flex",
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
