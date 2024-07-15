import { useState } from "react";
import "./App.css";
import Username from "./comp/Username";
import PendingLabTests from "./comp/pendingLabTests";
import Completedtest from "./comp/Completedtest";
import Inventry from "./comp/Inventry";

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
      case "pendingLabTests":
        return (
          <>
            <PendingLabTests></PendingLabTests>
          </>
        );
      case "completedTests":
        return (
          <>
            <Completedtest></Completedtest>
          </>
        );
      case "inventoryManagement":
        return (
          <>
            <Inventry></Inventry>
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
            onClick={() => handleItemClick("pendingLabTests")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Pending Lab Tests
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("completedTests")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Completed Tests
          </div>
          <div
            className="list"
            onClick={() => handleItemClick("inventoryManagement")}
          >
            <img
              className="icon-img"
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Inventory Management
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
