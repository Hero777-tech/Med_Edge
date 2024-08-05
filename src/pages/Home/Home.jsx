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

//---------------------------------

//version 1 UI not needed

/* import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        form.reset();
      });
    }

    // Simple animation for section headers
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
          .auth-buttons {
            display: flex;
            gap: 1rem;
          }
          .auth-button {
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
            .auth-buttons {
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
            <div className="auth-buttons">
              <button className="auth-button" onClick={goToLogin}>Login</button>
              <button className="auth-button" onClick={goToRegister}>Register</button>
            </div>
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

export default Home; */


// Version 2 UI

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./Home.module.css";
import heroImage from '../../assets/pic.png';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

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
            background-color: #f0f0f0;
          }
          header {
            background-color: #fff;
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000;
          }
          nav ul {
            display: flex;
            list-style: none;
          }
          nav ul li {
            margin-left: 2rem;
          }
          nav ul li a {
            text-decoration: none;
            color: #333;
          }
          .auth-buttons button {
            margin-left: 1rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .login-btn {
            background-color: transparent;
            color: #333;
            border: 1px solid #333;
          }
          .register-btn {
            background-color: #00b4d8;
            color: #fff;
          }
          
          
          .hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 5%;
    background-color: #fff;
    gap: 2rem;
  }

  .hero-content {
    flex: 1;
    max-width: 50%;
  }

  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .hero p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #666;
  }

  .cta-button {
    background-color: #00b4d8;
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image img {
    max-width: 65%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .hero {
      flex-direction: column;
    }
    .hero-content, .hero-image {
      max-width: 100%;
    }
  }



          .services {
            display: flex;
            justify-content: space-between;
            padding: 2rem 5%;
            background-color: #00b4d8;
          }
          .service-item {
            flex: 1;
            text-align: center;
            color: #fff;
            padding: 1rem;
          }
          .service-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
          }


          

        .about-us {
      padding: 4rem 5%;
      background-color: #ffffff;
    }

    .about-us-content {
      display: flex;
      align-items: center;
      gap: 4rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .about-us-text {
      flex: 1;
    }

    .about-us h2 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .about-us p {
      font-size: 1.1rem;
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .know-more-btn {
      background-color: #00b4d8;
      color: #ffffff;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .know-more-btn:hover {
      background-color: #0096b1;
    }

    .about-us-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .about-us-image img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      .about-us-content {
        flex-direction: column;
        gap: 2rem;
      }

      .about-us-text,
      .about-us-image {
        width: 100%;
      }
    }

        










        `}
      </style>
      <div>
        <header>
          <div className="logo">MedEdge</div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about_page">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="login-btn" onClick={goToLogin}>Login</button>
            <button className="register-btn" onClick={goToRegister}>Register</button>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-content">
              <h1>We have Best Medicare plan options for you</h1>
              <p>
                MedEdge is an innovative initiative designed to bridge the
                significant gap between Medical Colleges, Hospitals, and
                Technological Universities in India.
              </p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="hero-image">
              {/* Add your hero image here */}
              <img src={heroImage} alt="Hero" />
            </div>
          </section>

          <section className="services">
            <div className="service-item">
              <div className="service-icon">🏥</div>
              <h3>Best Treatment</h3>
              <p>Quality care for all patients</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🚑</div>
              <h3>Emergency Help</h3>
              <p>24/7 emergency services</p>
            </div>
            <div className="service-item">
              <div className="service-icon">👨‍⚕️</div>
              <h3>Medical Staff</h3>
              <p>Experienced healthcare professionals</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🩺</div>
              <h3>Qualified Doctors</h3>
              <p>Specialists in various fields</p>
            </div>
          </section>



          <section className="about-us" id='about_page'>
            <div className="about-us-content">
              <div className="about-us-text">
                <h2>About Us</h2>
                <p>MedEdge is committed to bridging the gap between medical education and cutting-edge technology, fostering innovation in healthcare.</p>
                <button className="know-more-btn">Know More</button>
              </div>
              <div className="about-us-image">
                <img src="path_to_your_image.jpg" alt="MedEdge Professional" />
              </div>
            </div>
          </section>







        </main>
      </div>
    </>
  );
};

export default Home;