import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';
import { Link } from 'react-router-dom';

const Categories2 = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [categorieslist, setCategories] = useState([]);


    useEffect(() => {
      // Fetch gender options
      axios.get(`http://127.0.0.1:8000/api/getcategories`)
          .then(response => {
            setCategories(response.data);
          })
          
          .catch(error => {
              console.error('Error fetching gender:', error);
          });
  }, []);
    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };
  
    return (
      <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Sidebar */}
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <h2>My Sidebar</h2>
          <ul>
                   
          <li><Link to="/Products" className="sidebar-link">Home</Link></li>
<li><Link to="/categories" className="sidebar-link">Categories</Link></li>
<li><Link to="/Products" className="sidebar-link">Users</Link></li>
<li><Link to="/" className="sidebar-link">Logout</Link></li>

          </ul>
        </div>
  
        {/* Topbar */}
        <div className="topbar">
          <button className="menu-button" onClick={toggleSidebar}>
            ☰
          </button>
          <h2>Responsive Dashboard</h2>
          <div className="user-info">
            <span>Welcome, User!</span>
            <button className="logout-button">Logout</button>
          </div>
        </div>
  
        {/* Main content */}
        <div className="main-content">
          <h3>Main Content</h3>
          <p>Category</p>
          
          {/* Responsive Table */}
          <div className="table-responsive">
              <table className="data-table">
                  <thead>
                      <tr>
                          <th>Id</th>
                          <th>Category Name</th>
                          
                      </tr>
                  </thead>
                  <tbody>
            {categorieslist.length > 0 ? (
              categorieslist.map((category, index) => (
                <tr key={index}>
              
                  <td>{category.id}</td>
                  <td>{category.category} </td>
              
            
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Data found</td>
              </tr>
            )}
          </tbody>
              </table>
          </div>
        </div>
      </div>
    );
};

export default Categories2;
