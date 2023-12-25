import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="flex justify-between items-center px-5 md:px-24 py-8 fixed z-10 top-0 left-0 right-0 max-w-[1480px] mx-auto bg-gray-400 bg-opacity-15">
      {/* Logo */}
      <div>
        <h1 className="text-[#2ecc71] text-2xl font-bold">
          TaskN<span className="text-[#dbebfd]">est</span>
        </h1>
      </div>

      {/* Menues */}
      <div className="md:flex justify-around items-center gap-6 text-lg font-semibold text-[#dbebfd] hidden">
        <NavLink to="/">Home</NavLink>
        <a href="#ourUsers">Our Users</a>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
      <div>
        <button className=" text-xl text-white" onClick={toggleDrawer}>
          <MdMenu />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="flex flex-col gap-4 py-8">
            <Link to="/">Home</Link>
            <a href="#ourUsers">Our Users</a>
            {user ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
