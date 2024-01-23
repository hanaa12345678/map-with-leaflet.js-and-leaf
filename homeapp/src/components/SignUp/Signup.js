import React from 'react'
import { FaUser } from 'react-icons/fa6'
import { IoMdLock } from 'react-icons/io'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
  return (
    <div className='border-box'> 
            <form action="">

            <h1 class="form-title"> Sign Up </h1>

        <div className='sign-name'>
            <div class="form-input-group">
          <span><FaUser style={{color: "#8692f7",}}  size="15"/></span>
                <input type="name" class="form-input" placeholder="Name"/>  
            </div>
        </div>
            
        <div class='sign-email'>
            <div class="form-input-group">
          <span><FaUser style={{color: "#8692f7",}}  size="15"/></span>
                <input type="email" class="form-input" placeholder="Email"/>  
            </div>
        </div>

        <div class='password'>
            <div class="form-input-group">
            <span><IoMdLock style={{color: "#8692f7",}} /></span>
                <input type="password" class="form-input" autofocus placeholder="Password"/>             
            </div>
        </div>
            <div className="btn-div">
            <button class="form-button" onClick={() => navigate('/customer')}> SIGN UP </button>
            </div>

            <p class="form-text" id="form-link" onClick={() => navigate(-1)}>Already an user? Login </p>
            
           
             

        </form>
        </div>
        
  )
}

export default Signup
