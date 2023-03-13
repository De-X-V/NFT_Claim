import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <h1>App</h1>
      <NavBar></NavBar>
      <Outlet />
    </div>
  );
}

export default App;
