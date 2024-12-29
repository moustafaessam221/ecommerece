import React from "react";
import { Link, useLocation } from "react-router-dom";

function SideMenu() {
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard/addproduct",
      label: "Add Product",
    },
    {
      path: "/dashboard/orders",
      label: "Orders",
    },
    {
      path: "/dashboard/users",
      label: "Users",
    },
    {
      path: "/dashboard/products",
      label: "Products",
    },
  ];

  return (
    <nav className="py-6">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default SideMenu;
