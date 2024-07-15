import { useState } from "react";
import "./App.css";
import Username from "./comp/Username";
import Appointment from "./comp/Appointment";
import MedicalHistory from "./comp/medicalhistory";
import Prescription from "./comp/Prescription";

import Message from "./comp/Message";
function App() {
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
    <div className="main">
      <div className="top">
        <img
          className="top-img"
          src="src/assets/WhatsApp Image 2024-06-24 at 16.03.55.jpeg"
          alt="xmt"
        />
      </div>
      <div className="middle">
        <div className="left">
          <div className="list" onClick={() => handleItemClick("username")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Username
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("upcomingAppointments")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Upcoming Appointments
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("medicalHistory")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Medical History
          </div>
          <div className="list" onClick={() => handleItemClick("prescription")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Prescription
          </div>
          <div className="list" onClick={() => handleItemClick("messages")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Messages
          </div>
        </div>
        <div className="right">{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default App;
