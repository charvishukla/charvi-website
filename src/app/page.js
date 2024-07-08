import Image from "next/image";
import logo from "./logo.jpg";
import styles from "./page.module.css";
import SideNav from "./SideNav";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.app}>
      <SideNav />
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h1 className={styles.name}>Charvi Shukla</h1>
          <div className={styles.introduction}>
            <Image src={logo} width={300} height={300} alt="Charvi Shukla" className={styles.profileImage} />
            <div className={styles.aboutContent}>
              <p>
              I am a fourth year undergraduate student at UC San Diego, pursuing a dual
            degree in Mathematics-Computer Science and Cognitive Science with a
            specialization in Machine Learning and Neural Computation. My
            research interests lie in medical and autonomous driving
            applications of Computer Vision. At UCSD, I have worked as an
            instructional assistant for the <a href="https://cse.ucsd.edu">Computer Science and Engineering
            Department</a> (CSE 30), and as a Supplemental Instruction leader for
            the Mathematics department (MATH 18) through the <a href="https://aah.ucsd.edu">Academic Achievement Hub</a>. 
            I also work as an undergraduate student researcher at the <a href="https://www.ucsdarclab.com">Advanced Robotics and Controls Lab</a> at UCSD.
              </p>
              <div className={styles.socialLinks}>
                <a href="https://github.com/charvishukla" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/charvi-shukla/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2>Experience</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>Advanced Robotics and Controls Lab</h3>
              <div className={styles.cardSubsection}>
                <h4>LLM fine-tuning</h4>
                <ul>
                  <li>Processed a large medical-assessments dataset and used LoRA finetuning to fine tune Meta Llama 2 and Google Gemma models with 7 billion parameters</li>
                  <li>Used ROUGE, BERT, and Bleu Scores each to evaluate and compare the model's performance against human evaluators</li>
                  <li>Deployed CUDA based Docker containers to efficiently train models using the PyTorch DataParallel class, leveraging 4 GPUs in parallel</li>
                </ul>
              </div>
              <div className={styles.cardSubsection}>
                <h4>SuPerPM, A Surgical Perception Framework</h4>
                <ul>
                  <li>Fine tuned Lepard, a point cloud matching model for rigid and deformable scenes, over a physically constrained simulation dataset</li>
                  <li>Implemented a custom visualization algorithm using Open3D to visualize 3D point clouds and their correspondences</li>
                </ul>
              </div>
            </div>
            <div className={styles.card}>
              <h3>WiseCounsel.ai</h3>
              <ul>
                <li>Developed core negotiation engine CLI for WiseCounsel's end-to-end deal-making platform, enabling structured bi-directional communication between clients and counterparties</li>
                <li>Enhanced CLI functionality to parse and reconstruct highly structured legal agreements, orchestrating multi-clause negotiations by managing LLM inputs/outputs and agreement lifecycle</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Association of Computing Machinery at UC San Diego</h3>
              <h4>Hack Technical Events Director</h4>
              {/* You can add more details about this role if available */}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <h3>WaveIT</h3>
              <ul>
                <li>Worked in a team of 2 to develop an IoT device for individuals with hearing disabilities</li>
                <li>Trained a LSTM Neural network using PyTorch and MediaPipe with manually collected data to recognize hand gestures and control smart-home devices</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>PantryPal</h3>
              <ul>
                <li>Developed a voice-activated recipe generation application using JavaFX and Gradle, integrating Whisper API for audio input recognition of pantry items and meal preferences</li>
                <li>Engineered a RESTful backend in Java to manage application data flows and API integration with GPT-3.5 to generate tailored recipe suggestions based on user inputs and DALL-E API for image generation</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="resume" className={styles.section}>
          <h2>Resume</h2>
          <a href="/charvi-resume.pdf" download className={styles.downloadButton}>
            Download Resume
          </a>
        </section>
      </main>
    </div>
  );
}