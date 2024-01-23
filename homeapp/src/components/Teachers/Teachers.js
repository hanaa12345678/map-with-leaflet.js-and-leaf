import React from 'react'
import { BiSolidDollarCircle } from 'react-icons/bi'

const Teachers = () => {
  return (
      <div className="border-box">
      <form action="">
        <h1 class="form-title"> Teachers </h1>

        <div className="place-text">
        <input type="checkbox"/> <label>Materials</label>
        </div>

        <div className="place-text">
        <input type="checkbox"/> <label>Duration of Education</label>
        </div>

        <div className="place-text">
        <input type="checkbox"/> <label>Choose the Type of Teachers</label>
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

        <div className="btn-div">
          <button class="form-button"> CONFIRMATION </button>
        </div>

      </form>
    </div>
  )
}

export default Teachers
