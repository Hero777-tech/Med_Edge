import React, { useState } from "react";
import style from "./Message.module.css";

function Message() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTableContent = () => {
    switch (selectedItem) {
      case "Message from Dr.smith":
        return (
          <div className={style.box}>
            <div className="messageFrom">Message from Doctor Smith</div>
            <div className="date">Date: June 20, 2024</div>
            <div className="description">
              Dear Patient, please follow the prescribed medication and let me
              know if you are experiencing any side effects.
            </div>
          </div>
        );
      case "Appointment Confirmation":
        return (
          <div className={style.box}>
            <div className="messageFrom">Appointment Confirmation</div>
            <div className="date">Date: June 20, 2024</div>
            <div className="description">
              Dear Patient, your appointment is confirmed. Please arrive 10
              minutes early.
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className={style.up}>
        <div className={style.readMessages}>
          <div
            className={`${style.box} ${
              selectedItem === "Message from Dr.smith" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("Message from Dr.smith")}
          >
            <div className="message">Message from Dr. Smith</div>
          </div>
          <div
            className={`${style.box} ${
              selectedItem === "Appointment Confirmation" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("Appointment Confirmation")}
          >
            <div className="messageSubject">Appointment Confirmation</div>
          </div>
          <div
            className={`${style.box} ${
              selectedItem === "Message from Dr.smith" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("Message from Dr.smith")}
          >
            <div className="message">Message from Dr. Smith</div>
          </div>
          <div
            className={`${style.box} ${
              selectedItem === "Appointment Confirmation" ? style.selected : ""
            }`}
            onClick={() => handleItemClick("Appointment Confirmation")}
          >
            <div className="messageSubject">Appointment Confirmation</div>
          </div>
        </div>

        <div className={style.upon}>{renderTableContent()}</div>
      </div>
      <div className={style.composeMessage}>
        <h4>Compose New Message:</h4>
        <div className="to">
          <b>To:</b>
          <input
            className="form-control"
            type="text"
            placeholder="Researcher's Name"
            aria-label="default input example"
          />
        </div>
        <div className="subject">
          <b>Subject:</b>
          <input
            className="form-control"
            type="text"
            placeholder="Subject"
            aria-label="default input example"
          />
        </div>
        <div className="messageTextArea">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <b>Message:</b>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className={style.sendMessage}>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

export default Message;
