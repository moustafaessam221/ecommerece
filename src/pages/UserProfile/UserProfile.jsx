import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchUserProfile } from "../../firebase/auth";
import { DateTransform } from "../../utils/DateTransform";

function UserProfile() {
  const [specificUser, setSpecificUser] = useState(null);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    const fetchSpecificUser = async () => {
      try {
        const userProfile = await fetchUserProfile(user.uid);
        setSpecificUser(userProfile);
        console.log(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    if (user) {
      fetchSpecificUser();
    } else {
      setSpecificUser(null);
    }
  }, [user]);

  if (!specificUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 lg:px-20 sm:p-8 bg-gray-100 min-h-screen">
      <h1>User Profile</h1>
      <div className="flex items-center">
        <img
          src={specificUser.photoURL}
          alt=""
          className="w-16 h-16 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{specificUser.name}</p>
          <p>{specificUser.email}</p>
        </div>
      </div>
      <div>
          <p>{specificUser.providerId}</p>
        <p>Member since: {DateTransform(specificUser.createdAt)}</p>
      </div>
    </div>
  );
}

export default UserProfile;
