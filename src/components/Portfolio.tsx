import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../styles/Portfolio.css";

const projects = [
  {
    title: "Goldilocks Project",
    description: "A web app designed to help users find the perfect fit between cost, quality, and efficiency.",
    image: "/assets/goldilocksproject.png",
    liveLink: "http://your-deployed-app.com",
    githubLink: "https://github.com/Keaton007/Project-1",
    technologies: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Austen's Alcove",
    description: "An online library dedicated to the works of Jane Austen with interactive features.",
    image: "/assets/bookshelf.webp",
    liveLink: "https://austensalcove-dae4.onrender.com/",
    githubLink: "https://github.com/kjlomax/AustensAlcove",
    technologies: ["React", "MongoDB", "Node.js"],
  },
  {
    title: "Virtual Garage",
    description: "A Next.js app for managing and customizing your personal garage of vehicles.",
    image: "/assets/sportscar.webp",
    liveLink: "http://your-deployed-app.com",
    githubLink: "https://github.com/Keaton007/Virtual_Garage",
    technologies: ["Next.js", "MongoDB", "TypeScript"],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio-container" id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="portfolio-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
