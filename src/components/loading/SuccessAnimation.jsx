import { CheckCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

function SuccessAnimation({ text = "Success" }) {
  return (
    <div
      className="
        fixed z-50 left-1/2 top-6 -translate-x-1/2 
        px-6 py-4 
        bg-gradient-to-r from-emerald-50 to-green-50 
        border border-emerald-200
        rounded-lg shadow-lg shadow-emerald-100/50
        animate-in slide-in-from-top duration-300
        flex items-center gap-2
      "
      role="alert"
    >
      <CheckCircleIcon className="w-6 h-6" />
      <span className="text-emerald-800 font-medium">{text}</span>
    </div>
  );
}

export default SuccessAnimation;
