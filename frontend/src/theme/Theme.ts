import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#393E46",
    },
    text: {
      primary: "#00ADB5",
      secondary: "#EEEEEE",
    },

    error: {
      main: "#DA1E28",
    },
  },
  typography: {
    fontFamily: [
      "Noto Sans KR",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
    ].join(","),
  },
});

export default theme;
