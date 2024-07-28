import style from "./Resources.module.css";
function ResourcesForm() {
  return (
    <div className={style.main}>
      <div className={style.box}>
        <p>Drug database</p>
        <hr />
        <input type="text" placeholder="search"></input>
        <button type="submit">Search</button>
      </div>
      <div className={style.box}>
        <p>Research Articles</p>
        <hr />
        <input type="text" placeholder="search"></input>
        <button type="submit">Search</button>
      </div>
      <div className={style.box}>
        <p>Referral Directory</p>
        <hr />
        <input type="text" placeholder="search"></input>
        <button type="submit">Search</button>
      </div>
      <div className={style.box}>
        <p>Clinical tools</p>
        <hr />
        <ul>
          <li>
            <a href="">BMI caluculator</a>
          </li>
          <li>
            <a href="">Dosage caluculator</a>
          </li>
        </ul>
      </div>
      <div className={style.box}>
        <p>Medical guidelines and protocols</p>
        <hr />
        <ul>
          <li>
            <a href="">COVID-19 treatment details</a>
          </li>
          <li>
            <a href="">Hypertension management protocol</a>
          </li>
        </ul>
      </div>
      <div className={style.box}>
        <p>Educational videos and Webinars</p>
        <hr />
        <ul>
          <li>
            <a href="">Latest in Cardiology</a>
          </li>
          <li>
            <a href="">Hypertension management protocol</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ResourcesForm;
