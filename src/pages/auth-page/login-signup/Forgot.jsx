import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Forgot = () => {
    const [email, setEmail]=useState('')
    const [message, setMessage]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            setMessage(data.message);
          } else {
            setMessage(data.error);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    

  return (
    <div>
       <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 text-center">          
          <form className="card p-3" onSubmit={handleSubmit}>
            <img className='mx-auto d-block' style={{width:"150px"}} alt="" />
            <div className="form-group mt-3">
                <p style={{textAlign:"center", fontSize:"20px"}} className='fw-bold'>Forgot Passwrod</p>
                <p style={{fontSize:"14px", textAlign:"center"}}>Enter your email and  we'll send you a link to reset your password</p>
              {/* <label htmlFor="email">Email</label> */}
              <input style={{fontSize:"15px", opacity:0.8}}
                type="email"
                className="form-control mt-1"
                id="email"
                name="email"
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          
            <button type="submit" className="btn btn-primary btn-block">Reset</button>
            <div className='d-flex justify-content-between mx-2 mt-3'>
              <Link to='/login'><button className='signupbtn'>Back to Login</button></Link>
            </div>
            {message && <p className="mt-3">{message}</p>}
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Forgot
