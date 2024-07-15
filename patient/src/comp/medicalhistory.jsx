import styles from "./medicalhistory.module.css";
function MedicalHistory() {
  return (
    <div className={styles.contain}>
      <div className="Header">
        <h4>Medical History</h4>
      </div>
      <div className="item">
        <hr />

        <div className="itemTop">
          <b>Consultation with Dr.Smith</b>
        </div>
        <div className="date">June 10,2024</div>
        <div className="diagnosisOrTest">
          <b>Diagnosis:</b>Hypertension
        </div>

        <div className="treatmentOrResults">
          <b>Tratment:</b>Prescribed medication and lifestyle canges
        </div>
        <div className="notes">
          <b>Notes:</b>Follow-up in 3 months
        </div>
      </div>
      <div className="item">
        <hr />

        <div className="itemTop">
          <b>Lab Test</b>
        </div>
        <div className="date">June 10,2024</div>
        <div className="diagnosisOrTest">
          <b>Treatment:</b>Blood Test
        </div>

        <div className="treatmentOrResults">
          <b>Results:</b>Normal
        </div>
        <div className="notes">
          <b>Notes:</b>No further actions required
        </div>
      </div>
      <div className="item">
        <hr />

        <div className="itemTop">
          <b>Follow up with Dr.Lee</b>
        </div>
        <div className="date">June 10,2024</div>
        <div className="diagnosisOrTest">
          <b>Diagnosis:</b>Diabetes Mellitius
        </div>

        <div className="treatmentOrResults">
          <b>Tratment:</b>Insulin Therapy
        </div>
        <div className="notes">
          <b>Notes:</b>Monitor blood sugar level daily
        </div>
      </div>
      <div className={styles.downloadButton}>
        <button type="button" className="btn btn-primary">
          Download Record
        </button>
      </div>
    </div>
  );
}
export default MedicalHistory;
