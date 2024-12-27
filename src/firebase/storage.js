// Functions for Firebase Storage

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  increment,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { db } from "./config";

// Add to cart
export const addToCart = async (userId, productId, amount = 1) => {
  try {
    const cartRef = doc(db, "users", userId, "cart", productId);
    await setDoc(
      cartRef,
      {
        amount: increment(amount), // increment the amount
      },
      { merge: true } // merge the existing document
    );
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// fetch cart
export const fetchCart = async (userId) => {
  try {
    const cartRef = collection(db, "users", userId, "cart");

    const snapshot = await getDocs(cartRef);

    return snapshot.docs.map((doc) => ({
      id: doc.id, // product ID
      ...doc.data(), // other fields like quantity
    }));
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

// remove from cart
export const removeFromCart = async (userId, productId) => {
  try {
    const cartRef = doc(db, "users", userId, "cart", productId);
    await deleteDoc(cartRef); // Use deleteDoc with await for asynchronous operation
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};


// clear cart
export const clearCart = async (userId) => {
  try {
    const cartRef = collection(db, "users", userId, "cart");
    const snapshot = await getDocs(cartRef);
    const batch = writeBatch(db);
    snapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit(); 
  } catch (error) {
    console.error("Error clearing cart:", error);
    throw error;
  }
};

// add to wishlist
export const addToWishlist = async (userId, productId) => {
  try {
    const wishlistRef = doc(db, "users", userId, "wishlist", productId);
    await setDoc(
      wishlistRef,
      {
        amount: 1,
      },
      {
        merge: true,
      }
    );
    console.log("Added to wishlist successfully");
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    throw error;
  }
};

// fetch wishlist
export const fetchWishlist = async (userId) => {
  try {
    const wishlistRef = collection(db, "users", userId, "wishlist");
    const snapshot = await getDocs(wishlistRef);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching wishlist:", error.message);
    throw error;
  }
};

// remove from wishlist
export const removeFromWishlist = async (userId, productId) => {
  try {
    const wishlistRef = doc(db, "users", userId, "wishlist", productId);
    await deleteDoc(wishlistRef); // Use deleteDoc with await for asynchronous operation
    console.log("Document successfully deleted!");
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    throw error;
  }
};
