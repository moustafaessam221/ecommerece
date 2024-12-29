import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen mt-[-100px]">
      <h1 className="text-8xl font-semibold mb-4">404 Not Found</h1>
      <p className="text-2xl">
        Your visited page not found. You may go home page
      </p>
      <Link
        to="/"
        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded"
      >
        Back to home page
      </Link>
    </div>
  );
}

export default NoPage;
