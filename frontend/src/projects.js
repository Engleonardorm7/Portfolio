import React, { useEffect, useState } from "react";
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
import { FaGithub } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
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

  if (projects.length === 0) return <p>Not connection with database ...</p>;

  const currentProject = projects[currentProjectIndex];
  const imageUrl = currentProject.image.startsWith("http")
    ? currentProject.image
    : `http://localhost:8000/media/${currentProject.image}`;

  const toolsBox = currentProject.tools_box || [];

  const renderToolIcon = (tool) => {
    switch (tool.toLowerCase()) {
      case "python":
        return <SiPython title="Python" />;
      case "flask":
        return <SiFlask title="Flask" />;
      case "django":
        return <SiDjango title="Django" />;
      case "html":
        return <SiHtml5 title="HTML" />;
      case "css":
        return <SiCss3 title="CSS" />;
      case "fastapi":
        return <SiFastapi title="Fastapi" />;
      case "react":
        return <SiReact title="React" />;
      case "tailwind":
        return <SiTailwindcss title="Tailwind" />;
      default:
        console.warn(`Unknown tool: ${tool}`);
        return null;
    }
  };

  return (
    <section id="projects">
      <div className="projects-section">
        {/* Projects Content */}
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
                </div>
                <div className="tools-icons">
                  {toolsBox.length > 0 ? (
                    toolsBox.map((tool, index) => (
                      <span key={index} className="tool-icon">
                        {renderToolIcon(tool)}
                      </span>
                    ))
                  ) : (
                    <p>No tools available</p>
                  )}
                  <a
                    className="git"
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub
                      size={30}
                      className="social-icon"
                      title="GitHub reposirory"
                    />
                  </a>
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
    </section>
  );
};

export default Projects;
