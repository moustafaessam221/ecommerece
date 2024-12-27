const BASE_URL = "https://dummyjson.com";

// all products
export const getAllProducts = async (limit, skip) => {
  const response = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`);
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
