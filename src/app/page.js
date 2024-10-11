'use client';
import Image from "next/image";
import logo from "./logo.jpg";
import styles from "./page.module.css";
import SideNav from "./SideNav";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.app}>
       {isMobile && (
        <button className={styles.menuButton} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
      <SideNav isOpen={isMenuOpen} isMobile={isMobile} onClose={closeMenu} />
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h1 className={styles.name}>Charvi Shukla 👩‍💻</h1>
          <div className={styles.introduction}>
            <Image
              src={logo}
              width={300}
              height={300}
              alt="Charvi Shukla"
              className={styles.profileImage}
            />
            <div className={styles.aboutContent}>
              <p>
               👋🏽 Hi! I am a fourth year undergraduate student at UC San Diego,
                pursuing a dual degree in Mathematics-Computer Science and
                Cognitive Science with a specialization in Machine Learning and
                Neural Computation.
              </p>
              <p> My research interests lie in medical and
                autonomous driving applications of Computer Vision. At UCSD, I
                have worked as an instructional assistant for the{" "}
                <a href="https://cse.ucsd.edu">
                  Computer Science and Engineering Department
                </a>{" "}
                (CSE 30, CSE 105), and as a Supplemental Instruction leader for the
                Mathematics department (MATH 18) through the{" "}
                <a href="https://aah.ucsd.edu">Academic Achievement Hub</a>. I
                also work as an undergraduate student researcher at the{" "}
                <a href="https://www.ucsda`rclab.com">
                  Advanced Robotics and Controls Lab
                </a>{" "}
                at UCSD.</p>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/charvishukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/charvi-shukla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2>🤗 Experience</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3> 🤖 Advanced Robotics and Controls Lab @ UCSD</h3>
              <div className={styles.cardSubsection}>
                <h4>LLM fine-tuning</h4>
                <ul>
                  <li>
                    Processed a large medical-assessments dataset and used LoRA
                    finetuning to fine tune Meta Llama 2 and Google Gemma models
                    with 7 billion parameters
                  </li>
                  <li>
                    Deployed CUDA based Docker containers to efficiently train
                    models using the PyTorch DataParallel class, leveraging 4
                    GPUs in parallel
                  </li>
                </ul>
              </div>
              <div className={styles.cardSubsection}>
                <h4>SuPerPM, A Surgical Perception Framework</h4>
                <ul>
                  <li>
                    Fine-tuned and debugged Lepard point cloud matching model on a physically constrained simulation dataset of deformed
                    point clouds and implemented custom visualization algorithms in python to assess match quality
                  </li>
                  <li>
                    Preprint link: https://arxiv.org/abs/2309.13863
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <h3> ⚖️ WiseCounsel.ai</h3>
              <ul>
                <li>
                Developed core Command Line Interface for WiseCounsel’s negotiation platform, facilitating bi-directional communication between clients and counterparties using python
                </li>
                <li>
                Designed and engineered a deterministic state machine to enable verification and E2E testing of negotiation workflow

                </li>
                <li>
                Orchestrated multi-clause negotiations by managing 10+ inputs/outputs within a agreement lifecycle from 4 distinct AI Agents to reconstruct legal agreements
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>🔶 Association of Computing Machinery at UC San Diego</h3>
              <div className={styles.cardSubsection}>
                <h4>Hack Technical Events Director</h4>
                <ul className="${styles.list} ${styles.listLevel1}">
                  <li className={styles.listItem}>
                    Developed a 6-week workshop series (ACM Hack School) on MERN-Stack app
                    development. Worked in a team of 5, to create an online textbook explaining core
                    concepts such as HTML/CSS, React.js, MongoDB, Express.js and
                    Node.js, and created a web based type-racer game for
                    teaching.
                  </li>
                  <ul className="${styles.list} ${styles.listLevel2} ${styles.linkList}">
                      <li className={styles.linkItem}> Link to the <a href="https://hack.acmucsd.com/hack-school">Hack School Textbook</a> </li>
                      <li className={styles.linkItem}> Link to the <a href="https://github.com/charvishukla/hackschool-type-racer/tree/main">Type Racer Github</a> </li>
                  </ul>
                  <li className="${styles.list} ${styles.listLevel1}">
                    Held a two-part workshop series on Intro to Building Chrome
                    Extensions. Leveraged Gemini-Pro API from Google AI studio
                    to create a transcript summarizer for recorded lectures
                  </li>
                  <ul className="${styles.list} ${styles.listLevel2} ${styles.linkList}">
                      <li className={styles.linkItem}>Link to the <a href="https://github.com/acmucsd/chrome-extension-workshop/tree/main/transcriptsummerizer">Transcript Summarizer Github</a></li>
                  </ul>
                </ul>
              </div>
              <div className={styles.cardSubsection}>
                <h4>ACM Hack Project Mentor</h4>
                <ul>
                  <li>
                    Mentored a team of 6 developers to develop a full-stack web
                    application using the MERN stack in 10 weeks{" "}
                  </li>
                  <li>
                    Held weekly meetings and guided students on the design and
                    implementation of the web-application. Presented the final
                    product during the Quaterly ACM Projects Demo.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <h3>📚 Tutoring and Supplemental Instruction</h3>
              <div className={styles.cardSubsection}>
              <h4>Academic Achievement Hub, MATH 18: Linear Algebra</h4>
              <ul className="${styles.list} ${styles.listLevel1}">
              <li>Supplemental Instruction leader in Spring 2022, Winter 2022 and Fall 2023</li>
              <li className={styles.listItem}>Collaborated with Teaching Assistants to conduct 5 weekly discussion sessions for 20-30 undergraduates each, reinforcing Linear Algebra lecture content among students</li>
              <li className={styles.listItem}>Orchestrated supplemental instruction in groups of 10 students, engaging students in problem-solving and doubt clarifications </li>
              </ul>
              <h4>Computer Science and Engineering Tutor</h4>
              <ul className="${styles.list} ${styles.listLevel1}">
              <li className={styles.listItem}> Spring 2024: CSE 30, Computer Organization and Systems Programming
                  <ul className="${styles.list} ${styles.listLevel2} ${styles.linkList}">
                      <li className={styles.linkItem}> Conducted 4.5 hours of weekly tutoring for students, debugging C and ARM Assembly code and re-iterating core class concepts </li>
                  </ul>
              </li>
              <li> Fall 2023: CSE 105, Theory of Computation
              <ul className="${styles.list} ${styles.listLevel2} ${styles.linkList}">
              <li className={styles.linkItem}>Tasks include holding office hours, proctoring and grading assignments.</li>
                </ul>
              </li>
              </ul>
              <h4>Mathematics Group Tutoring</h4>
              <ul className="${styles.list} ${styles.listLevel1}">
              <li>Multivariable Calculus group tutor for the Department of Mathematics at UCSD</li>
              <li className={styles.listItem}> Tasks include holding office hours and assisting TAs in mandatory discussion sessions </li>
              <li className={styles.listItem}> Position begins in Fall 2024 </li>
              </ul>
              </div>
            </div>

          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2>🚀 Projects</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>WaveIT</h3>
                <a
                  href="https://github.com/charvishukla/Wave-IT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <ul>
                <li>
                  Worked in a team of 2 to develop an IoT device for individuals
                  with hearing disabilities
                </li>
                <li>
                  Trained a LSTM Neural network using PyTorch and MediaPipe with
                  manually collected data to recognize hand gestures and control
                  smart-home devices
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>PantryPal</h3>
                <a
                  href="https://github.com/charvishukla/cse-110-project-team-13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink}
                >
                  <FaGithub size={24} />
                </a>
              </div>
              <ul>
                <li>
                  Developed a voice-activated recipe generation application
                  using JavaFX and Gradle, integrating Whisper API for audio
                  input recognition of pantry items and meal preferences
                </li>
                <li>
                  Engineered a RESTful backend in Java to manage application
                  data flows and API integration with GPT-3.5 to generate
                  tailored recipe suggestions based on user inputs and DALL-E
                  API for image generation
                </li>
                <li>
                Ensured robust performance through comprehensive testing, including Java unit testing, test and build automation
using GitHub, behavior-driven development (BDE) testing, and end-to-end (E2E) testing with mocking
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="publications" className={styles.section}>
        <h2>🏆 Publications</h2>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>
              Enhanced Vehicle Detection and Counting Using YOLOv8
              </h3>

            </div>
            <ul>
              <li>
              Agrawal, A., Shukla, C., & Shukla, P. (2024). ”Enhanced Vehicle Detection and Counting Using YOLOv8 with
Augmented Data and Optimized Object Grouping.” Presented at the MANIT Bhopal Conference, to be published in
Springer Book Series
              </li>
              <li>
              Proposed a novel object grouping mechanism and pre-processing techniques, which lead to reduction in inference time
              from 38 to 25 ms
              </li>
            </ul>
          </div>
        </div>
        </section>

        <section id="resume" className={styles.section}>
          <h2>🔱 Resume</h2>
          <a
            href="/charvi-resume.pdf"
            download
            className={styles.downloadButton}
          >
            Download Resume
          </a>
        </section>
      </main>
    </div>
  );
}
