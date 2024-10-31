import Footer from "./components/pages/shared/Footer"; 
import Logo from "./components/pages/shared/Logo"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Imports routing components from React Router
import "./styles/logo.css"; 
import "./styles/footer.css"; 
import "./App.css"; 

// Page components
import Home from "./components/pages/visitors/Home"; 
import About from "./components/pages/visitors/About"; 
import Courses from "./components/pages/visitors/Courses"; 
import Login from "./components/pages/visitors/Login"; 
import AdminDashboard from "./components/pages/admin/AdminDashboard"; 
import WorkSpace from "./components/pages/admin/WorkSpace"; 

function App() {
  return (
    <Router> {/* Provides context for all routing elements in the app */}
      <div className="app-container"> {/* Main container for the entire app */}
        
        {/* Left side containing the logo and the sidebars */}
        <div className="left-container">
          <Logo /> {/* Renders the logo */}
        </div>

        {/* Right side containing the main content and routes */}
        <div className="right-container">
          <Routes> {/* Define routes that render specific components based on URL */}
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/courses" element={<Courses />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
            <Route path="/admin/workSpace" element={<WorkSpace />} /> 
          </Routes>
        </div>
      </div>
      
      <Footer /> 
    </Router>
  );
}
// Exports the App component so it can be rendered in main.jsx
export default App; 