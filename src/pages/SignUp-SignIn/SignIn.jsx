import React, { useState } from "react";
import Layout from "./Layout";
import GoogleIcon from "../../assets/icons/Icon-Google.svg";
import styles from "./SignForms.module.css";
import { signInWithEmail, signInWithGoogle } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SignIn() {
  const { user } = useAuth();
  let navigate = useNavigate();

  if (user) {
    navigate("/home");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    // sign-in logic
    try {
      await signInWithEmail(email, password);
      setEmail("");
      setPassword("");
      console.log("Signed in successfully");
      navigate("/home");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // google sign-in
  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    navigate("/home");
  };

  return (
    <Layout>
      <div>
        <h1 className={styles.title}>Login to your account</h1>
        <p className={styles.subtitle}>Enter your details below</p>
        <form action="submit" className={styles.form} onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Email or phone number"
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.primaryButton}>
            Login
          </button>
          <button className={styles.googleButton} onClick={handleGoogleSignIn}>
            <img src={GoogleIcon} alt="" className={styles.googleIcon} /> Sign
            in with Google
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default SignIn;
