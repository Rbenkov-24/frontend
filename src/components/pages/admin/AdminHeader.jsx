import { useState, useEffect } from 'react';
import '../../../styles/adminHeader.css';

// AdminHeader component definition
function AdminHeader() {
  // State to store admin information, initialized with empty name and picture
  const [adminInfo, setAdminInfo] = useState({ name: '', picture: '' });

  // Fetch admin information when the component first mounts
  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        // API call to get admin information with credentials included for authentication
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/admin/info`,
          { credentials: 'include' } 
        );

        // If response is successful, update the adminInfo state with data
        if (response.ok) {
          const data = await response.json();
          setAdminInfo(data);
        }
      } catch (error) {
        // Log any errors if the fetch request fails
        console.error('Error fetching admin info:', error);
      }
    };

    fetchAdminInfo(); // Call the function to get admin data
  }, []); // Empty dependency array so this only runs once, on initial mount

  // Render the header with admin's picture and name
  return (
    <header className="admin-header">
      <div className="admin-info">
        {/* Admin profile picture */}
        <img 
          src={adminInfo.picture}
          alt={adminInfo.name} 
          className="admin-picture" 
        />
        {/* Admin name display */}
        <span className="admin-name">{adminInfo.name}</span>
      </div>
    </header>
  );
}

export default AdminHeader;