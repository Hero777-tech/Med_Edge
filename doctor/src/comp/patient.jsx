import styles from "./patient.module.css";
import React, { useRef, useState } from "react";
import RightContent from "./patientView";
function Patient() {
  const data = [
    {
      name: "Jane Smith",
      age: 45,
      gender: "Female",
      contact: "9344245456",
      lastVisit: "2024-06-21",
      medicalHistory: "Astahma",
      currentMedication: "Albuterol",
      allergies: "xyz",
      upComingAppointments: "2024-06-21 11:00 AM",
      note: "Routine asthama Check up",
      documents: "Lab results   X-ray",
    },
    {
      name: "Olivia Rodriguez",
      age: 27,
      gender: "Female",
      contact: "8765432109",
      lastVisit: "2024-06-10",
      medicalHistory: "Anxiety",
      currentMedication: "Lexapro",
      allergies: "Peanuts",
      upComingAppointments: "2024-08-12 10:30 AM",
      note: "Therapy session - coping mechanisms",
      documents: "Progress notes",
    },
    {
      name: "David Lee",
      age: 62,
      gender: "Male",
      contact: "2134567890",
      lastVisit: "2024-06-28",
      medicalHistory: "Diabetes, Arthritis",
      currentMedication: "Metformin, Ibuprofen",
      allergies: "NKA (No Known Allergies)",
      upComingAppointments: "2024-07-10 3:00 PM",
      note: "Follow-up for blood sugar control & joint pain",
      documents: "Blood test results, X-ray (knee)",
    },

    {
      name: "John Doe",
      age: 32,
      gender: "Male",
      contact: "5551234567",
      lastVisit: "2024-05-15",
      medicalHistory: "Hypertension",
      currentMedication: "Lisinopril",
      allergies: "Penicillin", // "Allergies" changed to lowercase for consistency
      upComingAppointments: "2024-07-25 2:00 PM",
      note: "Blood pressure follow-up",
      documents: "Blood test results",
    },
  ];
  const searchText = useRef("");
  const [filteredData, setFilteredData] = useState(data);

  const setDisplayData = (event) => {
    const filtered = data.filter((item) => {
      const lowerId = item.name.toString().toLowerCase();
      return lowerId.includes(event.target.value.toLowerCase());
    });
    setFilteredData(filtered);
  };
  const [selectedPatient, setSelectedpatient] = useState();
  const renderRight = (item) => {
    setSelectedpatient(item);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.leftBox}>
        <h4>Patient List</h4>
        <hr />
        <div className={styles.set}>
          <input
            type="text"
            placeholder="Search patients"
            ref={searchText}
            onChange={setDisplayData}
          />
        </div>
        <div className="patientList">
          {filteredData.map((item) => (
            <>
              <p
                className={styles.patientList}
                onClick={() => renderRight(item)}
                key={item.name}
              >
                {item.name}-Age:{item.age}-Last Visit:{item.lastVisit}
              </p>
              <hr />
            </>
          ))}
        </div>
      </div>
      <div className={styles.rightBox}>
        <h3>Patient Details</h3>
        <hr />
        <RightContent item={selectedPatient} />
      </div>
    </div>
  );
}
export default Patient;
