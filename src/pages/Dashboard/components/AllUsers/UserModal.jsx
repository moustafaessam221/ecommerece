import { XCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

function UserModal({ user, onClose }) {
  if (!user) return null; // Don't render anything if no user is selected

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <XCircleIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold mb-4">
          {user.firstName} {user.lastName}
        </h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Address:</strong> {user.address?.address},{" "}
          {user.address?.city}
        </p>
        <p>
          <strong>Company:</strong> {user.company?.name} ({user.company?.title})
        </p>
        <p>
          <strong>University:</strong> {user.university}
        </p>
        <p>
          <strong>Blood Group:</strong> {user.bloodGroup}
        </p>
      </div>
    </div>
  );
}

export default UserModal;
