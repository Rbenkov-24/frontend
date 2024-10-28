import { useState } from 'react'; 
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import '../../../styles/searchBar.css'; 

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(''); // State to hold the search query

  // Function to handle input changes
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update state with the input value
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSearch(query); // Call the onSearch function passed as a prop with the current query
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}> {/* Form that triggers search on submit */}
      <input
        type="text"
        placeholder="Search..." 
        value={query} 
        onChange={handleInputChange} // Call handleInputChange on input change
        className="search-input"
      />
      <button type="submit" className="search-button"> 
        Search
      </button>
    </form>
  );
}

// Define prop types for the SearchBar component
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, 
};

export default SearchBar; 