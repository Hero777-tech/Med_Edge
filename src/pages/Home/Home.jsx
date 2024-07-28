import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css"; // Import CSS modules

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.Mededge}>
            <h1>MedEdge</h1>
            <h2>Bridging the Gap in Medical and Technological Collaboration</h2>
            <p>
              MedEdge is an innovative initiative designed to bridge the
              significant gap between Medical Colleges, Hospitals, and
              Technological Universities in India. This project aims to foster
              collaboration and advance research by integrating the latest
              technological advancements into the medical field.
            </p>
          </div>
          <div className={styles.community}>
            <h3>Join Our Community</h3>
            <p>
              Discover the unique opportunities at MedEdge, where excellence in
              education meets exceptional healthcare. Whether you are a future
              medical professional or seeking top-notch healthcare services, we
              invite you to be part of our vibrant community dedicated to making
              a difference.
            </p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={goToLogin}>
              Login
            </button>
            <button className={styles.button} onClick={goToRegister}>
              Register
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightimg}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
