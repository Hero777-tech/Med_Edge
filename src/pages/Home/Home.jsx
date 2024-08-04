/*import React from "react";
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
*/ // old home page code

import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Sscrool
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // submit
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
      });
    }

    //logss
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', function() {
        alert('Login functionality coming soon!');
      });
    }

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('h2').forEach(h2 => observer.observe(h2));
  }, []);

  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          header {
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
          }
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
          }
          .logo img {
            height: 40px;
          }
          .nav-links {
            display: flex;
            list-style: none;
          }
          .nav-links li {
            margin-left: 2rem;
          }
          .nav-links a {
            text-decoration: none;
            color: #333;
            font-weight: bold;
          }
          .login-btn {
            background-color: #b00b84;
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
          }
          main {
            padding-top: 80px;
          }
          .hero {
            background-color: #b00b84;
            color: #fff;
            text-align: center;
            padding: 4rem 2rem;
          }
          .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          .about, .community, .contact {
            padding: 4rem 5%;
          }
          h2 {
            color: #b00b84;
            margin-bottom: 1rem;
          }
          form {
            display: flex;
            flex-direction: column;
            max-width: 500px;
            margin: 0 auto;
          }
          form input, form textarea {
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          form button {
            background-color: #b00b84;
            color: #fff;
            border: none;
            padding: 0.5rem;
            border-radius: 5px;
            cursor: pointer;
          }
          footer {
            background-color: #333;
            color: #fff;
            padding: 2rem 5%;
          }
          .footer-content {
            display: flex;
            justify-content: space-between;
          }
          .footer-section h3 {
            margin-bottom: 1rem;
          }
          .footer-section ul {
            list-style: none;
          }
          .footer-section a {
            color: #fff;
            text-decoration: none;
          }
          .social-icons {
            display: flex;
            gap: 1rem;
          }
          .social-icon {
            background-color: #fff;
            color: #333;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            text-decoration: none;
          }
          @media (max-width: 768px) {
            nav {
              flex-direction: column;
            }
            .nav-links {
              margin-top: 1rem;
            }
            .nav-links li {
              margin-left: 0;
              margin-right: 1rem;
            }
            .login-btn {
              margin-top: 1rem;
            }
            .footer-content {
              flex-direction: column;
              gap: 2rem;
            }
          }
          .fade-in {
            animation: fadeIn 1s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div>
        <header>
          <nav>
            <div className="logo">
              <img src="logo.png" alt="MedEdge Logo" />
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="login-btn">Login</button>
          </nav>
        </header>

        <main>
          <section id="home" className="hero">
            <h1>Welcome to MedEdge</h1>
            <p>Bridging the Gap in Medical and Technological Collaboration</p>
          </section>

          <section id="about" className="about">
            <h2>About Us</h2>
            <p>MedEdge is an innovative initiative designed to bridge the significant gap between Medical Colleges, Hospitals, and Technological Universities in India. This project aims to foster collaboration and advance research by integrating the latest technological advancements into the medical field.</p>
          </section>

          <section id="community" className="community">
            <h2>Join Our Community</h2>
            <p>Discover the unique opportunities at MedEdge, where excellence in education meets exceptional healthcare. Whether you are a future medical professional or seeking top-notch healthcare services, we invite you to be part of our vibrant community dedicated to making a difference.</p>
          </section>

          <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>
        </main>

        <footer>
          <div className="footer-content">
            <div className="footer-section">
              <h3>MedEdge</h3>
              <p>&copy; 2024 MedEdge. All rights reserved.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">IN</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;