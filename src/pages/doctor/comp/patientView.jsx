import style from "./patient.module.css";
function RightContent({ item }) {
  return (
    <div className={style.displ}>
      {item ? ( // Check if item exists
        <>
          <b>Name:</b>
          {item.username}
          <br />

          <b>Age:</b>
          {item.age}
          <br />

          <b>Gender:</b>
          {item.gender}
          <br />
          <b>Contact:</b>
          {item.phoneNumber}
          <br />
          <b>Last Visit:</b>
          {item.lastVisit}
          <br />
          <b>Medical History:</b>
          {item.medicalHistory}
          <br />
          <b>Current Medication:</b>
          {item.currentMedication}
          <br />
          <b>Allergies:</b>
          {item.allergies}
          <br />
          <b>Upcoming appointments:</b>
          {item.upComingAppointments}
          <br />
          <b>Note:</b>
          {item.note}
          <br />
          <b>Documents</b>
          {item.documents}
          <br />
        </>
      ) : (
        <>Select the Patient to view his details</>
      )}
    </div>
  );
}
export default RightContent;
