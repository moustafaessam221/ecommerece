import React from "react";
import sideImage from "../../assets/images/Side Image.png";

function Layout({ children }) {
  return (
    <div className="my-10 px-4 lg:pr-20 flex lg:justify-between justify-center h-[80vh]">
      <img className=" w-1/2 hidden lg:block" src={sideImage} alt="" />
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
