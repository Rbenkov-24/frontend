function Footer() {
  return (
    <footer className="footer">
      {/* Contact Information Section */}
      <div>
        <div>
          <h4>Contact Us</h4>
          <p>
            Email: <span>info@skillstream.com</span>
          </p>
          <div>
            <h4>Subscribe to our newsletter</h4>
            <form>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h4>Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4>Quick Links</h4>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div>
        <div>
          <p>© 2024 SkillStream, INC.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;