import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking to ensure the correct props are passed
import '../../../styles/searchBar.css'; 

// SearchBar component allows users to input a search term and triggers a search when submitted
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(''); // State variable to hold the search term entered by the user

  // Function to handle updates to the input field
  const handleInputChange = (e) => {
    setQuery(e.target.value); // Update `query` state whenever the user types in the input field
  };

  // Function to handle form submission and execute search
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading on form submission
    onSearch(query); // Calls the `onSearch` function passed down as a prop with the current query value
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}> {/* Form triggers search on submit */}
      <input
        type="text"
        id="search-query" // Unique identifier for the search input, can help with accessibility and testing
        name="search" // Input name attribute, useful for forms and accessibility
        placeholder="Search..." 
        value={query} // Binds the input field's value to the `query` state
        onChange={handleInputChange} // Updates the `query` state on every input change
        className="search-input" 
      />
      <button type="submit" className="search-button btn btn-primary"> {/* Button triggers form submission */}
        Search
      </button>
    </form>
  );
}

// Define prop types for the SearchBar component to enforce correct prop usage
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Ensures onSearch is a required function prop
};

// Exporting SearchBar component to be used in other parts of the application
export default SearchBar; 