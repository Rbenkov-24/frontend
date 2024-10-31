import { useEffect, useState } from "react"; // Import React hooks: useEffect for side effects, useState for managing component state
import Sidebar from "./Sidebar";
import "../../../styles/about.css";

const About = () => {
  // State variable to store the list of contributors, initially set to an empty array
  const [contributors, setContributors] = useState([]);

  // useEffect to fetch contributor data from the API once when the component mounts
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        // Send a request to the API endpoint for fetching contributors
        const response = await fetch("http://localhost:4000/api/contributors");

        // Check if the response status indicates success
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON response to get contributor data
        const data = await response.json();

        // Update contributors state with the fetched data
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    // Call fetchContributors to initiate the data fetch
    fetchContributors();
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div className="app-container">
      <Sidebar /> {/* Render the Sidebar component on the side */}
      <div className="flex-container">
        {/* "How It Started" section with the story about the mission and vision */}
        <div className="content-box">
          <h4 className="text-left">How It Started</h4>
          <h2>Our Dream is Global Learning Transformation</h2>

          {/* Paragraphs describing the origins, mission, and impact of the initiative */}
          <p className="story-paragraph">
            In a small town, where resources were limited, a group of passionate
            educators recognized a critical gap in the local education system.
            They believed that knowledge should not have borders and that
            everyone, regardless of their socioeconomic status, deserved the
            right to quality education. This small group, driven by their love
            for teaching and the desire to make a difference, set out on a
            mission to provide accessible learning opportunities for everyone,
            hoping to ignite the flame of curiosity in their community.
          </p>

          <p className="story-paragraph">
            The journey began with a single, humble classroom. A few dedicated
            volunteers gathered their resources and creativity to create a safe
            space where students could explore new ideas, ask questions, and
            learn from one another. They transformed ordinary materials into
            interactive learning tools, organizing workshops and activities that
            were both educational and fun. Each day, they saw students faces
            light up with excitement as they discovered new concepts and engaged
            in collaborative projects, fueling their passion for learning.
          </p>

          <p className="story-paragraph">
            Today, their dream has blossomed into a global movement. Thousands
            of learners from various backgrounds have benefited from their
            efforts, each sharing their own stories of transformation and
            success. They believe that education is not just about acquiring
            knowledge; it's about empowering individuals to create positive
            change in their communities and the world. Every lesson learned,
            every project completed, and every connection made is a testament to
            their commitment to inspiring a lifelong love for learning.
            Together, they are transforming lives, one lesson at a time, and
            paving the way for future generations to thrive.
          </p>
        </div>

        {/* "Meet Our Team" section */}
        <div className="team-section">
          <div className="content-box">
            <h2 className="text-center section-title">Meet Our Team</h2>

            {/* Display the list of contributors if data is available */}
            <div className="contributors">
              {contributors.length > 0
                ? contributors.map((contributor) => (
                    <div
                      key={contributor._id}
                      className="contributor content-box"
                    >
                      <img src={contributor.picture} alt={contributor.name} />{" "}
                      {/* Display contributor's picture */}
                      <h5 className="text-center">{contributor.name}</h5>{" "}
                      {/* Display contributor's name */}
                      <p className="text-center">{contributor.jobTitle}</p>{" "}
                      {/* Display contributor's job title */}
                      <p className="text-center contributor-bio">
                        {contributor.bio}
                      </p>{" "}
                      {/* Display contributor's bio */}
                    </div>
                  ))
                : null}{" "}
              {/* If no contributors, display nothing */}
            </div>
          </div>
        </div>

        {/* Section showing organization impact statistics */}
        <div className="content-box">
          <h2 className="text-center section-title">Our Impact</h2>
          <div className="stats-container">
            <div className="stat-box text-center">
              <h3>User Number</h3> {/* Displays total users */}
              <p>100K+</p>
            </div>
            <div className="stat-box text-center">
              <h3>Post Reviews</h3> {/* Displays total post reviews */}
              <p>50K+</p>
            </div>
            <div className="stat-box text-center">
              <h3>Skills </h3> {/* Displays skills taught or mastered */}
              <p>500+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the About component to be used in other parts of the app
export default About;
