import React, { useState } from "react";
import './Cleaning.css'
import { BiSolidDollarCircle, BiSolidTimeFive } from "react-icons/bi";
import { RiCalendar2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const Cleaning = () => {
  const [value, onChange] = useState('10:00');
  const navigate = useNavigate()
  
  return (
    <div className="border-box">
      <form action="">
        <h1 class="form-title"> Cleaning </h1>

        <div className="sign-name" id='date'>
          <div class="form-input-group">
            <span>
              <RiCalendar2Fill style={{ color: "#8692f7" }} size="16" />
            </span>
            <input
              type="text"
              class="form-input"
              placeholder="Date"
              onChange={(e) => console.log(e.target.value)}
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
            />
          </div>
        </div>

        <div class="sign-email" id='time'>
          <div class="form-input-group">
            <span className="Time-icon">
              <BiSolidTimeFive style={{ color: "#8692f7" }} size="16"/>
              <span className="Time-title">Time</span>
            </span>
              <input type="time" class="form-input-time" placeholder="Time"/>  
          </div>
        </div>

        <div class="sign-email" id='Amount'>
          <div class="form-input-group">
            <span>
            <BiSolidDollarCircle style={{ color: "#8692f7" }} size="16" />
            </span>
            <input
              type="number"
              class="form-input"
              autofocus
              placeholder="Amount"
            />
          </div>
        </div>

        <div className="place-text">
        <input type="checkbox"/> <label onClick={() => navigate('/location')}>Place</label>
        </div>

        <div className="btn-div">
          <button class="form-button"> CONFIRMATION </button>
        </div>

      </form>
    </div>
  );
};

export default Cleaning;
