// Importing NavLink from 'react-router-dom' to create navigational links with active styling
import { NavLink } from 'react-router-dom';
import '../../../styles/Sidebar.css'; 

// Sidebar component which provides navigation options for the main pages of the application
function Sidebar() {
  return (
    // Main container for the sidebar navigation
    <nav className="sidebar">
      {/* links - navigates to the pages and highlights with 'active-link' class when selected */}
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''} end>
        Home
      </NavLink>

     
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>
        About Us
      </NavLink>

     
      <NavLink to="/courses" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Courses
      </NavLink>

     
      <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : ''}>
        Admin Hub
      </NavLink>
    </nav>
  );
}

// Exporting Sidebar component so it can be imported and used in other parts of the application
export default Sidebar;