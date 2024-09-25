// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/projects/")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error(error));
  }, []);
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
      {/* <h1>My projects</h1> */}
      <div className="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="project-list">
          {projects.map((project) => {
            const imageUrl = project.image.startsWith("http")
              ? project.image
              : `http://localhost:8000/media/${project.image}`;
            return (
              <div className="project-item" key={project.id}>
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
