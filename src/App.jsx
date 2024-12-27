import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./styles/tailwind.css";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp-SignIn/SignUp";
import SignIn from "./pages/SignUp-SignIn/SignIn";
import { useAuth } from "./context/AuthContext";
import ProductsPage from "./pages/Products/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/Cart/CartPage";
import WishListPage from "./pages/WishList/WishListPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import AllProducts from "./pages/AllProducts/AllProducts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/allproducts" element={<AllProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
