// src/components/AuthPage.js
import React, { useState } from 'react';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { logRoles } from '@testing-library/react';

const Login = () => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
      navigate('/registers'); // Replace '/register' with your desired route
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      console.log('Request data:', { Username, Password });
  
      const response = await axios.post(
        `http://127.0.0.1:8000/api/login`,
        { Username, Password },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      console.log('Response:', response);
  
      if (response.status === 200) {
        const responseData = response.data;
  
        if (
          
      
          responseData.fname &&
          responseData.lname &&
          responseData.email &&
          responseData.role

        ) {
          // Log response data
          console.log('Response Data:', {
        
            Password: Password,
            FNAME: responseData.fname.toString(),
            LNAME: responseData.lname.toString(),
            EMAIL: responseData.email.toString(),
            ROLE: responseData.role.toString(),
      
          });
        
          // Safely handle responseData properties
          // localStorage.setItem('PID', responseData.pid.toString());
     
          // localStorage.setItem('Password', Password);
          // localStorage.setItem('FNAME', responseData.fname.toString());
          // localStorage.setItem('LNAME', responseData.lname.toString());
          // localStorage.setItem('EMAIL', responseData.useremail.toString());
          // localStorage.setItem('ROLE', responseData.phone.toString());
        
          // Redirect only if login is successful and validation passes
          window.location.assign('/Products');
        }
         else {
          setError('Invalid response data from server. Please contact support.');
        }
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      if (error.response) {
        console.error('Error response:', error.response.data);
        setError('Invalid username or password');
      } else if (error.request) {
        console.error('Error request:', error.request);
        setError('No response from server. Please check your network connection.');
      } else {
        console.error('Error message:', error.message);
        setError('An error occurred while logging in');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Username">Email</label>
            <input type="email" id="Username"   value={Username} onChange={(e) => setUsername(e.target.value)}  required />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)}  required />
          </div>
         
          <button type="submit" className="submit-button">
          Login
          </button>
        </form>
        <p className="toggle-form" onClick={handleNavigateToRegister}>
        Don’t have an account? Register
        </p>
      </div>
    </div>
  );
};

export default Login;
