import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./App.css";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (projects.length === 0) return <p>Loading ...</p>;

  const currentProject = projects[currentProjectIndex];
  const imageUrl = currentProject.image.startsWith("http")
    ? currentProject.image
    : `http://localhost:8000/media/${currentProject.image}`;

  return (
    <div className={`portfolio ${darkMode ? "dark-mode" : "light-mode"}`}>
      <nav className="nav">
        <h2 className="name">Leonardo Rodriguez</h2>
        <ul className="nav-links">
          <li>Contact</li>
          <li>Projects</li>
          <li>Papers</li>
          <div
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: "pointer" }}
          >
            {darkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
          </div>
        </ul>
      </nav>

      <div className="intro">
        <h1 className="title">Leonardo Rodriguez</h1>
        <h2 className="subtitle"> AI and Web Developer</h2>
        <p className="description">
          I am a Mechatronic Engineer with over six years of experience in
          various fields of mechatronics, and I am currently pursuing a Master's
          degree in Artificial Intelligence and Robotics. I have a strong
          passion for programming and I am seeking an opportunity to align my
          career focus with my passion for programming, artificial intelligence,
          and robotics. I have a solid foundation in programming languages such
          as Python, Java, C/C++, and JavaScript, as well as experience with
          frameworks like Django, Flask, and FastAPI. I am eager to contribute
          to a team and make a meaningful impact with my experience and
          enthusiasm for programming.
        </p>
        <div className="buttons">
          <a href="https://www.linkedin.com" className="icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com" className="icon">
            <FaGithub />
          </a>
          <button className="cv-button">Download CV</button>
        </div>
      </div>
      <div className="brain">
        {/* Aquí puedes incluir la estructura del cerebro hecho de puntos */}
      </div>

      <div className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-wrapper">
          <button className="scroll-button left" onClick={handlePrevProject}>
            <FaArrowLeft size={30} />
          </button>
          <div className="project-item">
            <img
              src={imageUrl}
              alt={currentProject.title}
              className="project-image"
            />
            <h3 className="project-title">{currentProject.title}</h3>
            <p className="project-description">{currentProject.description}</p>
          </div>

          <button className="scroll-button right" onClick={handleNextProject}>
            <FaArrowRight size={30} />
          </button>
        </div>
        <div className="projects-indicators">
          {projects.map((_, index) => (
            <span
              className={`dot ${index === currentProjectIndex ? "active" : ""}`}
              onClick={() => setCurrentProjectIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
