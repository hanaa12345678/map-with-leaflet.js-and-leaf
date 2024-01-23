import React from 'react'
import './Welcome.css'
import { FaUser } from 'react-icons/fa6'
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { RiBankCard2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate()
  return (
    <div className='welcome-block'>
        <div className='welcome-text'> Welcome </div>
        <div className='welcome-text'> name </div>

        <div className='welcome-text' id='welcome-gap'> 
        <div className='welcome-group'>
        <span><FaUser style={{color: "#8692f7",}}  size="15"/></span>
            <p className='welcome-list'> username </p>
        </div>
        </div>

        <div className='welcome-text' id='welcome-gap2'> 
        <div className='welcome-group'>
        <span><IoMdPhonePortrait style={{color: "#8692f7",}}  size="20"/></span>
            <p className='welcome-list'> Phone Number </p>
        </div>
        </div>

        <div className='welcome-text' id='welcome-gap2'> 
        <div className='welcome-group'>
        <span><MdEmail style={{color: "#8692f7",}}  size="20"/></span>
            <p className='welcome-list'> Email </p>
        </div>
        </div>

        <div className='welcome-text' id='welcome-gap2'> 
        <div className='welcome-group'>
        <span><IoMdWallet style={{color: "#8692f7",}}  size="20"/></span>
            <p className='welcome-list'> Budget </p>
        </div>
        </div>

        <div className='welcome-text' id='welcome-gap2'> 
        <div className='welcome-group'>
        <span><RiBankCard2Line style={{color: "#8692f7",}}  size="20"/></span>
            <p className='welcome-list'> Price </p>
        </div>
        </div>

        <div className='welcome-text'>
            <button className='welcome-btn' onClick={() => navigate('/')}>LOG OUT</button>
        </div>

    </div>

  )
}

export default Welcome
