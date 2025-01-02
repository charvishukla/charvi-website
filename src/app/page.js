// pages/index.js
import styles from "./page.module.css";
import Image from "next/image";
import apple from "./Apple-Logosu.png";
import brain from "./brain.png";
import wise from "./wise.png";
import cse from "./cse.png";
import TLC from "./TLC.jpg";
import ucsd from "./ucsd.png";

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
        <p className={styles.description}>Email: cshukla [at] ucsd [dot] edu</p>
        <div className={styles.links}>
          <a href="/charvi-resume.pdf" target="_blank" className={styles.link}>
            Resume
          </a>{" "}
          /
          <a
            href="https://www.linkedin.com/in/charvi-shukla/"
            target="_blank"
            className={styles.link}
          >
            LinkedIn
          </a>{" "}
          /
          <a
            href="https://github.com/charvishukla"
            target="_blank"
            className={styles.link}
          >
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
            <p className={styles.experienceDescription}>
              {" "}
              Designed a deterministic state machine to enable verification and
              E2E testing of negotiation workflow
            </p>
          </div>
        </div>
      </section>

      <section className={styles.research}>
        <h2 className={styles.sectionTitle}>Research</h2>
        <p className={styles.sectionDescription}>
          My research interests lie in medical and autonomous driving
          applications of Computer Vision.
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
            <ul className={styles.experienceDescription}>
              <li>
                Surgical Perception Framework (SuPerPM) -- Worked on improving
                dense matches between point clouds
              </li>
              <li>
                Medical LLM Fine Tuning -- LoRA Fine tuning followed by human
                evaluation
              </li>
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
          </div>
        </div>
      </section>

      <section className={styles.teaching}>
        <h2 className={styles.sectionTitle}>Teaching Experience</h2>

        <div className={styles.teachingRole}>
          <Image src={cse} alt="CSE Logo" className={styles.teachingLogoCSE} />
          <div className={styles.teachingDetails}>
            <div className={styles.teachingRoleTitle}>
              Instructional Assistant
            </div>
            <div className={styles.teachingDepartment}>
              Computer Science and Engineering Department, UCSD
            </div>
            <ul className={styles.teachingCourseList}>
              <li>
                <b>Theory of Computation (CSE 105)</b>, Fall 2024 with Professor
                Mia Minnes
              </li>
              <li>
                <b>Computer Organization and Systems Programming (CSE 30)</b>,
                Spring 2024 with Professor Keith Muller and Professor Paul Cao
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.teachingRole}>
          <Image
            src={ucsd}
            alt="ucsd Logo"
            className={styles.teachingLogoMath}
          />
          <div className={styles.teachingDetails}>
            <div className={styles.teachingRoleTitle}>
              Instructional Assistant
            </div>
            <div className={styles.teachingDepartment}>
              Department of Mathematics, UCSD
            </div>
            <ul className={styles.teachingCourseList}>
              <li>
                <b>Calculus III (MATH 10C)</b>, Fall 2024 with Professor Yosuf
                Habib
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.teachingRole}>
          <Image src={TLC} alt="TLC Logo" className={styles.teachingLogoTLC} />
          <div className={styles.teachingDetails}>
            <div className={styles.teachingRoleTitle}>
              Supplemental Instruction Leader
            </div>
            <div className={styles.teachingDepartment}>
              Academic Achievement Hub at UCSD
            </div>
            <ul className={styles.teachingCourseList}>
              <li>
                {" "}
                <b>Linear Algebra (MATH 18)</b> in Spring 2022, Fall 2022,
                Winter 2023
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
