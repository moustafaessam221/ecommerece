import React, { useState } from "react";
import Layout from "./Layout";
import GoogleIcon from "../../assets/icons/Icon-Google.svg";
import styles from "./SignForms.module.css";
import { signInWithGoogle, signUpWithEmail } from "../../firebase/auth";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const { user } = useAuth();
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    navigate("/home");
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
    // sign-up logic
    try {
      await signUpWithEmail(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // google sign-up
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <Layout>
      <div className="">
        <h1 className={styles.title}>Create an account</h1>
        <p className={styles.subtitle}>Enter your details below</p>
        <form action="submit" className={styles.form} onSubmit={handleSignUp}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input
            type="email"
            placeholder="Email"
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
            Create Account
          </button>
          <button className={styles.googleButton} onClick={handleGoogleSignUp}>
            <img src={GoogleIcon} alt="" className={styles.googleIcon} /> Sign
            up with Google
          </button>
        <p className="text-center mt-4 text-gray-600">
          Already have an account? <Link to="/signin" className="text-blue-600">Sign in</Link>
        </p>
        </form>
      </div>
    </Layout>
  );
}

export default SignUp;
