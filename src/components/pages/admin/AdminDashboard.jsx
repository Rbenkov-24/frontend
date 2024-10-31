import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "../../../styles/adminDashboard.css";

// Main AdminDashboard component to display admin-specific stats and recent activity
function AdminDashboard() {
  // Set up state with static dashboard statistics
  // These stats include total students, total courses, active users, and a recent activity log
  const [dashboardStats] = useState({
    totalStudents: 1500,
    totalCourses: 50,
    activeUsers: 750,
    recentActivity: [
      { description: "New course 'Advanced React' added", timestamp: "2024-10-15 14:30" },
      { description: "Student Kevin completed 'JavaScript Basics'", timestamp: "2024-09-14 09:45" },
      { description: "New user Sarah Smith registered", timestamp: "2024-09-13 11:20" },
      { description: "Course 'Python for Beginners' updated", timestamp: "2024-05-12 16:00" },
    ],
  });

  // Render the AdminDashboard layout, with a sidebar and main content area
  return (
    <div className="app-container">
      {/* Render sidebar for admin navigation */}
      <AdminSidebar />
      <div className="page-content">
        <h1 className="dashboard-title">Dashboard Overview</h1>

        {/* Display grid of cards for each main statistic */}
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

        {/* Section to display a list of recent activity logs */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {dashboardStats.recentActivity.map((activity, index) => (
              // Each activity item shows a description and timestamp of the event
              <div key={index} className="activity-item">
                <p>{activity.description}</p>
                <span className="activity-time">{activity.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;