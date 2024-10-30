function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* Contact Information Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Email: <span>info@skillstream.com</span>
          </p>
        </div>

        {/* Newsletter Section*/}
        <div className="footer-section">
          <div className="newsletter">
            <h4>Subscribe to our newsletter</h4>
            <form>
              <input type="email" name="email" id="newsletter-email" placeholder="Your email" required autoComplete="email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="quick-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 SkillStream, INC.</p>
      </div>
    </footer>
  );
}

export default Footer;