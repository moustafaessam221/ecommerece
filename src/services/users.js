const BASE_URL = "https://dummyjson.com";

// fetch all users from dummyJSON
export const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const data = await response.json();
  console.log(data);
  return data;
};

// search users from dummyJSON
export const searchUsers = async (query) => {
  const response = await fetch(`${BASE_URL}/users/search?q=${query}`);
  const data = await response.json();
  return data;
};


// fetch users from firebase
