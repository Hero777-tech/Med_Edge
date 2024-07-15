import { useState } from "react";
import "./App.css";
import Username from "./comp/Username";
import ResearchProject from "./comp/Research";
import ResearchRequest from "./comp/Researchrequest";
import Medical from "./comp/medical";

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
      case "researchprojects":
        return (
          <>
            <ResearchProject></ResearchProject>
          </>
        );
      case "researchrequests":
        return (
          <>
            <ResearchRequest />
          </>
        );
      case "medicalresources":
        return (
          <>
            <Medical></Medical>
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
            onClick={() => handleItemClick("researchprojects")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Research projects
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("researchrequests")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Research requests
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("medicalresources")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Resources
          </div>
        </div>
        <div className="right">{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default App;
