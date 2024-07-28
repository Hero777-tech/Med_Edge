import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"; // Importing CSS module

export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Login</h1>
          <form action="" method="post">
            <input type="email" placeholder="Email" name="email" required />
            <div className={styles.pass}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.img}>
            <h1>Welcome Back.</h1>
            <p>
              Join our community of care. Sign up to receive the highest
              standard of medical support and services.
            </p>
          </div>
          <div className={styles.content}>
            <p>Don't Have an Account?</p>
            <button onClick={goToRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
