import React, { useState } from "react";
import jsPDF from "jspdf";
import style from "./Prescription.module.css";

function Prescription() {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = (id) => {
    const doc = new jsPDF();
    const element = document.getElementById(id);
    doc.fromHTML(element.innerHTML, 10, 10, {
      width: 180,
    });
    doc.save("prescription.pdf");
  };

  const handleContactClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={`${style.box} ${showModal ? style.blur : ""}`}>
        <h3>Prescriptions</h3>

        <div className={style.item} id="prescription1">
          <hr />
          <div className="title">
            <b>Paracetamol</b>
          </div>
          <div className="date">
            <b>Prescribed on:</b> June 15, 2024
          </div>
          <div className="doctor">
            <b>Doctor:</b> Dr. Smith
          </div>
          <div className="dosage">
            <b>Dosage:</b> 500mg
          </div>
          <div className="frequency">
            <b>Frequency:</b> Twice daily
          </div>
          <div className="instruction">
            <b>Instructions:</b> Take after meals. Avoid alcohol.
          </div>
          <div className={style.buttons}>
            <button
              className="btn btn-primary"
              onClick={() => handleDownload("prescription1")}
            >
              Download Prescription
            </button>
            <button className="btn btn-primary" onClick={handleContactClick}>
              Contact Doctor
            </button>
          </div>
        </div>

        <div className={style.item} id="prescription2">
          <hr />
          <div className="title">
            <b>Ibuprofen</b>
          </div>
          <div className="date">
            <b>Prescribed on:</b> June 16, 2024
          </div>
          <div className="doctor">
            <b>Doctor:</b> Dr. Johnson
          </div>
          <div className="dosage">
            <b>Dosage:</b> 200mg
          </div>
          <div className="frequency">
            <b>Frequency:</b> Once daily
          </div>
          <div className="instruction">
            <b>Instructions:</b> Take with food. Avoid alcohol.
          </div>
          <div className={style.buttons}>
            <button
              className="btn btn-primary"
              onClick={() => handleDownload("prescription2")}
            >
              Download Prescription
            </button>
            <button className="btn btn-primary" onClick={handleContactClick}>
              Contact Doctor
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <span className={style.close} onClick={handleCloseModal}>
              &times;
            </span>
            <h4>Contact Doctor</h4>
            <ul>
              <li>
                <a href="https://wa.me/1234567890">WhatsApp</a>
              </li>
              <li>
                <a href="mailto:doctor@example.com">Email</a>
              </li>
              <li>
                <a href="tel:1234567890">Phone</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Prescription;
