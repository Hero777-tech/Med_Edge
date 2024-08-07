import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Register.module.css";

const API_URL = 'https://med-edge-pi.vercel.app' || 'http://localhost:5000';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    countryCode: "+91",
    phoneNumber: "",
    dateOfBirth: "",
    facilityType: "",
    facilitySubType: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const goToLogin = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, {
        username: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        password: formData.password,
        gender: formData.gender,
        phoneNumber: `${formData.countryCode}${formData.phoneNumber}`,
        dateOfBirth: formData.dateOfBirth,
        facilityType: formData.facilityType,
        facilitySubType: formData.facilitySubType,
      });

      console.log(response.data);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred during registration");
    }
  };

  useEffect(() => {
    const selector1 = document.getElementById("selector1");
    const selector2 = document.getElementById("selector2");

    selector1.addEventListener("change", function () {
      const selectedType = this.value;
      setFormData({ ...formData, facilityType: selectedType, facilitySubType: "" });

      selector2.innerHTML = "";

      if (selectedType === "hospital") {
        const hospital = ["Doctor", "Patient", "Pathologist", "Researcher"];
        let defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Select a Hospital Facility Type";
        defaultOption.selected = true;
        defaultOption.disabled = true;
        selector2.add(defaultOption);

        hospital.forEach((hospital) => {
          const option = document.createElement("option");
          option.value = hospital;
          option.text = hospital;
          selector2.add(option);
        });
      } else if (selectedType === "college") {
        const college = ["Professor", "Student", "Researcher"];
        let defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Select a College Facility Type";
        defaultOption.selected = true;
        defaultOption.disabled = true;
        selector2.add(defaultOption);
        college.forEach((college) => {
          const option = document.createElement("option");
          option.value = college;
          option.text = college;
          selector2.add(option);
        });
      }
    });

    const countryCodeSelect = document.getElementById("countryCode");

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryCodes = data.map((country) => {
          return {
            name: country.name.common,
            code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
          };
        });

        countryCodes.sort((a, b) => a.name.localeCompare(b.name));

        countryCodes.forEach((country) => {
          if (country.code) {
            const option = document.createElement("option");
            option.value = country.code;
            option.textContent = `${country.code} (${country.name})`;
            countryCodeSelect.appendChild(option);
          }
        });
      })
      .catch((error) => console.error("Error fetching country codes:", error));
  }, []);

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Register</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.name}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <select
              name="gender"
              className={styles.Gender}
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className={styles.numbers}>
              <select
                className={styles.countryCode}
                id="countryCode"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                required
              >
                <option value="+91">+91(India)</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                className={styles.phone}
                required
                placeholder="Enter your mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>

            <div className={styles.date}>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.selector} required>
              <select
                id="selector1"
                name="facilityType"
                value={formData.facilityType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Facility Type</option>
                <option value="hospital">Hospital</option>
                <option value="college">College</option>
              </select>

              <select
                id="selector2"
                name="facilitySubType"
                value={formData.facilitySubType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Please Select a Facility Type</option>
              </select>
            </div>

            <div className={styles.pass}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Register</button>
          </form>
        </div>
        <div className={styles.right}>
          <div className={styles.img}>
            <h1>MedEdge.</h1>
            <p>
              Join our community of care. Sign up to receive the highest
              standard of medical support and services.
            </p>
          </div>
          <div className={styles.content}>
            <p>Have an Account?</p>
            <br />
            <button onClick={goToLogin} className={styles.loginbtn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
