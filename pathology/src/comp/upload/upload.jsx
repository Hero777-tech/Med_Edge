import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import axios from "axios"; // Assuming you have axios installed

function UploadButton({ item, handleFileUpload }) {
  const [show, setShow] = useState(false);
  const [testType, setTestType] = useState("");
  const [file, setFile] = useState(null);
  const [shareWithDoctor, setShareWithDoctor] = useState(false);
  const [shareWithPatient, setShareWithPatient] = useState(false);
  const [numbers, setNumbers] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "shareWithDoctor") {
      setShareWithDoctor(checked);
      // Show immediate feedback for doctor selection
      if (checked) {
        alert("Doctor will be notified upon saving.");
      }
    } else if (name === "shareWithPatient") {
      setShareWithPatient(checked);
      // Show immediate feedback for patient selection
      if (checked) {
        alert("Patient will be notified upon saving.");
      }
    }
  };
  const message = `${
    item.patientName || "Patient"
  }'s ${testType} is completed. ${item.referBy || "Refer By"} and ${
    item.patientName || "Patient"
  } can meet up for further steps.`;

  const sendWhatsAppMessages = (numbers) => {
    numbers.forEach((number) => {
      const url = `https://wa.me/91${number}?text=${encodeURIComponent(
        message
      )}`;
      window.open(url, "_blank");
    });
  };

  const handleSaveChanges = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    // Collect numbers based on checkbox selections

    if (shareWithDoctor) {
      numbers.push(item.doctorNum);
    }
    if (shareWithPatient) {
      numbers.push(item.patientNum);
    }
    numbers.forEach((number) => {
      console.log(number);
    });

    // Send messages to all collected numbers
    sendWhatsAppMessages(numbers);
    setNumbers([]);
    handleFileUpload(item.id);
    // Uncheck the selected checkboxes
    setShareWithDoctor(false);
    setShareWithPatient(false);
    // numbers.erase();
    handleClose();
  };

  const test = [
    "Complete Blood Count (CBC)",
    "Basic Metabolic Panel (BMP)",
    "Comprehensive Metabolic Panel (CMP)",
    "Lipid Panel",
    "Blood Glucose Tests",
    "Prothrombin Time (PT)/International Normalized Ratio (INR)",
    "Activated Partial Thromboplastin Time (aPTT)",
    "D-Dimer",
    "Blood Gases",
    "Cardiac Enzymes (Troponin, CK-MB)",
    "Liver Enzymes (ALT, AST, ALP, GGT)",
    "Urinalysis",
    "Urine Culture",
    "24-Hour Urine Collection",
    "Urine Drug Test",
    "Blood Culture",
    "Stool Culture",
    "Throat Culture",
    "Sputum Culture",
    "Wound Culture",
    "Polymerase Chain Reaction (PCR)",
    "Genetic Testing",
    "Fluorescence In Situ Hybridization (FISH)",
    "Antibody Tests",
    "Antigen Tests",
    "Autoantibody Tests",
    "Allergy Tests",
    "Biopsy",
    "Cytology",
    "Immunohistochemistry (IHC)",
    "Flow Cytometry",
    "Hormone Tests",
    "Tumor Marker Tests",
    "Toxicology Tests",
    "Nutritional and Metabolic Tests",
  ];

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload File</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Name of Scan</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={testType}
            onChange={handleTestTypeChange}
          >
            <option disabled value="">
              Open this select menu
            </option>
            {test.map((testItem, index) => (
              <option key={index} value={testItem}>
                {testItem}
              </option>
            ))}
          </Form.Select>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload file of scan</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox
              aria-label="input"
              name="shareWithDoctor"
              checked={shareWithDoctor}
              onChange={handleCheckboxChange}
            />
            <InputGroup.Text>Share with Doctor</InputGroup.Text>
          </InputGroup>
          <InputGroup>
            <InputGroup.Checkbox
              aria-label="input"
              name="shareWithPatient"
              checked={shareWithPatient}
              onChange={handleCheckboxChange}
            />
            <InputGroup.Text>Share with Patient</InputGroup.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UploadButton;
