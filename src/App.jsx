import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Home from "./components/pages/visitors/Home";
import About from './components/pages/visitors/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/logo.css";
import "./styles/footer.css";

function App() {
  return (
    <Router>
      <div>
        <Logo />

        <Routes>
          {/* User Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
