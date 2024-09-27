import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiFastapi,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  const toolsBox = currentProject.tools_box || [];

  const renderToolIcon = (tool) => {
    switch (tool.toLowerCase()) {
      case "python":
        return <SiPython />;
      case "flask":
        return <SiFlask />;
      case "django":
        return <SiDjango />;
      case "html":
        return <SiHtml5 />;
      case "css":
        return <SiCss3 />;
      case "fastapi":
        return <SiFastapi />;
      case "react":
        return <SiReact />;
      case "tailwind":
        return <SiTailwindcss />;
      default:
        console.warn(`Unknown tool: ${tool}`);
        return null;
    }
  };

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
            <IoIosArrowBack size={30} />
          </button>
          <div className="project-item">
            <div className="project-content">
              <div className="project-description-container">
                <h3 className="project-title">{currentProject.title}</h3>
                <div className="project-description">
                  <p>{currentProject.description}</p>
                  <div className="tools-icons">
                    {console.log(toolsBox)}
                    {toolsBox.length > 0 ? (
                      toolsBox.map((tool, index) => (
                        <span key={index} className="tool-icon">
                          {console.log(" tool:", tool)}
                          {renderToolIcon(tool)}
                        </span>
                      ))
                    ) : (
                      <p>No tools available</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-image-container">
                <img
                  src={imageUrl}
                  alt={currentProject.title}
                  className="project-image"
                />
              </div>
            </div>
          </div>

          <button className="scroll-button right" onClick={handleNextProject}>
            <IoIosArrowForward size={30} />
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
      <div>
        <SiPython /> {/* Prueba renderizando un ícono directamente */}
      </div>
    </div>
  );
};

export default Portfolio;
