// Importing NavLink from 'react-router-dom' to create navigational links with active styling
import { NavLink } from 'react-router-dom';
import '../../../styles/Sidebar.css';

// Sidebar component which serves as the navigation menu
function Sidebar() {
  return (
    // Main container for the sidebar navigation
    <nav className="sidebar">
      {/* links - add 'active-link' class when the link is active */}
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Home
      </NavLink>

     
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        About Us
      </NavLink>

      
      <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Explore Courses
      </NavLink>

      
      <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Admin Hub
      </NavLink>
    </nav>
  );
}

// Exporting Sidebar component to be used in other parts of the application
export default Sidebar;