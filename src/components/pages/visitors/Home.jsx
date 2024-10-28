import Sidebar from "../visitors/Sidebar";
import heroImage from "../../../assets/images/HeroImage.png";
import user1 from "../../../assets/images/user1.jpg";
import user2 from "../../../assets/images/user2.jpg";
import user3 from "../../../assets/images/user3.jpg";
import user4 from "../../../assets/images/user4.jpg";
import "../../../styles/home.css";
import "../../../App.css";

// Home component, the main content container for the homepage
function Home() {
  return (
    <div className="home-container">
      <div className="left-side">
        <Sidebar />
      </div>

      {/* Right side - main content area */}
      <div className="right-side">
        <div >
          {/* Welcome message */}
          <h1>Welcome to SkillStream</h1>
          <p>Your journey to global learning transformation starts here!</p>

          {/* Hero Image Section, displays a main image */}
          <div className="hero-image">
            <img src={heroImage} alt="Hero" className="hero-img" />
          </div>

          {/* Popular Topics Section */}
          <div className="popular-topics">
            <h2>Popular Topics</h2>

            {/* Topic categories */}
            <div className="topics-container">
              <div className="topic-box">Math</div>
              <div className="topic-box">Music</div>
              <div className="topic-box">Data Science</div>
              <div className="topic-box">React</div>
              <div className="topic-box">AI</div>
              <div className="topic-box">C Sharp</div>
              <div className="topic-box">JS</div>
              <div className="topic-box">Science</div>
              <div className="topic-box">Python</div>
              <div className="topic-box">Design</div>
              <div className="topic-box">HTML</div>
              <div className="topic-box">CSS</div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews-section">
            <h2>See What Others Achieving Through Learning With Us</h2>

            {/* User reviews showcasing feedback from other learners */}
            <div className="reviews-container">
              <div className="review-box">
                <p>"This platform changed my life!"</p>
                <img
                  src={user1}
                  alt="profile picture"
                  className="reviewer-pic"
                />
                <h5>Nina</h5>
                <p>Student</p>
              </div>
              <div className="review-box">
                <p>"I learned so much in a short time."</p>
                <img
                  src={user2}
                  alt="profile picture"
                  className="reviewer-pic"
                />
                <h5>Mike</h5>
                <p>Developer</p>
              </div>
              <div className="review-box">
                <p>"Fantastic experience with excellent content."</p>
                <img
                  src={user3}
                  alt="profile picture"
                  className="reviewer-pic"
                />
                <h5>Luna</h5>
                <p>Software Engineer</p>
              </div>
              <div className="review-box">
                <p>"Highly recommend for anyone wanting to learn!"</p>
                <img
                  src={user4}
                  alt="profile picture"
                  className="reviewer-pic"
                />
                <h5>Heather</h5>
                <p>JS Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting Home component to be used in other parts of the application
export default Home;
