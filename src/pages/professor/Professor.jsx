import { useState } from "react";
import style from "./Professor.module.css";
import Username from "./comp/Username";
import ResearchProject from "./comp/Research";
import ResearchRequest from "./comp/Researchrequest";
import Medical from "./comp/Medical";

function Professor() {
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
    <div className={style.main}>
      <div className={style.top}>
        <img
          className={style.topImg}
          src="src/assets/WhatsApp Image 2024-06-24 at 16.03.55.jpeg"
          alt="xmt"
        />
      </div>
      <div className={style.middle}>
        <div className={style.left}>
          <div
            className={style.list}
            onClick={() => handleItemClick("username")}
          >
            <img
              className={style.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Username
          </div>
          <div
            className={style.list}
            onClick={() => handleItemClick("researchprojects")}
          >
            <img
              className={style.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Research projects
          </div>
          <div
            className={style.list}
            onClick={() => handleItemClick("researchrequests")}
          >
            <img
              className={style.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Research requests
          </div>
          <div
            className={style.list}
            onClick={() => handleItemClick("medicalresources")}
          >
            <img
              className={style.iconImg}
              src="src/assets/WhatsApp Image 2024-06-24 at 16.03.08.jpeg"
              alt="amt"
            />{" "}
            Resources
          </div>
        </div>
        <div className={style.right}>{renderTableContent()}</div>
      </div>
    </div>
  );
}

export default Professor;
