import React, { useState } from "react";
import SideMenu from "./SideMenu";
import { Bars3BottomLeftIcon } from "@heroicons/react/20/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-12 h-screen px-4 lg:px-20 relative">
      {/* Sidebar - Only show when isOpen is true */}
      {isOpen && (
        <aside className="col-span-3 bg-gray-100 p-4 shadow-lg transition-transform duration-200">
          <SideMenu />
        </aside>
      )}

      {/* Main content - Use conditional classes */}
      <main
        className={
          isOpen
            ? "col-span-9 p-6 overflow-y-auto"
            : "col-span-12 p-6 overflow-y-auto"
        }
      >
        {children}
      </main>
      <button
        onClick={handleToggle}
        className="absolute top-4 right-4 z-50 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label="Toggle Menu"
      >
        <AdjustmentsHorizontalIcon
          className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default Layout;
