import { Outlet, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import NavBar from "./NavBar";

const App = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      {location.pathname === "/" ? <Home /> : <Outlet />}
    </>
  );
};

export default App;
