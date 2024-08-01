import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Prescription.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Component from "../Appointmentview";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [newAppointment, setNewAppointment] = useState({
    patientName: "",
    date: "",
    time: "",
    age: "",
    contact: "",
    medicalHistory: "",
    reasonForVisit: "",
    notes: ""
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("/api/appointments");
      if (Array.isArray(response.data)) {
        setAppointments(response.data);
      } else {
        console.error("API did not return an array:", response.data);
        setAppointments([]);
      }
      setError(null);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setError("Failed to fetch appointments. Please try again later.");
      setAppointments([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/appointments", newAppointment);
      fetchAppointments();
      setNewAppointment({
        patientName: "",
        date: "",
        time: "",
        age: "",
        contact: "",
        medicalHistory: "",
        reasonForVisit: "",
        notes: ""
      });
      setError(null);
    } catch (error) {
      console.error("Error creating appointment:", error);
      setError("Failed to create appointment. Please try again.");
    }
  };

  const renderRight = (item) => {
    setSelectedPatient(item);
  };

  return (
    <div className={styles.contain}>
      <div className={styles.givenPrescription}>
        <div className={styles.leftBox}>
          <h4>Upcoming Appointments</h4>
          <hr />
          {error && <p className={styles.error}>{error}</p>}
          <div className="patientList">
            {appointments.length > 0 ? (
              appointments.map((item) => (
                <React.Fragment key={item._id}>
                  <b>{new Date(item.date).toLocaleDateString()}</b>
                  <p
                    className={styles.patientList}
                    onClick={() => renderRight(item)}
                  >
                    {item.time} - {item.patientName} - {item.status}
                  </p>
                </React.Fragment>
              ))
            ) : (
              <p>No appointments found.</p>
            )}
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
        <Form onSubmit={handleSubmit}>
          {/* Form fields remain the same */}
          <Button variant="primary" className="Button" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Appointments;