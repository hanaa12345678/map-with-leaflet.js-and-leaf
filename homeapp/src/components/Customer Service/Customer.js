import React from 'react'
import './Customer.css'
import { useNavigate } from 'react-router-dom'

const Customer = () => {
  const navigate = useNavigate()
  return (
    
    <div className='border-box' id='customer-center' onClick={() => navigate('/dashboard')}>
      <h1 class="form-title" > Customer Service </h1>
    </div>
  ) 
}

export default Customer
