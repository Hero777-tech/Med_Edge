import { useState } from "react";
import "./App.css";
import Username from "./comp/Username";
import Appointments from "./comp/Appointment";
import Patient from "./comp/patient";
import Prescription from "./comp/Prescription";
import TaskForm from "./comp/Task";
import ResourcesForm from "./comp/Resources";
import Message from "./comp/Message";
import Collaboration from "./comp/Collaboration";

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
      case "appointments":
        return (
          <>
            <Appointments></Appointments>
          </>
        );
      case "patients":
        return (
          <>
            <Patient />
          </>
        );
      case "prescription":
        return (
          <>
            <Prescription></Prescription>
          </>
        );
      case "resources":
        return (
          <>
            {" "}
            <ResourcesForm></ResourcesForm>
          </>
        );
      case "taskManagement":
        return (
          <>
            {" "}
            <TaskForm></TaskForm>
          </>
        );
      case "messages":
        return (
          <>
            {" "}
            <Message></Message>
          </>
        );
      case "collaboration":
        return (
          <>
            {" "}
            <Collaboration></Collaboration>
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
          <div className="list" onClick={() => handleItemClick("appointments")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Appointments
          </div>
          <div className="list" onClick={() => handleItemClick("patients")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Patients
          </div>
          <div className="list" onClick={() => handleItemClick("prescription")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Prescription
          </div>
          <div className="list" onClick={() => handleItemClick("resources")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Resources
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("taskManagement")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Task Management
          </div>
          <div className="list" onClick={() => handleItemClick("messages")}>
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Messages
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("collaboration")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Collaboration
          </div>
        </div>
        <div className="right">{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default App;
