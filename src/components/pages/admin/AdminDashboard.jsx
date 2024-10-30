import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import "../../../styles/adminDashboard.css";

// Main AdminDashboard component
function AdminDashboard() {
  // Initialize navigation function for redirecting users
  const navigate = useNavigate();

  // Set up state for dashboard statistics (like total students and courses)
  const [dashboardStats, setDashboardStats] = useState({
    totalStudents: 0,
    totalCourses: 0,
    activeUsers: 0,
    recentActivity: [],
  });

  // Fetch dashboard data when the component loads
  useEffect(() => {
    fetchDashboardStats();
  }, []);

  // Fetch data from the server and update dashboard stats
  const fetchDashboardStats = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/dashboard-stats`
      );
      const data = await response.json();
      setDashboardStats(data);  // Update stats with data from the server
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    }
  };

  // Handle logout: clear token and navigate to login page
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  // Render the AdminDashboard layout 
  return (
    <div className="app-container">
      {/* Sidebar component for admin navigation */}
      <div className="left-container">
        <AdminSidebar />
      </div>
      
      {/* Main content section*/}
      <div className="right-container">
        <AdminHeader onLogout={handleLogout} />
        <div className="dashboard-content">
          <h1 className="dashboard-title">Dashboard Overview</h1>

          {/* Display cards for different statistics */}
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Students</h3>
              <p>{dashboardStats.totalStudents}</p>
            </div>
            <div className="stat-card">
              <h3>Total Courses</h3>
              <p>{dashboardStats.totalCourses}</p>
            </div>
            <div className="stat-card">
              <h3>Active Users</h3>
              <p>{dashboardStats.activeUsers}</p>
            </div>
          </div>

          {/* Display recent activity list */}
          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              {dashboardStats.recentActivity.map((activity, index) => (
                <div key={index} className="activity-item">
                  <p>{activity.description}</p>
                  <span className="activity-time">{activity.timestamp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;