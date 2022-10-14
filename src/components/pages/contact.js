import Layout from "../Layout/layout";
import "./contact.css";
import InputForm from "../../hooks/use-input";
import { useRef } from "react";
const Contact = () => {
  const refContainer = useRef();
  const {
    enteredValue: enteredName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueHandler: nameValueHandler,
    blurHandler: nameBlurHandler,
    reset: resetName,
  } = InputForm((value) => value.trim() != "");
  const {
    enteredValue: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueHandler: emailValueHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = InputForm((value) => value.includes("@"));
  let formIsValid = false;
  if (emailIsValid && nameIsValid) {
    formIsValid = true;
  }
  const sendDataToBackend = async (name, email, message) => {
    const response = await fetch(
      "https://rashmi-website-default-rtdb.firebaseio.com/message.json",
      {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    sendDataToBackend(enteredName, enteredEmail, refContainer.current.value);
    refContainer.current.value = "";
    resetName();
    resetEmail();
  };
  return (
    <Layout>
      <div className="container">
        <div className="section-contact">
          <div className="wrapper">
            <h2>CONTACT</h2>
            <form onSubmit={formSubmitHandler}>
              <div className="form-group">
                <label for="name">Full Name</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Rashmi Dhungana"
                  onChange={nameValueHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                />
                {nameHasError && (
                  <p className="error-text">Please Provide valid Name</p>
                )}
              </div>

              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="dhunganarashmi@gmail.com"
                  onChange={emailValueHandler}
                  onBlur={emailBlurHandler}
                  value={enteredEmail}
                />
                {emailHasError && (
                  <p className="error-text">Please provide valid Email.</p>
                )}
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  name="Message"
                  id="message"
                  rows="5"
                  placeholder="Type your message here...."
                  required
                  ref={refContainer}
                ></textarea>
              </div>
              <div className="form-group">
                <button disabled={!formIsValid} className="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
