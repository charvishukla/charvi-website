// pages/index.js
import styles from "./page.module.css";
import Image from "next/image";
import apple from "./Apple-Logosu.png";
import brain from "./brain.png";
import wise from "./wise.png";


export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>Charvi Shukla</h1>
        <p className={styles.description}>
          👋🏽 Hi! I am a fourth year undergraduate student at UC San Diego,
          pursuing a dual degree in Mathematics-Computer Science and Cognitive
          Science with a specialization in Machine Learning and Neural
          Computation.
        </p>
        <div className={styles.links}>
          <a href="mailto:example@example.com" className={styles.link}>
            Email
          </a>{" "}
          /
          <a href="#" className={styles.link}>
            Resume
          </a>{" "}
          /
          <a href="#" className={styles.link}>
            LinkedIn
          </a>{" "}
          /
          <a href="#" className={styles.link}>
            Github
          </a>
        </div>
      </header>

      <section className={styles.experience}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.experienceItem}>
          <Image
            src={apple}
            alt="Apple Logo"
            className={styles.experienceLogo}
          />
          <div className={styles.experienceDetails}>
            <div className={styles.experienceTitle}>
              Tools and Automation Intern
            </div>
            <div className={styles.experienceCompany}>Apple - Core OS Team</div>
            <div className={styles.experienceDuration}>
              February 2025 - June 2025
            </div>
            <p className={styles.experienceDescription}>
              Incoming full-time intern for Winter and Spring quarters in 2025.
            </p>
          </div>
        </div>
        
        
        <div className={styles.experienceItem}>
          <Image
            src={brain}
            alt="Brain Corp Logo"
            className={styles.experienceLogoBrain}
          />
          <div className={styles.experienceDetails}>
            <div className={styles.experienceTitle}>
              Software Engineering Intern
            </div>
            <div className={styles.experienceCompany}>
              Brain Corporation - Sense Tools Team
            </div>
            <div className={styles.experienceDuration}>
              {" "}
              June 2025 - September 2025
            </div>
            <p className={styles.experienceDescription}>
            Incoming full-time intern for Summer 2025. 
            </p>
          </div>
        </div>

        <div className={styles.experienceItem}>
          <Image
            src={wise}
            alt="WC Logo"
            className={styles.experienceLogoWise}
          />
          <div className={styles.experienceDetails}>
            <div className={styles.experienceTitle}>
              Software Engineering Intern
            </div>
            <div className={styles.experienceCompany}>
              Wise Counsel AI - Core Negotiation Engine
            </div>
            <div className={styles.experienceDuration}>
              {" "}
              November 2023 - April 2024
            </div>
            <ul className={styles.experienceDescription}>
            <li>Built CLI for WiseCounsel's negotiation platform enabling client-counterparty communication </li>
            <li>Designed a deterministic state machine to enable verification and E2E testing of negotiation workflow</li>
            <li>Orchestrated multi-clause negotiations by managing 10+ inputs/outputs within a agreement lifecycle from 4 distinct AI
            Agents to reconstruct legal agreements</li>
            </ul>
          </div>
        </div>


      </section>

      <section className={styles.research}>
        <h2 className={styles.sectionTitle}>Research</h2>
        <p className={styles.sectionDescription}>
          My research interests lie in medical and autonomous driving
          applications of Computer Vision. At UCSD, I had the opportunity to
          work as an undergraduate student researcher at the{" "}
          <a href="https://www.ucsdarclab.com">
            Advanced Robotics and Controls Lab
          </a>{" "}
          under the guidance of my mentor Dr. Shan Lin.
        </p>

        <div className={styles.projects}>
          <div className={styles.projectItem}>
            <h3 className={styles.projectTitle}>
              <b> Advanced Robotics and Controls Lab @ UCSD </b>
            </h3>
            <a href="https://www.ucsdarclab.com" className={styles.projectLink}>
              Website
            </a>{" "}
            <p className={styles.projectAuthors}>
              {" "}
              I had the opportunity to work as an Undergraduate Student
              Researcher under the guidance of{" "}
              <a href="https://www.shanlin.org">Dr. Shan Lin</a> on the
              following projects:
            </p>
            <ul>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>

          <div className={styles.projectItem}>
            <h3 className={styles.projectTitle}>
              <b>
                Enhanced Vehicle Identification Using YOLOv8 with Counter-Based
                Grouping for Improved Real-Time Performance, ICSISCET 2024
              </b>
            </h3>
            <p className={styles.projectAuthors}>
              {" "}
              Springer Book Series: Algorithms for Intelligent Systems, A.
              Agrawal and C. Shukla
            </p>
            <a href="#" className={styles.projectLink}>
              Project Page
            </a>{" "}
            /
            <a href="#" className={styles.projectLink}>
              Arxiv
            </a>{" "}
          </div>
        </div>
      </section>
    </div>
  );
}
