import React from 'react'
import './Dashboard.css'
import { Link, useNavigate } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import Cleaning from '../Cleaning/Cleaning';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ReactDOM from 'react-dom';


const Dashboard = () => {
    const navigate = useNavigate()

  return (
    <div>
      <div className='menu-bar'>
        <TfiMenuAlt size="28" onClick={() => navigate('/menubar')}/>
      </div>
     <div className='search-bar'>
        <IoIosSearch size="18"/>
     </div>
<div>
     <div className='dash-cleaning-group'>
        <img src="cleaning.jpg" className='dash-cleaning-img' height={120} />
         <button class="dash-cleaning-btn" onClick={() => navigate('/cleaning')}> CLEANING </button> 
     </div>

     <div className='dash-cooking-group'>
        <img src="cooking.jpg" className='dash-cleaning-img' height={120} />
          <button class="dash-cleaning-btn" onClick={() => navigate('/cooking')}> COOKING </button>
     </div>
    
     <div className='dash-nurse-group'>
        <img src="nurse.jpg" className='dash-cleaning-img' height={120} />
          <button class="dash-cleaning-btn" onClick={() => navigate('/nurse')}> NURSE </button>
     </div>

     <div className='dash-teachers-group'>
        <img src="teaching.jpg" className='dash-cleaning-img' height={120} />
          <button class="dash-cleaning-btn" onClick={() => navigate('/teachers')}> TEACHERS </button>
     </div>

     <div className='dash-party-group'>
        <img src="party.jpg" className='dash-cleaning-img' height={100} />
          <button class="dash-cleaning-btn" onClick={() => navigate('/party')}> PARTY STAFF </button>
     </div>

     <div className='dash-garden-group'>
        <img src="garden.jpg" className='dash-cleaning-img' height={100} />
          <button class="dash-cleaning-btn" onClick={() => navigate('/garden')}> HOME GARDEN ORGANIZERS </button>
     </div>
     </div>

    </div>
  )
}

export default Dashboard
