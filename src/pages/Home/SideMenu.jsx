import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const menu = [
    { id: 1, title: "Beauty", link: "/products/beauty" },
    { id: 2, title: "Fragrances", link: "/products/fragrances" },
    { id: 3, title: "Furniture", link: "/products/furniture" },
    { id: 4, title: "Groceries", link: "/products/groceries" },
    { id: 5, title: "Home Decor", link: "/products/home-decoration" },
    {
      id: 6,
      title: "Kitchen Accessories",
      link: "/products/kitchen-accessories",
    },
    { id: 7, title: "Laptop", link: "/products/laptop" },
    { id: 8, title: "Men's Shoes", link: "/products/mens-shoes" },
    { id: 9, title: "Men's Watches", link: "/products/mens-watches" },
  ];

  return (
    <div className="border-r me-8 pt-8 mt-[-40px] hidden lg:block">
      <ul className="flex flex-col gap-4 font-semibold w-[200px]">
        {menu.map((item) => (
          <Link key={item.id} to={item.link}
          className="hover:text-red-600 after:w-0 hover:after:w-1/2 after:h-[2px] after:bg-red-600 after:block after:transition-all after:duration-300">
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SideMenu;
