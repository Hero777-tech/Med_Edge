import { useState } from "react";
import styles from "./PatientPage.module.css";
import Username from "./comp/Username";
import Appointment from "./comp/Appointment";
import MedicalHistory from "./comp/medicalhistory";
import Prescription from "./comp/Prescription";

import Message from "./comp/Message";
function PatientPage() {
  const [selectedItem, setSelectedItem] = useState("username");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTableContent = () => {
    switch (selectedItem) {
      case "username":
        return (
          <>
            <Username></Username>
          </>
        );
      case "upcomingAppointments":
        return (
          <>
            <Appointment></Appointment>
          </>
        );
      case "medicalHistory":
        return (
          <>
            <MedicalHistory></MedicalHistory>
          </>
        );
      case "prescription":
        return (
          <>
            <Prescription></Prescription>
          </>
        );
      case "messages":
        return (
          <>
            {" "}
            <Message></Message>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img
          className={styles["top-img"]}
          src="src/assets/WhatsApp Image 2024-06-24 at 16.03.55.jpeg"
          alt="xmt"
        />
      </div>
      <div className={styles.middle}>
        <div className={styles.left}>
          <div
            className={styles.list}
            onClick={() => handleItemClick("username")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Username
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("upcomingAppointments")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Upcoming Appointments
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("medicalHistory")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Medical History
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("prescription")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Prescription
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("messages")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Messages
          </div>
        </div>
        <div className={styles.right}>{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default PatientPage;
