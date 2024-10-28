import { useEffect, useState } from 'react';
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar"; 
import "../../../styles/courses.css";

function Courses() {
  const [videos, setVideos] = useState([]); // State to hold fetched videos
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [keyword, setKeyword] = useState(""); // New state for search keyword

  useEffect(() => {
    // Function to fetch videos based on the search keyword
    const fetchVideos = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching to indicate that data is being loaded
        const response = await fetch(`http://localhost:4000/api/youtube/videos?keyword=${keyword}`);
        const data = await response.json(); // Parse response data as JSON
        console.log("Fetched videos data:", data);
        setVideos(data.items); // Update state with fetched videos
      } catch (error) {
        console.error('Error fetching videos:', error); // Log any fetch error
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };
    fetchVideos(); // Call the fetch function
  }, [keyword]); // Re-run when the keyword changes

  const handleSearch = (query) => {
    setKeyword(query); // Set keyword from SearchBar input
  };

  // Function to truncate video description to a maximum length
  const truncateDescription = (description, maxLength = 100) => {
    if (!description) return ""; // Return empty if no description
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..." 
      : description; 
  };

  return (
    <div className="container">
      <div className="left-container">
        <Sidebar /> {/* Sidebar component for navigation */}
      </div>
      <div className="right-container">
        <h2>Courses</h2>
        <SearchBar onSearch={handleSearch} /> {/* Search bar to input search keyword */}
        {loading ? (
          <p>Loading videos...</p> // Loading message while fetching
        ) : videos.length > 0 ? (
          <div className="video-list">
            {videos.map(video => (
              <div key={video.id.videoId} className="video-item">
                <h3>{video.snippet.title}</h3> {/* Video title */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title} // Title for accessibility
                  allowFullScreen
                  style={{ border: 0 }}
                ></iframe>
                <p>{truncateDescription(video.snippet.description)}</p> {/* Truncated description */}
              </div>
            ))}
          </div>
        ) : (
          <p>No videos found.</p> // Message if no videos are found
        )}
      </div>
    </div>
  );
}

export default Courses; 