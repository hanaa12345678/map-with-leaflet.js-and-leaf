import React from "react";
import "./Forgot.css";
import { BsArrowCounterclockwise } from "react-icons/bs";

const Forgot = () => {
  return (
    <div className="white-background">
      <div className="border-box1">
        <div className="lavender-img-container">
            <img src="lavender_round.jpeg" className="lavender-img"/>
            <div class="top-left">Forgot Password</div>
            <BsArrowCounterclockwise className="arrow"/>
        </div>
        <div className="forgot-email">
          <p class="form-link">Enter your email address:</p>
          <input type="email" className="forgot-type" />
        <hr
   style={{
   background: "#8692f7",
   height: "1px",
   border: "none",
   width: "92%" 
   }}
/>
        </div>

        <div className="welcome-text" id='cancel-btn'>
          <form>
            <button
              type="button"
              className="forgot-btn"
              onclick="cancel_form()"
            >
              CANCEL
            </button>{" "}
            <span> </span> <span></span>
            <input type="reset" value="RESET" className="forgot-btn" id='reset-btn'/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
