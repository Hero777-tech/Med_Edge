import { useState } from "react";
import styles from "./Researcher.module.css";
import Username from "./comp/Username";
import Myproject from "./comp/Myproject";
import Research from "./comp/Research";
import Publication from "./comp/Publication";
import MedicalR from "./comp/MedicalR";
import Task from "./comp/Task";
import Message from "./comp/Message";

function Researcher() {
  var name = "abhishek kumar";
  var email = "abhsiej@emil.com";
  var phone = "7370004668";
  var gender = "male";
  var address = "nits silchar chachar, assam, india";
  const [selectedItem, setSelectedItem] = useState("username");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTableContent = () => {
    switch (selectedItem) {
      case "username":
        return (
          <Username
            prop={name}
            email={email}
            gender={gender}
            phone={phone}
            address={address}
          />
        );
      case "myProjects":
        return <Myproject />;
      case "researchData":
        return <Research />;
      case "publication":
        return <Publication />;
      case "medicalResources":
        return <MedicalR />;
      case "taskManagement":
        return <Task />;
      case "messages":
        return <Message />;
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
            className={styles.list}
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
            className={styles.list}
            onClick={() => handleItemClick("myProjects")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            My Projects
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("researchData")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Research Data
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("publication")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Publication
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("medicalResources")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Medical Resources
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("taskManagement")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Task Management
          </div>
          <div
            className={styles.list}
            onClick={() => handleItemClick("messages")}
          >
            <img
              className={styles.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Messages
          </div>
        </div>
        <div className={styles.right}>{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default Researcher;
