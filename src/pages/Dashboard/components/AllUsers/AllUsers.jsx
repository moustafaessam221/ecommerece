import React, { useEffect, useState } from "react";
import { fetchUsers, searchUsers } from "../../../../services/users";
import UserModal from "./UserModal";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchAllUsers();
  }, []);

  function handleSearch(query) {
    searchUsers(query)
      .then((response) => {
        setUsers(response.users);
      })
      .catch((error) => {
        console.error("Error searching users:", error);
      });
  }

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">All Users</h1>
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          onChange={(e) => handleSearch(e.target.value)}
        >
          <input
            type="text"
            placeholder="Search by name"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          />
        </form>
        <ul className="flex flex-wrap gap-4 justify-center">
          {users.map((user) => (
            <button
              key={user.id}
              className="text-left w-[291px] border border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
              onClick={() => handleUserClick(user)}
            >
              <p className="text-lg font-semibold text-gray-700 mb-2">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-600 mb-1">{user.email}</p>
              <p className="text-sm text-gray-600 mb-1">Age: {user.age}</p>
              <p className="text-sm text-gray-600">Role: {user.role}</p>
            </button>
          ))}
        </ul>
      </div>

      <UserModal user={selectedUser} onClose={handleCloseModal} />
    </div>
  );
}

export default AllUsers;
