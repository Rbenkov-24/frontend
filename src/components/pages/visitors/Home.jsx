import Sidebar from "./Sidebar";
import heroImage from "../../../assets/images/heroImage.png";
import user1 from "../../../assets/images/user1.jpg";
import user2 from "../../../assets/images/user2.jpg";
import user3 from "../../../assets/images/user3.jpg";
import user4 from "../../../assets/images/user4.jpg";
import "../../../styles/home.css";

// Home component, the main content container for the homepage
function Home() {
  return (
    <div className="app-container">
        <Sidebar />

      {/* Right side - main content area */}
        <div className="page-content">
          <h1 className="welcome-title">Welcome to SkillStream</h1>
          <p className="welcome-subtitle">
            Your journey to global learning transformation starts here!
          </p>

          {/* Hero Image Section, displays a main image */}
          <div className="hero-image">
            <img src={heroImage} alt="Transform Your Learning Journey" />
          </div>

          {/* Popular Topics Section - Display grid of popular learning topics */}
          <div className="popular-topics">
            <h2 className="section-title">Popular Topics</h2>
            <div className="topics-grid">
              {[
                "Math",
                "Music",
                "Data Science",
                "React",
                "AI",
                "C Sharp",
                "JS",
                "Science",
                "Python",
                "Design",
                "HTML",
                "CSS",
              ].map((topic, index) => (
                <div key={index} className="topic-card">
                  <h3>{topic}</h3>{/* Topic name */}
                  <p>Explore {topic}</p>{/* Short description encouraging users to explore */}
                </div>
              ))}
            </div>
          </div>

        {/* Reviews Section - Display testimonials from learners */}
        <div className="reviews-section">
          <h2 className="section-title">
            See What Others Are Achieving Through Learning With Us
          </h2> {/* Reviews section title */}
          <div className="reviews-grid">
            {[
              {
                name: "Nina",
                role: "Student",
                image: user1,
                text: `“This platform changed my life! I went from zero to hero”`,
              },
              {
                name: "Mike",
                role: "Developer",
                image: user2,
                text: `“I learned so much in a short time. Thank you SkillStream”`,
              },
              {
                name: "Luna",
                role: "Software Engineer",
                image: user3,
                text: `“Fantastic experience with excellent content. I love it”`,
              },
              {
                name: "Heather",
                role: "JS Developer",
                image: user4,
                text: `“Highly recommend for anyone wanting to learn!”`,
              },
            ].map((review, index) => (
              <div key={index} className="review-card">
                <p className="review-text">{review.text}</p> {/* Review text */}
                <img
                  src={review.image}
                  alt={review.name}
                  className="reviewer-img"
                /> {/* Reviewer profile image */}
                <h4 className="reviewer-name">{review.name}</h4> {/* Reviewer name */}
                <p className="reviewer-role">{review.role}</p> {/* Reviewer's role or occupation */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting Home component for usage in other parts of the application
export default Home;