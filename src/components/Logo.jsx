import logoImage from '../assets/images/Logo.jpg';

function Logo() {
  return (
    <div className="logo">
      <img src={logoImage} alt="Logo" className="logo-image" />
    </div>
  );
}

export default Logo;