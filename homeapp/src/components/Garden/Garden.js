import React from 'react'
import './Garden.css'
import { BiSolidDollarCircle, BiSolidTimeFive } from "react-icons/bi";
import { FaUser } from 'react-icons/fa6';
import { RiCalendar2Fill } from "react-icons/ri";

const Garden = () => {
  return (
    <div className="border-box">
      <form action="">
        <h1 class="form-title"> Home Garden Organizers </h1>

        <div class='organization-text'>
            <div class="form-input-group">
          <span><FaUser style={{color: "#8692f7",}}  size="15"/></span>
                <input type="text" class="form-input" placeholder="Organization Type"/>  
            </div>
        </div>


        <div className="sign-email" id='date'>
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
        <input type="checkbox"/> <label className='checkbox-name'>Venue</label>
        </div>

        <div className="btn-div">
          <button class="form-button"> CONFIRMATION </button>
        </div>

      </form>
    </div>
  )
}

export default Garden
