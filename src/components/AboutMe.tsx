// src/components/AboutMe.tsx
import React from "react";
import "../styles/AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me">
      <div className="profile-image">
        <span>KJ</span>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate full-stack web developer with a love for
          creating dynamic, responsive applications. With expertise in
          **TypeScript, React, and .NET**, I enjoy crafting clean, maintainable
          code and exploring new technologies. Whether it's building seamless
          UI experiences or optimizing backend performance, I'm always eager to
          take on new challenges. In my free time, I enjoy scuba diving,
          being outdoors and especally spending time with my family!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;

