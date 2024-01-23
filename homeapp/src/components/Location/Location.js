import React from 'react'
import './Location.css'

const Location = () => {
  return (
    <div className="border-box">
      <form action="">
        <h1 class="form-title"> Location </h1>
        <p class="govir-name">Govirnorate name:</p>

        <div className="place-text" id='location-list'>
        <input type="checkbox" /> <label>Muscat</label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Musandam </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Dhofar </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Buraymi </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Ash Sharqiyah South </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Ash Sharqiyah North </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> AL Wust </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> AL Batinah South </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> AL Batinah North </label>
        </div>

        <div className="place-text" id='location-list'>  
        <input type="checkbox"/> <label> Ad Dakiliyah </label>
        </div>

        <div className="place-text" id='location-list'>
        <input type="checkbox"/> <label> Ad Dhahirah </label>
        </div>

      </form>
    </div>
  )
}

export default Location
