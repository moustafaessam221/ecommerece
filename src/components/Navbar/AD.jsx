import React from "react";

function AD() {
  return (
    <div className="bg-black text-white py-4 px-20 hidden md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1" />
        <p className="text-center flex-grow">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span>
            <a href="/home" className="underline hover:text-gray-300">
              ShopNow
            </a>
          </span>
        </p>
        <div className="flex-1 flex justify-end">
          <select
            className="bg-black text-white focus:outline-none cursor-pointer hover:text-gray-300"
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default AD;
