import { NavLink, useNavigate } from 'react-router-dom';
import '../../../styles/sidebar.css';

// AdminSidebar component, which serves as the navigation menu for admin pages.
// Provides links to key sections and includes a logout function to end the session.
function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a POST request to the logout endpoint to end the user session
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include' // Sends cookies with the request to ensure session clearing
      });
      
      // If logout is successful, navigate to the login page
      if (response.ok) {
        navigate('/login');
      } else {
        console.error('Logout failed'); // Log an error if the server response isn't successful
      }
    } catch (error) {
      console.error('Error during logout:', error); // Log any errors that occur during logout
    }
  };

  return (
    // Main container for the sidebar navigation with links and a logout button
    <nav className="sidebar">
      {/* Links to admin sections, adding 'active-link' class to highlight active page */}
      <NavLink 
        to="/admin/dashboard" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Dashboard
      </NavLink>

      <NavLink 
        to="/admin/workSpace" 
        className={({ isActive }) => isActive ? 'active-link' : ''}
      >
        Work Space
      </NavLink>

      {/* Logout button - triggers handleLogout to log the user out and redirect to login */}
      <button 
        onClick={handleLogout}
        className="logout-button"
      >
        Logout
      </button>
    </nav>
  );
}

// Exporting AdminSidebar component to be used in other parts of the application, 
export default AdminSidebar;