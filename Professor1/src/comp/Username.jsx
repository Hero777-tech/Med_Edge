import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import style from "./Username.module.css";
function Username() {
  return (
    <div className={style.contain}>
      Welcome back Username.
      <div className={style.details}>
        <h5>Your Details</h5>
        <ul>
          <li>
            <b>Patient Id:</b> 26775
          </li>
          <li>
            <b>Full Name:</b> Varihant Rathod Chakra
          </li>
          <li>
            <b>Date of Birth:</b> 26/7/1975
          </li>
          <li>
            <b>Gender:</b> Male
          </li>
          <li>
            <b>Phone Number:</b> 9898996775
          </li>
          <li>
            <b>Emergency Contact Information:</b> reach hospital as soon as
            possible
          </li>
          <li>
            <b>Insurance Information:</b> NA
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Username;
