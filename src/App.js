import React, { useEffect, useState } from "react";
import "./App.css";
import image2 from "./avatar2.png";

function App() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Delay the animation start to allow other content to load
    const timeout = setTimeout(() => {
      setShowName(true);
    }, 1000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <div className="top-section">
        <img src={image2} alt="avatar" className="avatar-image" />
        {showName && (
          <h1 className="name">
            {Array.from("Charvi Shukla_").map((char, index) => (
              <span key={index} className="name-animation">
                {char}
              </span>
            ))}
          </h1>
        )}
      </div>

      <div className="content-section">
        <div className="about-section">
          <h2>About</h2>
          <p className="about">
            Hi, I'm Charvi! I was born and raised in Indore, India, and I am a
            Third Year Math-CS Major at UC San Diego! The best way to contact me
            is to email me at cshukla at ucsd dot edu.
          </p>
          <p className="about">
            Here's a link to my{" "}
            <a href="https://github.com/charvishukla">Github</a>,{" "}
            <a href="https://www.linkedin.com/in/charvi-shukla-439b681b2/">
              LinkedIn
            </a>
            , and my{" "}
            <a
              href="/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume.
            </a>
          </p>
        </div>
        <div className="divider"></div> {/* Custom divider */}
        <div className="projects-section">
          <h2>Projects</h2>
          {/* Add your projects here */}
          <div className="project-card">
            <h3 className="proj-card-content">Proj 2</h3>
            <p className="proj-card-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="project-card">
            <h3 className="proj-card-content">Proj 1</h3>
            <p className="proj-card-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="project-card">
            <h3 className="proj-card-content">Proj 3</h3>
            <p className="proj-card-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="divider"></div> {/* Custom divider */}
        </div>
      </div>
    </div>
  );
}

export default App;
