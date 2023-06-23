import React from 'react'
import './Register.css'
import pic1 from "../assets/fb.png"
const Register = () => {
  return (
  
    <div class="container">
        <div class="col-md-5 register-left">
            <img src={pic1}/>
            <h3> Join Us</h3>
            <p>Connect with millions of people arround the world</p>
            <button type="button" class="btn btn-primary">About Us</button>
        </div>
        <div class="col-md-7 register-right">
            <h2>Register Here</h2>
            <div class="register-form"></div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name"/>
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Username"/>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email"/>
            </div>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password"/>
            </div>
            <button type="button" class="btn btn-primary">Register</button>
        </div>
    </div>

    

  )
}

export default Register 