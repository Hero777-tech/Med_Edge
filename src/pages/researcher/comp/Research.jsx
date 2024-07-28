import React, { useState } from "react";
import style from "./Research.module.css";

function Research() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "incoming",
      from: "Dr. Smith",
      project: "Genome Sequence",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni.",
    },
    {
      id: 2,
      type: "incoming",
      from: "Dr. Smith",
      project: "Genome Sequence",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, magni.",
    },
    {
      id: 3,
      type: "outgoing",
      to: "Dr. Brown",
      project: "Stem Cell Research",
      status: "pending",
    },
    {
      id: 4,
      type: "outgoing",
      to: "Dr. Brown",
      project: "Stem Cell Research",
      status: "pending",
    },
  ]);

  const [detailView, setDetailView] = useState(null);

  const handleAcceptReject = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
  };

  const handleViewDetail = (request) => {
    setDetailView(request);
  };

  const handleCloseDetail = () => {
    setDetailView(null);
  };

  return (
    <>
      {detailView && (
        <div className={style.detailOverlay}>
          <div className={style.detailBox}>
            <h3>Project: {detailView.project}</h3>
            <p>{detailView.message}</p>
            <button onClick={handleCloseDetail} className="btn btn-secondary">
              Close
            </button>
          </div>
        </div>
      )}
      <div className={detailView ? style.blurred : ""}>
        <div className={style.request}>
          <div className={style.incoming}>
            <h2>INCOMING REQUEST</h2>
            {requests
              .filter((req) => req.type === "incoming")
              .map((request) => (
                <div key={request.id} className={style.req}>
                  <h5>Request from {request.from}</h5>
                  <h6>Project: {request.project}</h6>
                  <p>Message: {request.message}</p>
                  <div className={style.status}>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleAcceptReject(request.id)}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleAcceptReject(request.id)}
                    >
                      Reject
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleViewDetail(request)}
                    >
                      View Detail
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.outgoing}>
            <h2>OUTGOING REQUEST</h2>
            {requests
              .filter((req) => req.type === "outgoing")
              .map((request) => (
                <div key={request.id} className={style.req}>
                  <h5>Request to {request.to}</h5>
                  <h6>Project: {request.project}</h6>
                  <h6>Status: {request.status}</h6>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleViewDetail(request)}
                  >
                    View Detail
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
