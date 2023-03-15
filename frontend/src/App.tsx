import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { styled } from "@mui/material";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Wrap>
        <NavBar></NavBar>
        <Outlet />
      </Wrap>
    </WagmiConfig>
  );
}
const Wrap = styled("div")(({ theme }) => ({
  fontSize: "60px",
  width: "100%",
  height: "100%",
  background: "black",
}));

export default App;
