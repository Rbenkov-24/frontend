import logoImage from '../../../assets/images/logo.jpg';
import '../../../styles/logo.css';


function Logo() {
  return (
    // Container for the logo
    <div className="logo">
      {/* Image element for the logo with alt text for accessibility */}
      <img src={logoImage} alt="SkillStream Logo" className="logo-image" />
    </div>
  );
}

export default Logo; 