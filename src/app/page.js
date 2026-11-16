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
      <nav className={styles.sectionNav} aria-label="Page sections">
        <a href="#experience" className={styles.sectionNavLink}>
          Industry Experience
        </a>
        <a href="#research" className={styles.sectionNavLink}>
          Research
        </a>
        <a href="#projects" className={styles.sectionNavLink}>
          Projects
        </a>
        <a href="#teaching" className={styles.sectionNavLink}>
          Teaching
        </a>
      </nav>
      <header className={styles.header}>
        <h1 className={styles.name}>Charvi Shukla</h1>
        <p className={styles.description}>
          👋🏽 Hi! I&apos;m an M.S. student in Computer Science at UC San Diego,
          specializing in Robotics. I work in the{" "}
          <a href="https://www.cogrob.org" target="_blank" className={styles.inlineLink}>
            Cognitive Robotics Lab
          </a>
          , where my thesis is advised by{" "}
          <a href="https://hichristensen.com" target="_blank" className={styles.inlineLink}>
            Professor Henrik I. Christensen
          </a>
          . I am interested in studying the intersection of machine learning and robotics, focusing on how
          large language models can make human-robot interaction more natural
          and useful.
        </p>
        <p className={styles.description}>
          Before that, I earned B.S. degrees in Mathematics-Computer Science and
          in Cognitive Science (specialization in Machine Learning and Neural
          Computation) at UC San Diego.
        </p>
        <p className={styles.description}>Email: cshukla [at] ucsd [dot] edu</p>
        <div className={styles.links}>
          <a href="/charvi_resume.pdf" target="_blank" className={styles.link}>
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


      <section id="experience" className={styles.experience}>
        <h2 className={styles.sectionTitle}>Industry Experience</h2>

      
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
              Brain Corporation, Applied Machine Learning Team
            </div>
            <div className={styles.experienceDuration}>
              {" "}
              June 2026 - September 2026
            </div>
            <a
              href="/posters/brain-corp-2026-poster.pdf"
              target="_blank"
              className={styles.projectLink}
            >
              Poster
            </a>
            <p className={styles.experienceDescription}>
              Built Otto, an agentic AI system that monitors the robots&apos;
              computer vision and insights pipeline for anomalies across 10+
              BigQuery tables and debugs them with tool-calling sub-agents that
              query SQL, inspect code, and run shell commands. Deployed on GCP
              Cloud Run with Pulumi infrastructure-as-code.
            </p>
          </div>
        </div>


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
            <div className={styles.experienceCompany}>Apple, Core OS Team</div>
            <div className={styles.experienceDuration}>
              February 2025 - June 2025
            </div>
            <a
              href="/posters/apple-2025-poster.pdf"
              target="_blank"
              className={styles.projectLink}
            >
              Poster
            </a>
            <p className={styles.experienceDescription}>
              Built a build-health quality review dashboard used by 80+ Apple
              teams, with a React.js frontend and a FastAPI/MongoDB backend.
              Integrated group-based OIDC authentication and managed Kubernetes
              deployments across staging and production.
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
              Brain Corporation, Sense Tools and Applied Machine Learning Teams
            </div>
            <div className={styles.experienceDuration}>
              {" "}
              June 2025 - September 2025
            </div>
            <a
              href="/posters/brain-corp-2025-poster.pdf"
              target="_blank"
              className={styles.projectLink}
            >
              Poster
            </a>
            <p className={styles.experienceDescription}>
              Experimented with retail product recognition improvements by LoRA fine-tuning open-source
              vision-language models (+38% accuracy) and speeding up inference
              with vLLM. Designed a multimodal rank-fusion approach that reached
              88% accuracy while running ~13x faster and cheaper than the
              existing method.
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
              Wise Counsel AI, Core Negotiation Engine
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

      <section id="research" className={styles.research}>
        <h2 className={styles.sectionTitle}>Research</h2>
        <p className={styles.sectionDescription}>
        </p>

        <div className={styles.projects}>
          <div className={styles.projectItem}>
            <h3 className={styles.projectTitle}>
              <b> Tourguide Robot </b>
            </h3>
            <a href="/tourguide/index.html" className={styles.projectLink}>
              Project Site
            </a>{" "}
            <p className={styles.projectAuthors}>
              {" "}
              A tour guide robot built from a Reachy Mini head on a ROSbot base,
              with RTAB-Map mapping, AprilTag landmarks, autonomous navigation,
              and conversation.
            </p>
          </div>

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

      <section id="projects" className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.projectCard}>
          <Image
            src="/projects/wave-rover-coverage.jpg"
            alt="Wave Rover coverage path with landmarks"
            width={800}
            height={644}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>Autonomous Navigation on a Wave Rover</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="https://www.youtube.com/playlist?list=PLW1JCQ-gux1SQ1xb1dhEoMmFhvGJXRUco"
                target="_blank"
                className={styles.projectLink}
              >
                Video Playlist
              </a>
            </div>
            <p className={styles.projectAuthors}>
              A five-part series building up autonomy on a small differential
              drive rover with ROS 2, from open-loop control to full area
              coverage.
            </p>
            <ul className={styles.projectList}>
              <li>
                <b>Waypoint navigation:</b> calibrated open-loop
                Turn–Move–Turn controller (
                <a href="https://youtu.be/ygnEGRTPXZE" target="_blank">
                  video
                </a>
                )
              </li>
              <li>
                <b>Closed-loop control:</b> pose correction with natural
                landmarks detected by YOLOv8 (
                <a href="https://youtu.be/7m3iPV7zibM" target="_blank">
                  video 1
                </a>
                ,{" "}
                <a href="https://youtu.be/CjpzIK7HJEg" target="_blank">
                  video 2
                </a>
                )
              </li>
              <li>
                <b>EKF SLAM:</b> jointly estimating robot pose and landmark
                positions on square and octagon trajectories (
                <a href="https://youtu.be/3OvB93B4Qkg" target="_blank">
                  square
                </a>
                ,{" "}
                <a href="https://youtu.be/NDxrtJMPv8c" target="_blank">
                  octagon
                </a>
                )
              </li>
              <li>
                <b>Path planning:</b> A* shortest path on an occupancy grid and
                safe path planning around obstacles (
                <a href="https://youtu.be/tvWBXHm0_tg" target="_blank">
                  shortest
                </a>
                ,{" "}
                <a href="https://youtu.be/2i6tTxR8dfo" target="_blank">
                  safe
                </a>
                )
              </li>
              <li>
                <b>Coverage:</b> state-machine sweep planner with
                landmark-based localization for full area coverage (
                <a href="https://youtu.be/RzFtDciW3bk" target="_blank">
                  video 1
                </a>
                ,{" "}
                <a href="https://youtu.be/coyNmuuWW44" target="_blank">
                  video 2
                </a>
                )
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Image
            src="/projects/vi-slam.jpg"
            alt="Visual-inertial SLAM trajectory and landmarks"
            width={900}
            height={480}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>Visual-Inertial SLAM</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="/projects/visual-inertial-slam.pdf"
                target="_blank"
                className={styles.projectLink}
              >
                Report
              </a>
              <a
                href="https://youtu.be/PSY-kURmLVM"
                target="_blank"
                className={styles.projectLink}
              >
                Video (Dataset 00)
              </a>
              <a
                href="https://youtu.be/-57VRfxNehM"
                target="_blank"
                className={styles.projectLink}
              >
                Video (Dataset 01)
              </a>
            </div>
            <p className={styles.projectAuthors}>
              EKF-based visual-inertial SLAM on Clearpath Jackal data from
              MIT&apos;s campus. Fuses IMU kinematics on SE(3) with stereo
              camera features to jointly estimate the robot trajectory and 3D
              landmark map, using sparse covariance slicing to keep updates
              fast. Also implemented Shi-Tomasi + Lucas-Kanade feature tracking.
            </p>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Image
            src="/projects/lidar-slam-texture.jpg"
            alt="LiDAR SLAM floor texture map"
            width={700}
            height={686}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>LiDAR-Based SLAM</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="/projects/lidar-slam.pdf"
                target="_blank"
                className={styles.projectLink}
              >
                Report
              </a>
              <a
                href="https://youtu.be/7fcoYnrF8NI"
                target="_blank"
                className={styles.projectLink}
              >
                PGO Video (Dataset 20)
              </a>
              <a
                href="https://youtu.be/BcJX1bN4RRA"
                target="_blank"
                className={styles.projectLink}
              >
                PGO Video (Dataset 21)
              </a>
            </div>
            <p className={styles.projectAuthors}>
              SLAM for a differential-drive robot using wheel encoders, an IMU,
              a 2D LiDAR and an RGB-D camera. Dead-reckoned odometry is refined
              with ICP scan matching, then loop closures are enforced with
              GTSAM pose graph optimization to produce an occupancy grid and a
              floor texture map.
            </p>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Image
            src="/projects/imu-panorama.jpg"
            alt="Panorama stitched from estimated orientations"
            width={900}
            height={514}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>IMU Orientation Estimation &amp; Panorama Stitching</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="/projects/imu-orientation-panorama.pdf"
                target="_blank"
                className={styles.projectLink}
              >
                Report
              </a>
            </div>
            <p className={styles.projectAuthors}>
              Estimated 3D orientation from IMU data by solving a constrained
              optimization over unit quaternions with projected gradient
              descent (PyTorch autograd), validated against VICON ground truth.
              The estimates were then used to stitch camera images into
              panoramas via equirectangular projection.
            </p>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Image
            src="/projects/parallel-computing.svg"
            alt="Strong scaling chart: MPI speedup versus number of processes"
            width={700}
            height={480}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>Parallel Computation: Fast GEMM &amp; Distributed Stencils</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="/parallel-computing/index.html"
                className={styles.projectLink}
              >
                Results Page
              </a>
            </div>
            <p className={styles.projectAuthors}>
              Performance engineering at three levels of parallelism. A
              cache-blocked ARM SVE matrix multiply reaching 23.1 GFLOP/s
              (faster than OpenBLAS), a tiled CUDA kernel reaching 3.3 TFLOP/s
              on an NVIDIA T4 (~63× over naive), and an MPI wave-equation
              solver with overlapped ghost-cell exchange that scales to a 273×
              speedup on 384 cores of SDSC Expanse.
            </p>
          </div>
        </div>

        <div className={styles.projectCard}>
          <Image
            src="/projects/pupperdoro.jpg"
            alt="Pupperdoro robot built on a MiniPupper 2.0 with an OAK-D camera"
            width={700}
            height={507}
            className={styles.projectImage}
          />
          <div className={styles.projectDetails}>
            <h3 className={styles.projectTitle}>
              <b>Pupperdoro: An Embodied Study Companion Robot</b>
            </h3>
            <div className={styles.projectLinks}>
              <a
                href="https://youtu.be/ek_93tSEXY8"
                target="_blank"
                className={styles.projectLink}
              >
                Presentation
              </a>
              <a
                href="https://youtu.be/ZejkqTIedLM"
                target="_blank"
                className={styles.projectLink}
              >
                Demo Video
              </a>
            </div>
            <p className={styles.projectAuthors}>
              A Pomodoro timer robot on a MiniPupper 2.0 that keeps students
              focused by physically separating them from their phones. Using an
              OAK-D camera, AprilTags, and touch sensors, it detects when the
              user is distracted and responds with facial and audio emotes,
              driven by a ROS 2 state machine. I built the &quot;device
              jail&quot; and the emote audio. We ran a user study comparing it
              with a digital Pomodoro timer.
            </p>
          </div>
        </div>
      </section>

      <section id="teaching" className={styles.teaching}>
        <h2 className={styles.sectionTitle}>Teaching</h2>

        <div className={styles.teachingRole}>
          <Image
            src={ucsd}
            alt="ucsd Logo"
            className={styles.teachingLogoMath}
          />
          <div className={styles.teachingDetails}>
            <div className={styles.teachingRoleTitle}>
              Graduate Teaching Assistant
            </div>
            <div className={styles.teachingDepartment}>
              Computer Science and Engineering , UCSD
            </div>
            <ul className={styles.teachingCourseList}>
              <li>
                <b>Introduction to Robotics (CSE 276A)</b>, Fall 2026 with Professor Henrik Christensen
              </li>
            </ul>


            <div className={styles.teachingDepartment}>
              Cognitive Science Department , UCSD
            </div>
            <ul className={styles.teachingCourseList}>
              <li>
                <b>Prototyping (DSGN 100)</b>, Spring 2026 with Professor Scott Klemmer
              </li>
            </ul>
          </div>
        </div>

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

      <footer className={styles.footer}>
        Last updated:{" "}
        {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "America/Los_Angeles",
        })}
      </footer>
    </div>
  );
}
