import React, { useState } from 'react';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };
  
    return (
      <div className={`layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Sidebar */}
        <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
          <h2>My Sidebar</h2>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>Users</li>
            <li>Logout</li>
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
          <p>This is a responsive page with a sidebar and topbar.</p>
          
          {/* Responsive Table */}
          <div className="table-responsive">
              <table className="data-table">
                  <thead>
                      <tr>
                          <th>Header 1</th>
                          <th>Header 2</th>
                          <th>Header 3</th>
                          <th>Actions</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Row 1, Col 1</td>
                          <td>Row 1, Col 2</td>
                          <td>Row 1, Col 3</td>
                          <td>
                              <button>Edit</button>
                              <button>Delete</button>
                          </td>
                      </tr>
                      <tr>
                          <td>Row 2, Col 1</td>
                          <td>Row 2, Col 2</td>
                          <td>Row 2, Col 3</td>
                          <td>
                              <button>Edit</button>
                              <button>Delete</button>
                          </td>
                      </tr>
                      {/* Add more rows as needed */}
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    );
};

export default AdminDashboard;
