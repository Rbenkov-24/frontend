import { useEffect, useState } from "react"; // Import React hooks for managing state
import Sidebar from "./Sidebar";
import "../../../styles/about.css";

const About = () => {
  // State to hold the list of contributors
  const [contributors, setContributors] = useState([]);

  // Effect to fetch contributors from the API when the component mounts
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        // Fetch contributors data from the API
        const response = await fetch("http://localhost:4000/api/contributors");

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON data from the response
        const data = await response.json();

        // Update the state with the fetched contributors
        setContributors(data);
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error("Error fetching contributors:", error);
      }
    };

    // Call the fetch function to get the contributors
    fetchContributors();
  }, []); // Empty dependency array means runs once when the component mounts

  return (
    <div className="container">
      <div className="left-container">
        <Sidebar /> {/* Render the Sidebar component */}
      </div>
      <div className="right-container">
        <div className="flex-container">
          <div className="content-box">
            <h4>How It Started</h4>
            <h2>Our Dream is Global Learning Transformation</h2>
            <p>In a small town, where resources were limited...</p>
            <p>The journey began with a single, humble classroom...</p>
            <p>As word spread about this vibrant learning community...</p>
            <p>Inspired by the success of their small classroom...</p>
            <p>Today, their dream has blossomed into a global movement...</p>
          </div>

          <div className="stats-container">
            <div className="stat-box">User Number: 100</div>
            <div className="stat-box">Post Reviews: 50</div>
          </div>
        </div>

        <h3>Meet Our Team</h3>
        <div className="contributors">
          {contributors.length > 0
            ? contributors.map((contributor) => (
                <div key={contributor._id} className="contributor">
                  <img src={contributor.picture} alt={contributor.name} />{" "}
                  {/* Display picture */}
                  <h5>{contributor.name}</h5> {/* Display name */}
                  <p>{contributor.jobTitle}</p> {/* Display job title */}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

// Export the About component for use in other parts of the application
export default About;
