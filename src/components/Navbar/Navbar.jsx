import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { signOutUser } from "../../firebase/auth";
import AD from "./AD";
import Searchbar from "./Searchbar";

const MenuLinks = ({ user, handleLogout, role }) => (
  <ul className="flex flex-col md:flex-row gap-7 font-semibold">
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    {user ? (
      <li>
        <button className="cursor-pointer" onClick={handleLogout}>
          Logout
        </button>
      </li>
    ) : (
      <li>
        <Link to="/signin">Login</Link>
      </li>
    )}
    {role === "admin" && (
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    )}
  </ul>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, role } = useAuth();


  const handleLogout = () => {
    signOutUser();
    setIsOpen(false); // Close menu on logout
  };

  return (
    <>
      <AD />
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center lg:px-20 px-4 py-5 border-b mb-4">
        <Link
          className="font-bold text-2xl"
          style={{ fontFamily: "cursive" }}
          to="/home"
        >
          Exclusive
        </Link>
        <MenuLinks user={user} role={role} handleLogout={handleLogout} />
        <div>
          <Searchbar />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-5 border-b">
        <Link
          className="font-bold text-2xl"
          style={{ fontFamily: "cursive" }}
          to="/home"
        >
          Exclusive
        </Link>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          <Bars3Icon
            className={`w-8 h-8 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-expanded={isOpen}
          />
        </button>
      </div>

      <div
        className={`px-4 py-5 border-b transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <MenuLinks user={user} handleLogout={handleLogout} />
        <div className="mt-4">
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default Navbar;
