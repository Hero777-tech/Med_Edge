import style from "./Username.module.css";

function Username({
  prop,
  email,
  address,
  phone,
  gender,
  institution,
  interests,
  publications,
}) {
  return (
    <>
      <div className={style.profile}>
        <div className={style.profileheader}>Researcher Profile</div>
        <div className={style.profileelements}>
          <span className={style.label}>Name:</span> <span>{prop}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Email:</span> <span>{email}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Phone No:</span> <span>{phone}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Gender:</span> <span>{gender}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Address:</span> <span>{address}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Institution:</span>{" "}
          <span>{institution}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Research Interests:</span>{" "}
          <span>{interests}</span>
        </div>
        <div className={style.profileelements}>
          <span className={style.label}>Publications:</span>{" "}
          <span>{publications}</span>
        </div>
      </div>
    </>
  );
}
export default Username;
