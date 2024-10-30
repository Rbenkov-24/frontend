import { NavLink, useNavigate } from 'react-router-dom';
import '../../../styles/sidebar.css';

// Main AdminSidebar component
function AdminSidebar() {
  // Initialize navigation function for redirecting users
  const navigate = useNavigate();

  // Function to handle logout: redirects to the login page
  const handleLogout = () => {
    navigate('/login'); // Redirect to login page after logout
  };

  // Render the sidebar navigation links
  return (
    <nav className="sidebar">
      {/* Links highlighting when active */}
      <NavLink 
        to="/admin/dashboard" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Dashboard
      </NavLink>

      <NavLink 
        to="/admin/userManagement" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        User Management
      </NavLink>

      {/* Logout button to trigger handleLogout */}
      <button 
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </button>
    </nav>
  );
}

export default AdminSidebar;