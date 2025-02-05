import React from "react";
import { FaDownload, FaCode, FaDatabase, FaToolbox } from "react-icons/fa";
import "../styles/Resume.css";

const Resume: React.FC = () => {
  return (
    <section className="resume-container">
      <h2>My Resume</h2>

      {/* Download Button */}
      <div className="resume-download">
        <a href="/resume.pdf" download className="download-btn">
          <FaDownload className="download-icon" />
          Download Resume
        </a>
      </div>

      {/* Skills Section */}
      <div className="skills-grid">
        <div className="skill-category">
          <FaCode className="skill-icon" />
          <h3>Frontend Development</h3>
          <ul>
            <li>React.js & TypeScript</li>
            <li>Next.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML & CSS</li>
            <li>Tailwind & Bootstrap</li>
          </ul>
        </div>

        <div className="skill-category">
          <FaDatabase className="skill-icon" />
          <h3>Backend Development</h3>
          <ul>
            <li>.NET & C#</li>
            <li>Node.js & Express</li>
            <li>SQL & NoSQL Databases</li>
            <li>MongoDB & PostgreSQL</li>
          </ul>
        </div>

        <div className="skill-category">
          <FaToolbox className="skill-icon" />
          <h3>Tools & DevOps</h3>
          <ul>
            <li>Git, GitHub, Bitbucket</li>
            <li>Jenkins & CI/CD</li>
            <li>Docker & Kubernetes</li>
            <li>Agile & Scrum Methodologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
