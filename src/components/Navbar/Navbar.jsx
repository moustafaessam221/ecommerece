import React, { useState } from "react";
import Searchbar from "./Searchbar";
import AD from "./AD";
import { useAuth } from "../../context/AuthContext";
import { Bars2Icon } from "@heroicons/react/20/solid";
import { signOutUser } from "../../firebase/auth";
import { Link } from "react-router-dom";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const MenuLinks = ({ user, handleLogout }) => (
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
    ): (
      <li>
        <Link to="/signin">Login</Link>
      </li>
    )}
  </ul>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handleLogout = () => {
    signOutUser();
    setIsOpen(false); // Close menu on logout
  };

  return (
    <>
      <AD />
      {/* Desktop Navbar */}
      <nav className="hidden md:flex justify-between items-center lg:px-20 px-4 py-5 border-b">
        <Link
          className="font-bold text-2xl"
          style={{ fontFamily: "cursive" }}
          to="/home"
        >
          Exclusive
        </Link>
        <MenuLinks user={user} handleLogout={handleLogout} />
        <div>
          <Searchbar />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-5 border-b">
        <Link
          className="font-bold text-2xl"
          style={{ fontFamily: "cursive" }}
          to="/home"
        >
          Exclusive
        </Link>
        <Bars2Icon
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
        />
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
