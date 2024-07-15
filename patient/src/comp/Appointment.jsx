import React, { useState } from "react";
import style from "./Appointment.module.css";
import Reschedule from "./Appointment/Reschedule";

function Appointment() {
  const [appointments, setAppointments] = useState([
    {
      doctor: "Dr. Lee",
      date: "June 22, 2034",
      time: "12:00 PM",
      location: "General Hospital",
      type: "Consultation",
    },
  ]);

  const [newAppointment, setNewAppointment] = useState({
    doctor: "",
    date: "",
    time: "",
    type: "",
    details: "",
  });

  const handleCancel = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
  };

  const handleSchedule = () => {
    setAppointments([...appointments, newAppointment]);
    setNewAppointment({
      doctor: "",
      date: "",
      time: "",
      type: "",
      details: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className={style.box}>
        <div className={style.left}>
          <h3>Upcoming Appointments</h3>
          {appointments.map((appointment, index) => (
            <div key={index} className={style.appoint}>
              <div className="doctor">
                <b>Consultation with {appointment.doctor}</b>
              </div>
              <div className="date">
                <b>Date:</b> {appointment.date}
              </div>
              <div className="time">
                <b>Time:</b> {appointment.time}
              </div>
              <div className="location">
                <b>Location:</b> {appointment.location}
              </div>
              <div className="type">
                <b>Type:</b> {appointment.type}
              </div>
              <div className={style.buttons}>
                <Reschedule />
                <button
                  className="btn btn-danger"
                  onClick={() => handleCancel(index)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={style.right}>
          <h3>Schedule New Appointment</h3>
          <div className="chooseDoctor">
            <select
              className="form-select"
              aria-label="Default select example"
              name="doctor"
              value={newAppointment.doctor}
              onChange={handleChange}
            >
              <option value="">Choose a Doctor</option>
              <option value="Doctor One">Doctor One</option>
              <option value="Doctor Two">Doctor Two</option>
              <option value="Doctor Three">Doctor Three</option>
            </select>
          </div>
          <label>Enter Date</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleChange}
          />
          <label>Choose Time</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleChange}
          />
          <select
            className="form-select"
            aria-label="Default select example"
            name="type"
            value={newAppointment.type}
            onChange={handleChange}
          >
            <option value="" disabled>
              Appointment Type
            </option>
            <option value="Special">Special</option>
            <option value="General">General</option>
          </select>
          <input
            type="text"
            name="details"
            placeholder="Additional Details"
            value={newAppointment.details}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSchedule}
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </>
  );
}

export default Appointment;
