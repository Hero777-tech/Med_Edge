import styles from "./patient.module.css";
import React, { useEffect, useState } from "react";
import RightContent from "./patientView";

function Patient() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const res = await fetch("http://localhost:5000/api/getUsers");
        const result = await res.json();
        console.log(result);
        setPatients(result.filter((p) => p.facilitySubType === "Patient"));
      } catch (error) {
        console.error(error);
      }
    }

    getList(); // Invoke the getList function here
  }, []);

  const renderRight = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.leftBox}>
        <h4>Patient List</h4>
        <hr />
        <div className={styles.set}>
          <input type="text" placeholder="Search patients" />
        </div>
        <div className="patientList">
          {patients.map((item) => (
            <React.Fragment key={item._id}>
              <p className={styles.patientList} onClick={() => renderRight(item)}>
                {item.username} - Age: {item.age} - Last Visit: {item.lastVisit}
              </p>
              <hr />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className={styles.rightBox}>
        <h3>Patient Details</h3>
        <hr />
        {selectedPatient && <RightContent item={selectedPatient} />}
      </div>
    </div>
  );
}

export default Patient;
