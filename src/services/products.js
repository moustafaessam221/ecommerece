const BASE_URL = "https://dummyjson.com";

// all products
export const getAllProducts = async (limit, skip) => {
  const response = await fetch(
    `${BASE_URL}/products?limit=${limit}&skip=${skip}`
  );
  const data = await response.json();
  return data;
};

// products
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}/products?limit=10`);
  const data = await response.json();
  return data;
};

// categories
export const getCategories = async () => {
  const response = await fetch(`${BASE_URL}/products/category-list`);
  const data = await response.json();
  return data;
};

// products by category
export const getProductsByCategory = async (categoryLink) => {
  const response = await fetch(`${BASE_URL}/products/category/${categoryLink}`);
  const data = await response.json();
  return data;
};

// product by id
export const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const data = await response.json();
  return data;
};

// search products
export const searchProducts = async (query) => {
  const response = await fetch(`${BASE_URL}/products/search?q=${query}`);
  const data = await response.json();
  return data;
};

// Sorted products
export const sortedProducts = async (sort, order = "desc", limit = 8) => {
  const response = await fetch(
    `${BASE_URL}/products?limit=${limit}&sortBy=${sort}&order=${order}`
  );
  const data = await response.json();
  return data;
};

// Add product
export const addProduct = async (product) => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => response.json());
  return response;
};

// Update product
export const updateProduct = async (id, product) => {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  }).then((response) => response.json());
  return response;
};
