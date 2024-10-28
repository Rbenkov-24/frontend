import { NavLink } from 'react-router-dom';
import '../../styles/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        About Us
      </NavLink>
      <NavLink to="/courses" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Explore Courses
      </NavLink>
      <NavLink to="/Admin" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Admin Hub
      </NavLink>
    </nav>
  );
}