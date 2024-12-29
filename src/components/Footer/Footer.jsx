import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-column"]}>
          <h1 className={styles["footer-title"]}>Exclusive</h1>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles["footer-input"]}
          />
        </div>
        <div className={styles["footer-column"]}>
          <h1 className={styles["footer-title"]}>Support</h1>
          <p>FAQ</p>
          <p>Shipping</p>
          <p>Returns</p>
        </div>
        <div className={styles["footer-column"]}>
          <h1 className={styles["footer-title"]}>Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className={styles["footer-column"]}>
          <h1 className={styles["footer-title"]}>Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
      {/* copyright */}
      <div>
        <p className="text-center py-4 text-gray-400 text-sm opacity-50">
          &copy; Copyright Exclusive 2024. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
