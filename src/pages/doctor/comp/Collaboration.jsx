import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Collaboration.module.css";

function Collaboration() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Engineer",
      message: "Request from Engineer A",
      field: "Cancer",
      contact: "123-456-7890",
      email: "engineerA@example.com",
      accepted: false,
    },
    {
      id: 2,
      type: "Researcher",
      message: "Request from Researcher B",
      field: "Blood pressure",
      contact: "987-654-3210",
      email: "researcherB@example.com",
      accepted: false,
    },
  ]);
  const [selectedRoles, setSelectedRoles] = useState({
    doctor: false,
    engineer: false,
    researcher: false,
    professor: false,
  });
  const [interest, setInterest] = useState("");
  const [description, setDescription] = useState("");
  const [currentRequestId, setCurrentRequestId] = useState(null);
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = (role) => {
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [role]: !prevRoles[role],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected roles:", selectedRoles);
    console.log("Field of interest:", interest);
    console.log("Description:", description);
  };

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, accepted: true } : request
      )
    );
  };

  const openModal = (id, type) => {
    setCurrentRequestId(id);
    setModalType(type);
    setShowModal(true);
  };

  const handleConfirmAction = () => {
    if (modalType === "reject") {
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== currentRequestId)
      );
    } else if (modalType === "delete") {
      setRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== currentRequestId)
      );
    }
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.collaboration}>
      <h1>Collaboration Page</h1>
      <p>Connecting Doctors, Engineers, Researchers, and Professors</p>

      <div className={`${style.container} row`}>
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className={`${style.collabrequest} card`}>
            <h2>Collaboration Requests</h2>
            <ul className="list-group">
              {requests.map((request) => (
                <li key={request.id} className="list-group-item">
                  <strong>{request.type}:</strong> {request.message}
                  <p>
                    <i>{request.field}</i>
                  </p>
                  {request.accepted && (
                    <>
                      <p>Contact: {request.contact}</p>
                      <p>Email: {request.email}</p>
                      <button
                        className="btn btn-danger"
                        onClick={() => openModal(request.id, "delete")}
                      >
                        Delete
                      </button>
                    </>
                  )}
                  {!request.accepted && (
                    <>
                      <button
                        className={`btn btn-success me-2 ${style.btnn}`}
                        onClick={() => handleAccept(request.id)}
                      >
                        Accept
                      </button>
                      <button
                        className={`btn btn-danger ${style.btnn}`}
                        onClick={() => openModal(request.id, "reject")}
                      >
                        Reject
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-sm-6">
          <div className={`${style.collab} card`}>
            <div className="card-body">
              <h2>Collaborate</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="interest">
                    Field of Interest on which you want to Collab:
                  </label>
                  <input
                    type="text"
                    className={`${style.field} form-control`}
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="description">
                    Description of your field:
                  </label>
                  <textarea
                    className={`${style.field} form-control`}
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className={`${style.checkboxes} form-check`}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="doctor"
                    checked={selectedRoles.doctor}
                    onChange={() => handleCheckboxChange("doctor")}
                  />
                  <label className="form-check-label" htmlFor="doctor">
                    Doctor
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="engineer"
                    checked={selectedRoles.engineer}
                    onChange={() => handleCheckboxChange("engineer")}
                  />
                  <label className="form-check-label" htmlFor="engineer">
                    Engineer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="researcher"
                    checked={selectedRoles.researcher}
                    onChange={() => handleCheckboxChange("researcher")}
                  />
                  <label className="form-check-label" htmlFor="researcher">
                    Researcher
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="professor"
                    checked={selectedRoles.professor}
                    onChange={() => handleCheckboxChange("professor")}
                  />
                  <label className="form-check-label" htmlFor="professor">
                    Professor
                  </label>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary mt-3 ${style.btnn}`}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div>
          <div className="modal-backdrop show" style={{ opacity: 0.4 }}></div>
          <div
            className="modal show"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Action</h5>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to{" "}
                  {modalType === "reject" ? "reject" : "delete"} this request?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleConfirmAction}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Collaboration;
