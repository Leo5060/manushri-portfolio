import React from 'react';
import './Projects.css'; // Add this line if you create a separate CSS

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        
        <div className="project-card">
          <h3>AI Scribe</h3>
          <p>Real-Time Clinical Documentation project using AI.</p>
        </div>

        <div className="project-card">
          <h3>Prescription Trends</h3>
          <p>Visualization of pharmaceutical usage patterns.</p>
        </div>

        <div className="project-card">
          <h3>Personal Portfolio</h3>
          <p>This website showcasing my skills and projects.</p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
