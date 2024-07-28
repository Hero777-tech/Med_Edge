import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function Reschedule() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reschedule
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reschedule to date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Choose two preferences for the appointment
          <div className="choice">
            <label>First preference</label>
            <br />
            <input type="date" className="firstPreference"></input>
          </div>
          <br />
          <div className="choice">
            <label>Second preference</label>
            <br />
            <input type="date" className="secondPreference"></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Reschedule;
