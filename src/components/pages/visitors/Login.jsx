import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import hook for programmatic navigation after login
import Sidebar from "./Sidebar";
import "../../../styles/login.css";
import loginIcon from '../../../assets/icons/login.png';

// Login component handles user authentication
function Login() {
  // State variables to store form input values for username and password
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  // Hook for navigating to different routes after a successful login
  const navigate = useNavigate();

  // Function to handle the form submission process
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default page reload on form submission
    
    try {
      // Make an API call to the login endpoint with POST request
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicates JSON format for request body
        },
        credentials: 'include', // Include credentials like cookies for authentication
        body: JSON.stringify({ userName, password }), // Converts form data to JSON for the request
      });

      console.log('Login response status:', response.status); // Logging status for debugging purposes

      // Check if the login was successful
      if (response.ok) {
        const data = await response.json(); // Parse JSON response from server
        console.log('Login successful:', data); // Log success message and data for verification
        navigate('/admin/dashboard'); // Redirect to admin dashboard upon successful login
      } else {
        const errorData = await response.json(); // Parse error response data
        console.error('Login failed:', errorData.message); // Log failure message to the console
        // User feedback could be added here to indicate login failure (e.g., display a message)
      }
    } catch (error) {
      console.error('Error during login:', error); // Log any network or request errors
      // User feedback could be added here to indicate a network error
    }
  };

  return (
    <div className="app-container">
      <Sidebar /> {/* Sidebar component for navigation */}
      <div className="login-card">
        <div className="login-header">
          <img src={loginIcon} alt="login icon" className="login-icon" /> {/* Display login icon */}
        </div>
        <form onSubmit={handleSubmit}> {/* Form to capture login credentials */}
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            autoComplete="username" // Browser autofill support for username
            value={userName} // Bind input value to userName state
            onChange={(e) => setUserName(e.target.value)} // Update userName state on change
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            autoComplete="current-password" // Browser autofill support for password
            value={password} // Bind input value to password state
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
          />
          <button type="submit">
            Sign In
          </button> {/* Button to submit the form */}
        </form>
      </div>
    </div>
  );
}
// Exporting Login component for use in other parts of the application
export default Login; 