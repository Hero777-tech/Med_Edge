import style from "./Prescription.module.css";
function MiddleContent({ item }) {
  console.log("iyem ",item[0].username)
  return (
    <div className={style.displ}>
      {item ? ( // Check if item exists
        <>
          <b>Patient id:</b>
          {item[0]?.patientId}
          <br />

          <b>Medication:</b>
          {item[0]?.medication}
          <br />

          <b>Dosage:</b>
          {item[0]?.dosage}
          <br />
          <b>Frequency:</b>
          {item[0]?.frequency}
          <br />
          <b>Duration:</b>
          {item[0]?.duration}
          <br />
          <b>Start Date:</b>
          {item[0]?.startDate}
          <br />
          <b>End Date:</b>
          {item[0]?.endDate}
          <br />
          <b>Notes:</b>
          {item[0]?.notes}
        </>
      ) : (
        <>Select the Patient on left to view his precription</>
      )}
    </div>
  );
}
export default MiddleContent;
