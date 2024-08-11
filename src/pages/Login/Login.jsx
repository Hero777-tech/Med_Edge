import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

const API_URL = 'http://localhost:5000';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const goToRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      
      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);
      
      // Check for user type in the response
      const userType = response.data.userType;
      
      if (userType) {
        // Navigate based on user type
        switch(userType.toLowerCase()) {
          case 'doctor':
            navigate("/doctor");
            break;
          case 'patient':
            navigate("/patient");
            break;
          case 'pathologist':
            navigate("/pathology");
            break;
          case 'researcher':
            navigate("/researcher");
            break;
          case 'professor':
            navigate("/professor");
            break;
          default:
            // If no matching route, navigate to a default page
            navigate("/");
            break;
        }
      } else {
        // If userType is not provided, navigate to a default page
        console.log("User type not provided in the response. Navigating to default page.");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.response?.data?.message || "An error occurred during login");
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Login</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={styles.pass}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
