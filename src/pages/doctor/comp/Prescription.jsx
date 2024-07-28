import styles from "./Prescription.module.css";
import React, { useRef, useState } from "react";
import MiddleContent from "./Prescriptionview";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Prescription() {
  const data = [
    {
      name: "John Doe",
      medication: "Paracetamol",
      dosage: "500mg",
      frequency: "Twice a day",
      duration: "7 days",
      startDate: "2024-06-21",
      endDate: "2024-06-28",
      notes: "Take with food",
    },
    {
      name: "Jane Smith",
      medication: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times a day",
      duration: "10 days",
      startDate: "2024-07-02",
      endDate: "2024-07-11",
      notes: "Take with food, avoid alcohol",
    },
    {
      name: "David Lee",
      medication: "Metformin",
      dosage: "500mg",
      frequency: "Twice a day",
      duration: "Ongoing", // Change to a specific duration if known
      startDate: "2024-05-15",
      endDate: null, // Ongoing medication has no end date
      notes: "Monitor blood sugar levels",
    },
    {
      name: "Olivia Rodriguez",
      medication: "Albuterol",
      dosage: "2 puffs",
      frequency: "As needed",
      duration: "N/A", // Not applicable for inhalers
      startDate: "2024-06-10",
      endDate: null,
      notes: "For shortness of breath",
    },
    {
      name: "William Brown",
      medication: "Prednisolone",
      dosage: "10mg",
      frequency: "Once a day",
      duration: "5 days",
      startDate: "2024-06-25",
      endDate: "2024-06-30",
      notes: "Taper dosage after 3 days",
    },
    {
      name: "Emily Garcia",
      medication: "Ibuprofen",
      dosage: "200mg",
      frequency: "Up to 3 times a day",
      duration: "As needed",
      startDate: "2024-07-01",
      endDate: null,
      notes: "For pain relief",
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
      <div className={styles.givenPrescription}>
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
                  {item.name}-{item.medication}-{item.dosage}-{item.notes}-
                  {item.duration}
                </p>
                <hr />
              </>
            ))}
          </div>
        </div>
        <div className={styles.middleBox}>
          <h3>Patient's Prescription</h3>
          <hr />
          <MiddleContent item={selectedPatient} />
        </div>
      </div>

      <div className={styles.rightBox}>
        <h3>Create New Prescription</h3>
        <Form>
          <Form.Group className="mb-1">
            <Form.Label>Patient Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Medication</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Doasge</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Frequency</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-1" controlId="formGroupPassword">
            <Form.Label>Notes</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        </Form>
      </div>
    </div>
  );
}
export default Prescription;
