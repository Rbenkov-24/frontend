import logoImage from '../../../assets/images/logo.png';
import '../../../styles/logo.css';

// Renders the SkillStream logo with an image and text
function Logo() {
  return (
    <div className="logo">
      <div className="logo-container">
        <img src={logoImage} alt="SkillStream Logo" className="logo-image" />
        <span className="logo-text">SKILLSTREAM</span>
      </div>
    </div>
  );
}

export default Logo;