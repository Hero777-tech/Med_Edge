import styles from "./Prescription.module.css";
import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Component from "../Appointmentview";

function Appointments() {
  const patientsData = [
    {
      name: "Jane Smith",
      date: "2024-06-22",
      time: "05:30:00.000Z",
      status: "Pending",
      age: 30,
      contact: "+91 99540XXXXX",
      medicalHistory: "Asthma",
      notes: "Routine asthma check-up",
      prescriptions: "Albuterol - 2 puffs - As needed",
      followUp: "7/22/2024, 11:00:00 AM",
    },
    {
      name: "John Doe",
      date: "2024-07-15",
      time: "09:00:00.000Z",
      status: "Completed",
      age: 45,
      contact: "+91 98450XXXXX",
      medicalHistory: "Hypertension",
      notes: "Follow-up on blood pressure medication",
      prescriptions: "Lisinopril - 10 mg daily",
      followUp: "8/15/2024, 10:00:00 AM",
    },
    {
      name: "Alice Johnson",
      date: "2024-08-05",
      time: "14:00:00.000Z",
      status: "Pending",
      age: 28,
      contact: "+91 98765XXXXX",
      medicalHistory: "Diabetes Type 2",
      notes: "Quarterly diabetes management check-up",
      prescriptions: "Metformin - 500 mg twice daily",
      followUp: "11/05/2024, 14:00:00 PM",
    },
    {
      name: "Michael Brown",
      date: "2024-09-10",
      time: "16:30:00.000Z",
      status: "Pending",
      age: 50,
      contact: "+91 99330XXXXX",
      medicalHistory: "Hyperlipidemia",
      notes: "Routine lipid profile check",
      prescriptions: "Atorvastatin - 20 mg daily",
      followUp: "12/10/2024, 16:30:00 PM",
    },
  ];

  function sortPatientsByDate(patients) {
    return patients.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const sortedPatients = sortPatientsByDate(patientsData);
  const [selectedPatient, setSelectedpatient] = useState();
  const renderRight = (item) => {
    setSelectedpatient(item);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.givenPrescription}>
        <div className={styles.leftBox}>
          <h4>Upcoming Appointments</h4>
          <hr />

          <div className="patientList">
            {sortedPatients.map((item) => (
              <>
                <b>{item.date}</b>
                <p
                  className={styles.patientList}
                  onClick={() => renderRight(item)}
                  key={item.name}
                >
                  {item.time}-{item.name}-{item.status}
                </p>
              </>
            ))}
          </div>
        </div>
        <div className={styles.middleBox}>
          <h3>Appointment Details</h3>
          <hr />
          <Component patient={selectedPatient} />
        </div>
      </div>

      <div className={styles.rightBox}>
        <h3>Schedule New Appointment</h3>
        <Form>
          <Form.Group className="mb-1">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Time</Form.Label>
            <Form.Control type="time" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Contact</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Medical History</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Reason for visit</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formGroupPassword">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" className="Button" type="button">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Appointments;
