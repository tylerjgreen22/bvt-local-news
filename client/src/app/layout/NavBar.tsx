import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex gap-2 underline">
      <Link to={"/"}>Home</Link>
      <Link to={"/news"}>News</Link>
      <Link to={"/sports"}>Sports</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/reset"}>Reset</Link>
      <Link to={"/resetConf"}>Confirm Reset</Link>
      <Link to={"/business"}>Business</Link>
      <Link to={"/subscribe"}>Subscribe</Link>
    </nav>
  );
};

export default NavBar;
