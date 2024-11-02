import React from "react";
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="about-section">
          <img src="src/assets/codeiiest-gdg.png" alt="codeiiest-gdg" />
          <div className="text-area">
            <h3>IIEST GenAI</h3>
            <p>Join our GenAI Study Jams—interactive sessions to boost your AI skills and career!</p>
          </div>
        </div>

        <div className="link-section">
          <div className="sub-section left">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">GDG IIEST</a></li>
              <li><a href="#">Leaderboard</a></li>
              <li><a href="#">Homepage</a></li>
            </ul>
          </div>

          <div className="sub-section right">
            <h3>Maintainers</h3>
            <ul className="footer-links">
              <li><a href="https://iamakashtechie.vercel.app/">Akash Shaw</a></li>
              <li><a href="https://asiftanvir.pages.dev">Sk Asif Tanvir</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>GDG on Campus, IIEST Shibpur</p>
        <div class="social-links">
        <a href="https://github.com/CodeIIEST-dev" aria-label="GitHub">
                    󰊤
                </a>
                
                <a href="mailto:codeiiest.iiest@gmail.com" aria-label="Email">
                    󰇮
                </a>
                <a href="https://twitter.com/codeiiest" aria-label="Twitter">
                    𝕏
                </a>
                <a href="https://www.facebook.com/CodeIIEST" aria-label="Facebook">
                    󰈌
                </a>
                <a href="https://www.youtube.com/codeiiest" aria-label="YouTube">
                    󰗃
                </a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;