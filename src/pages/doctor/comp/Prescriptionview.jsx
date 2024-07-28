import style from "./Prescription.module.css";
function MiddleContent({ item }) {
  return (
    <div className={style.displ}>
      {item ? ( // Check if item exists
        <>
          <b>Patient Name:</b>
          {item.name}
          <br />

          <b>Medication:</b>
          {item.medication}
          <br />

          <b>Dosage:</b>
          {item.dosage}
          <br />
          <b>Frequency:</b>
          {item.frequency}
          <br />
          <b>Duration:</b>
          {item.duration}
          <br />
          <b>Start Date:</b>
          {item.startDate}
          <br />
          <b>End Date:</b>
          {item.endDate}
          <br />
          <b>Notes:</b>
          {item.notes}
        </>
      ) : (
        <>Select the Patient on left to view his precription</>
      )}
    </div>
  );
}
export default MiddleContent;
