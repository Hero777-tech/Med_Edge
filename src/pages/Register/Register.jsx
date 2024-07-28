import React, { useEffect } from "react";
import styles from "./Register.module.css"; // Importing CSS module
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const selector1 = document.getElementById("selector1");
    const selector2 = document.getElementById("selector2");

    selector1.addEventListener("change", function () {
      const selectedType = this.value;

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
            code:
              country.idd.root +
              (country.idd.suffixes ? country.idd.suffixes[0] : ""),
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
          <form action="" method="post">
            <div className={styles.name}>
              <input
                type="text"
                placeholder="First Name"
                name="first-name"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last-name"
                required
              />
            </div>

            <input type="email" placeholder="Email" name="email" required />

            <select name="Gender" className={styles.Gender}>
              <option value="gender" selected disabled required>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <div className={styles.numbers}>
              <select
                className={styles.countryCode}
                id="countryCode"
                name="countryCode"
                value="+91"
                required
              >
                <option value="+91(India)">+91(India)</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                className={styles.phone}
                required
                placeholder="Enter your mobile number"
              />
            </div>

            <div className={styles.date}>
              <label>Date of Birth</label>
              <input
                type="date"
                placeholder="Date of Birth"
                name="dob"
                value="date-of-birth"
                id="date"
              />
            </div>

            <div className={styles.selector} required>
              <select id="selector1">
                <option value="none" selected disabled>
                  Facility Type
                </option>
                <option value="hospital">Hospital</option>
                <option value="college">College</option>
              </select>

              <select id="selector2" required>
                <option value="none" selected disabled>
                  Please Select a Facility Type
                </option>
              </select>
            </div>

            <div className={styles.pass}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="Cpassword"
                required
              />
            </div>

            <button>Register</button>
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
