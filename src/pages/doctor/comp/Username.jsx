
import { useState, useEffect } from "react";
import style from "./Username.module.css";
import { jwtDecode } from "jwt-decode";
function Username() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      try {
        let token = localStorage.getItem('token');
        console.log(token)
        if (token) {
          let decoded = jwtDecode(token);
          console.log("token",decoded);

          // Fetch user data with the decoded token information
          const res = await fetch("http://localhost:5000/api/getUsers", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const result = await res.json();
          console.log(result)
          setUser(result.filter((us)=>us._id==decoded.user._id));
          console.log(user)
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    getUser(); // Call the function to fetch user data
  }, []); // Empty dependency array means this runs once on mount

  if (!user) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <div className={style.contain}>
      Welcome back {user[0]?.username}
      <div className={style.details}>
        <h5>Your Details</h5>
        <ul>
          <li>
            <b>Patient Id:</b> {user[0]?.patientId || "N/A"}
          </li>
          <li>
            <b>Full Name:</b> {user[0]?.fullName || "N/A"}
          </li>
          <li>
            <b>Date of Birth:</b> {user[0]?.dob || "N/A"}
          </li>
          <li>
            <b>Gender:</b> {user[0]?.gender || "N/A"}
          </li>
          <li>
            <b>Phone Number:</b> {user[0]?.
phoneNumber
 || "N/A"}
          </li>
          <li>
            <b>Emergency Contact Information:</b> {user[0]?.emergencyContact || "N/A"}
          </li>
          <li>
            <b>Insurance Information:</b> {user[0]?.insurance || "N/A"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Username;
