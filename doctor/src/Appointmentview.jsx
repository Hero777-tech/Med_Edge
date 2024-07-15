import { Card, Row } from "react-bootstrap";

export default function Component({ patient }) {
  return (
    <>
      {patient && (
        <Row>
          <Card.Text>
            <strong>Patient Name: </strong>
            {patient.name}
            <br />
            <strong>Date:</strong> {patient.date}
            <br />
            <strong>Time:</strong> {patient.time}
            <br />
            <strong>Status:</strong> {patient.status}
            <br />
            <strong>Patient Information:</strong>
            <br />
            <strong>Age:</strong> {patient.age}
            <br />
            <strong>Contact:</strong> {patient.contact}
            <br />
            <strong>Medical History:</strong> {patient.medicalHistory}
            <br />
            <strong>Notes and Observations:</strong> {patient.notes}
            <br />
            <strong>Prescriptions:</strong> {patient.prescriptions}
            <br />
            <strong>Follow-Up:</strong> {patient.followUp}
          </Card.Text>
        </Row>
      )}
    </>
  );
}
