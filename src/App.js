import React from 'react';
import './App.css';
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Left Panel: Sidebar */}
        <div className="App-sidebar">
          <div className="sidebar-content">
            <img
              src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
              alt="Kurni Manushri"
              className="profile-photo"
            />
            <div className="sidebar-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#achievements">Achievements</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                <FaPhoneAlt style={{ marginRight: '8px' }} />
                <a href="tel:+919876543210">+91 9876543210</a>
              </p>
              <p>
                <FaEnvelope style={{ marginRight: '8px' }} />
                <a href="mailto:manusri2005@gmail.com">manusri2005@gmail.com</a>
              </p>
              <a
                className="App-link"
                href="https://www.linkedin.com/in/kurni-manushri-b222aa256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} style={{ marginRight: '8px' }} /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="App-content">
          <section id="home">
            <h1>Welcome to My Portfolio</h1>
            <p>
              Hi, I'm <strong>Kurni Manushri</strong>, a passionate software
              engineer currently pursuing B.Tech in Computer Science and
              Engineering at Presidency University.
            </p>
            <p>
              I enjoy building modern, responsive web applications and have a
              keen interest in AI, Cyber Security, and Ethical Hacking.
            </p>
          </section>

          {/* About Section */}
          <section id="about">
            <h2>About Me</h2>
            <p>
              I am a third-year B.Tech student at Presidency University,
              pursuing my degree in Computer Science and Engineering. With a
              strong interest in Artificial Intelligence, Cyber Security, and
              Ethical Hacking, I aim to develop innovative solutions that
              positively impact the world.
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2>💻 Projects</h2>
            <ul>
              <li>AI Scribe – Real-Time Clinical Documentation</li>
              <li>Prescription Trends – Visualization of Drug Usage</li>
              <li>Personal Portfolio Website (this site!)</li>
            </ul>
          </section>

          {/* Achievements Section */}
          <section id="achievements">
            <h2>🎯 Achievements</h2>
            <ul>
              <li>Ongoing Internship at Cognifyz Technologies</li>
              <li>Active member of Creovators Club and IGEN Club</li>
            </ul>
          </section>

          {/* Certificates Section */}
          <section id="certificates">
            <h2>📜 Certificates</h2>
            <ul>
              <li>Python Programming Certification</li>
              <li>Front-End Development Projects</li>
              <li>Cyber Security Fundamentals (Coursera)</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2>📞 Contact Me</h2>
            <p>Email: <a href="mailto:manusri2005@gmail.com">manusri2005@gmail.com</a></p>
            <p>Phone: <a href="tel:+919876543210">+91 9876543210</a></p>
          </section>
        </div>
      </header>
    </div>
  );
}

export default App;
