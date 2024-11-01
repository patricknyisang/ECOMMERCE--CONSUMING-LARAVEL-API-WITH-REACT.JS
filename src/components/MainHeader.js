import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../styles/MainHeader.css';

const MainHeader = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className="topbar">
            <div className="logo">Welcome to Itugrowth</div>
            <div className="buttons">
                <button className="login-button" onClick={handleLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default MainHeader;
