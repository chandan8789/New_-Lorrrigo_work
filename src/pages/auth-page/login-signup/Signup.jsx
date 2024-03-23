import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import loginlogo from "../../../images/image 5.png"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:4000/auth/signup', formData);
      // console.log(response.data);
      navigate('/login');
    } catch (error) 
    {
      console.error(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mt-5">
          <form className="card p-3" onSubmit={handleSignup}>
            <img className='mx-auto d-block' style={{width:"150px"}} src={loginlogo} alt="" />

            <div className="form-group mt-3">
              <label htmlFor="email">Name</label>
              <input style={{fontSize:"15px", opacity:0.8}}
                type="text"
                className="form-control mt-1"
                id="name"
                name="name"
                placeholder='Enter Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email">Email</label>
              <input style={{fontSize:"15px", opacity:0.8}}
                type="email"
                className="form-control mt-1"
                id="email"
                name="email"
                placeholder='Enter Your Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input style={{fontSize:"15px", opacity:0.8}}
                type="password"
                className="form-control mt-1"
                id="password"
                name="password"
                placeholder='Enter Your Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>

              <p className='mt-2 mx-1'>Already Have a Account</p>
            <div className='d-flex justify-content-between mx-2 mt-1'>
              <Link to='/login'><button type='submit' className='loginbtn'>Login</button></Link>
              <Link to='/forgot'><button>forgot password</button></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
