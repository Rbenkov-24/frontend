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
    <div className="app-container">
      <Sidebar /> {/* Render Sidebar component for navigation */}
      <div className="page-content">
        <h2 className="courses-title">Explore Our Educational Videos</h2> {/* Page title */}
        
        <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} /> {/* Render SearchBar and pass handleSearch function */}
        </div>
        
        {/* Conditional rendering based on loading state and videos data */}
        {loading ? (
          <p className="text-center">Loading videos...</p> // Show loading text while data is being fetched
        ) : videos.length > 0 ? (
          <div>
            {/* Map over the fetched videos to render each video */}
            {videos.map(video => (
              <div key={video.id.videoId} className="video-item">
                <h3>{video.snippet.title}</h3> {/* Video title */}
                <div className="video-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id.videoId}`} // Embed YouTube video player
                    title={video.snippet.title} // Video title for accessibility
                    allowFullScreen
                    style={{ border: 0 }}
                  ></iframe>
                </div>
                <p className="video-description">{truncateDescription(video.snippet.description)}</p> {/* Display truncated ()video description */}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No videos found.</p> // Show message if no videos match the search
        )}
      </div>
    </div>
  );
}
// Export Courses component for use in other parts of the app
export default Courses; 