import logoImage from '../assets/images/Logo.jpg';

function Logo() {
  return (
    // Container for the logo
    <div className="logo">
      {/* Image element for the logo with alt text for accessibility */}
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
}

export default Logo; 