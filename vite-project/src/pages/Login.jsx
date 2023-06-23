import React from 'react'

const Login = () => {
  return (
    <>
    
    <div class="container">
        <div class="register">
            <h2>Login</h2>
        <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" placeholder="Email"/>
         </div>
        <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" placeholder="Password"/>
        </div>
        <div class="button">
        <button type="button" class="btn btn-primary">Login</button>
        </div>
        </div>
    </div>
    
  </>
  )
}

export default Login