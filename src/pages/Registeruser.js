import React, { useState, useEffect } from 'react';
import '../styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registeruser = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [gender, setGender] = useState('');
    const [marital, setMarital] = useState('');

    const [genders, setGenders] = useState([]);
    const [maritalstatus, setMaritalstatus] = useState([]);
    const navigate = useNavigate();

    const handleNavigateToLogin = () => {
        navigate('/login'); // Replace '/register' with your desired route
    };


    useEffect(() => {
        // Fetch gender options
        axios.get(`http://127.0.0.1:8000/api/getgenders`)
            .then(response => {
                setGenders(response.data);
            })
            .catch(error => {
                console.error('Error fetching gender:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch marital status options
        axios.get(`http://127.0.0.1:8000/api/getmaritalstatus`)
            .then(response => {
                setMaritalstatus(response.data);
            })
            .catch(error => {
                console.error('Error fetching marital status:', error);
            });
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
  
      axios.post('http://127.0.0.1:8000/api/createmarketusers', {
          "FirstName": fname,
          "LastName": lname,
          "Age": age,
          "EmailAddress": email,
          "Location": location,
          "Pass1": password,
          "Pass2": password2,
          "Gender": gender,
          "Marital": marital,
      })
      .then(response => {
          console.log('User registered successfully:', response.data);
          // Clear form fields after successful registration if needed
          setFname('');
          setLname('');
          setAge('');
          setEmail('');
          setLocation('');
          setPassword('');
          setPassword2('');
          setGender('');
          setMarital('');
      })
      .catch(error => {
          console.error('Error registering user:', error);
      });
  };
  
  
    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">-- Select Gender --</option>
                            {genders.map(gender2 => (
                                <option key={gender2.id} value={gender2.id}>
                                    {gender2.gender}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="marital">Marital Status</label>
                        <select id="marital" name="marital" value={marital} onChange={(e) => setMarital(e.target.value)}>
                            <option value="">-- Select Marital Status --</option>
                            {maritalstatus.map(marital2 => (
                                <option key={marital2.id} value={marital2.id}>
                                    {marital2.status}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lacation">Location</label>
                        <input type="lacation" id="lacation" value={location} onChange={(e) => setLocation(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" id="password2" value={password2} onChange={(e) => setPassword2(e.target.value)} required />
                    </div>
                    <button type="submit" className="submit-button">Register</button>
                </form>
                <p className="toggle-form"  onClick={handleNavigateToLogin}>
                    Already have an account? Login
                </p>
            </div>
        </div>
    );
};

export default Registeruser;