import React, { useState } from "react";
import AddProduct from "./components/AddProduct";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import AllUsers from "./components/AllUsers/AllUsers";
import AdminProducts from "./components/Admin-Products/AdminProducts";

function Dashboard() {
  return (
    <Layout>
      <Routes>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="users" element={<AllUsers />} />
      <Route path="products" element={<AdminProducts />} />
        {/* <Route path="orders" element={<OrdersPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default Dashboard;
