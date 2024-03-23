import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import { Link } from 'react-router-dom'
import loginlogo from "../../../images/image 5.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/login', formData);
      console.log(response.data);
      if (response.data?.valid === false) {
        alert(response.data?.message);
        return;
      }
      else {
        localStorage.setItem("user", JSON.stringify(response.data?.user));
        navigate("/")
        window.location.reload();
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const [passVisible, setPassVisible] = useState(false)
  const EyeIcon = passVisible ? Eye : EyeOff
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mt-5">
          <form className="card p-3" onSubmit={handleLogin}>
            <img className='mx-auto d-block' style={{ width: "150px" }} src={loginlogo} alt="" />
            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <div className='d-flex align-items-center border-1' style={{
                borderRadius: "11px",
              }}>
                <input style={{ fontSize: "15px", padding: "5px", opacity: 0.8, outline: "none" }}
                  type="text"
                  className="mt-1 flex-grow-1 w-100 border-0 focus-ring-0"
                  id="email"
                  name="email"
                  placeholder='Enter Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3 d-flex align-items-center">
              <div className='align-items-center w-100'>

                <label htmlFor="password">Password</label>
                <div className='d-flex align-items-center border-1' style={{
                  borderRadius: "11px",
                }}>
                  <input style={{ fontSize: "15px", padding: "5px", opacity: 0.8, outline: "none" }}
                    type={passVisible ? "text" : "password"}
                    className="mt-1 flex-grow-1 w-100 border-0 focus-ring-0"
                    id="password"
                    name="password"
                    placeholder='Enter Your Password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <EyeIcon size={24} style={{
                    cursor: "pointer",
                    paddingRight: "5px"
                  }}
                    onClick={() => setPassVisible(!passVisible)}
                  />
                </div>
              </div>

            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            <div className='d-flex justify-content-between mx-2 mt-3'>
              <Link to='/signup'><button className='signupbtn'>Sign Up</button></Link>
              <Link to='/forgot'><button>forgot password</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
