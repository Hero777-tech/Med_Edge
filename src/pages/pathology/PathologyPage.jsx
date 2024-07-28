import { useState } from "react";
import styles from "./Pathology.module.css";
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
            onClick={() => handleItemClick("pendingLabTests")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Pending Lab Tests
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("completedTests")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Completed Tests
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("inventoryManagement")}
          >
            <img
              className={styles["icon-img"]}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />
            Inventory Management
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

export default App;
