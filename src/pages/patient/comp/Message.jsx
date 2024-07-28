import style from "./Message.module.css";
function Message() {
  return (
    <>
      <div className={style.readMessages}>
        <div className={style.box}>
          <div className="message">
            Message from Dr.smith
            <hr />
          </div>
          <div className="messageSubject">
            Appointment Confirmation
            <hr />
          </div>
          <div className="message">
            Message from Dr.smith
            <hr />
          </div>
          <div className="messageSubject">
            Appointment Confirmation
            <hr />
          </div>
        </div>
        <div className={style.box}>
          <div className="messageFrom">Message from Doctor Smith</div>
          <div className="date">Date:June 20 2024</div>
          <div className="description">
            Dear Patient,please follow the prescribed medication and let me know
            if you are experience any side effects.
          </div>
        </div>
      </div>
      <div className={style.composeMessage}>
        <h4>Compose New Message:</h4>
        <div className="to">
          <b>To:</b>
          <input
            className="form-control"
            type="text"
            placeholder="Doctor's Name"
            aria-label="default input example"
          />
        </div>
        <div className="subject">
          <b>Subject:</b>
          <input
            className="form-control"
            type="text"
            placeholder="Subject"
            aria-label="default input example"
          />
        </div>
        <div className="messageTextArea">
          <label for="exampleFormControlTextarea1" className="form-label">
            <b>Message:</b>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className={style.sendMessage}>
          <button type="button" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}
export default Message;
