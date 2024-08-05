import styles from "./Prescription.module.css";
import React, { useEffect, useState } from "react";
import MiddleContent from "./Prescriptionview";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Prescription() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [prescriptions, setPrescriptions] = useState([]);

  const [patientName, setPatientName] = useState("");
  const [medication, setMedication] = useState("");
  const [dosage, setDosage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notes, setNotes] = useState("");
  const [patientId, setPatientId] = useState("");

  useEffect(() => {
    async function getList() {
      try {
        const res1 = await fetch("http://localhost:5000/api/getUsers");
        const res2 = await fetch("http://localhost:5000/api/pres");
        const result1 = await res1.json();
        const result2 = await res2.json();
        console.log(result1);
        setPatients(result1.filter((p) => p.facilitySubType === "Patient"));
        setPrescriptions(result2);
      } catch (error) {
        console.error(error);
      }
    }

    getList(); // Invoke the getList function here
  }, []);

  const renderRight = (patient) => {
    setSelectedPatient(prescriptions.filter((p) => p.patientId === patient.uid));
    console.log(selectedPatient);
    setPatientName(patient.username); // Assuming username is the patient name
    setPatientId(patient.uid); // Assuming uid is the patient ID
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prescriptionData = {
      patientId,
      medication,
      dosage,
      frequency,
      duration,
      startDate,
      endDate,
      notes,
    };

    try {
      const res = await fetch("http://localhost:5000/api/prescription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prescriptionData),
      });

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        alert("Prescription created successfully!");
        // Fetch the updated list of prescriptions
        const updatedRes = await fetch("http://localhost:5000/api/pres");
        const updatedPrescriptions = await updatedRes.json();
        setPrescriptions(updatedPrescriptions);
        setSelectedPatient(updatedPrescriptions.filter((p) => p.patientId === patientId));
      } else {
        alert("Failed to create prescription.");
      }
    } catch (error) {
      console.error("Error creating prescription:", error);
      alert("Error creating prescription.");
    }
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
        {selectedPatient && <MiddleContent item={selectedPatient} />}
      </div>
      <div className={styles.rightBox}>
        <h3>Create New Prescription</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-1">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Medication</Form.Label>
            <Form.Control
              type="text"
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Dosage</Form.Label>
            <Form.Control
              type="text"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Frequency</Form.Label>
            <Form.Control
              type="text"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>End Date</Form.Label>
            <Form.Control
              type="text"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Prescription;
