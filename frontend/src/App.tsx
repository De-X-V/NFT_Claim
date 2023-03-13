import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { styled } from "@mui/material";

import pressstart2p from "../public/PressStart2P-Regular.ttf";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Wrap>
        <div>app</div>
        <NavBar></NavBar>
        <Outlet />
      </Wrap>
    </WagmiConfig>
  );
}
const Wrap = styled("div")(({ theme }) => ({
  fontSize: "60px",
}));

export default App;
