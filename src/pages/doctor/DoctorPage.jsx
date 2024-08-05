import { useState } from "react";
import styles from "./DoctorPage.module.css";
import Username from "./comp/Username";
import Appointments from "./comp/Appointment";
import Patient from "./comp/Patient";
import Prescription from "./comp/Prescription";
import TaskForm from "./comp/Task";
import ResourcesForm from "./comp/Resources";
import Message from "./comp/Message";
import Collaboration from "./comp/Collaboration";
import { useNavigate } from "react-router-dom";

function DoctorPage() {
  const [selectedItem, setSelectedItem] = useState("username");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const navigate = useNavigate();

  const renderTableContent = () => {
    switch (selectedItem) {
      case "username":
        return <Username />;
      case "appointments":
        return <Appointments />;
      case "patients":
        return <Patient />;
      case "prescription":
        return <Prescription />;
      
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img
          className={styles.topImg}
          src="src/assets/WhatsApp Image 2024-06-24 at 16.03.55.jpeg"
          alt="xmt"
        />
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          <div
            className={`${selectedItem === "username" && "active"} ${
              styles.list
            }`}
            onClick={() => handleItemClick("username")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Username
          </div>
          <div
            className={`${selectedItem === "appointments" && "active"} ${
              styles.list
            }`}
            onClick={() => handleItemClick("appointments")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Appointments
          </div>
          <div
            className={`${selectedItem === "patients" && "active"} ${
              styles.list
            }`}
            onClick={() => handleItemClick("patients")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Patients
          </div>
          <div
            className={`${selectedItem === "prescription" && "active"} ${
              styles.list
            }`}
            onClick={() => handleItemClick("prescription")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Prescription
          </div>
          
          <div className={styles.list} onClick={() => navigate("/")}>
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Logout
          </div>
        </div>
        <div className={styles.right}>{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default DoctorPage;
