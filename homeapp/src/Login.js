import { IoMdLock } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="border-box">
      <form action="">
        <h1 class="form-title"> Login </h1>

        <div class="email">
          <div class="form-input-group">
            <span>
              <FaUser style={{ color: "#8692f7" }} size="15"/>
            </span>
            <input type="email" class="form-input" placeholder="Email" />
          </div>
        </div>

        <div class="password">
          <div class="form-input-group">
            <span>
              <IoMdLock style={{ color: "#8692f7" }} size="16"/>
            </span>
            <input
              type="password"
              class="form-input"
              autofocus
              placeholder="Password"
            />
          </div>
        </div>
        <div className="btn-div">
          <button class="form-button" onClick={() => navigate('/customer')}> LOGIN </button>
        </div>

        <p class="form-text" onClick={() => navigate('/signup')}>Not yet registered? Sign Up</p>
      </form>
    </div>
  );
};
export default Login;
