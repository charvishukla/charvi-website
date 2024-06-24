import logo from "./logo.jpg";
import SideNav from "./SideNav";
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link';

export default function Home(props) {
  return (
    <div className={styles.App}>
      <SideNav name="home" className={styles.nav} />

      <div className={styles.container}>
        <header className={styles.Name}>
          <h1>Charvi Shukla</h1>
        </header>
        <div className={styles.Introduction}>
          <Image src={logo} width={500} height={500} alt="Logo" />

          <p className="about">
            I am a fourth year undergraduate student at UC San Diego, pursuing a dual
            degree in Mathematics-Computer Science and Cognitive Science with a
            specialization in Machine Learning and Neural Computation. My
            research interests lie in medical and autonomous driving
            applications of Computer Vision. At UCSD, I have worked as an
            instructional assistant for the <a href="https://cse.ucsd.edu">Computer Science and Engineering
            Department</a> (CSE 30), and as a Supplemental Instruction leader for
            the Mathematics department (MATH 18) through the <a href="https://aah.ucsd.edu">Academic Achievement Hub</a>. 
            I also work as an undergraduate student researcher at the <a href="https://www.ucsdarclab.com">Advanced Robotics and Controls Lab</a> at UCSD.
            <br />
            <br />
            Email: shukla[DOT]charvie[AT]gmail[DOT]com
            <br />
            <br />
            Github:{" "}
            <a href="https://github.com/charvishukla">
              github.com/charvishukla{" "}
            </a>
            <br />
            <br />
            Linkedin:{" "}
            <a href="https://www.linkedin.com/in/charvi-shukla/">
              linkedin.com/in/charvi-shukla
            </a>
          </p>
        </div>

        <div className="Experience">
          <header className="Sub-section">
            <h2>Experience</h2>
          </header>

          <div className="Sub-section-item">
            <h3>Advanced Robotics and Controls Lab</h3>
            <h4>LLM fine-tuning</h4>
            <ul className="resume-pts">
              <li>
                Processed a large medical-assessments dataset and used LoRA
                finetuning to fine tune Meta Llama 2 and Google Gemma models
                with 7 billion parameters
              </li>
              <li>
                Used ROUGE, BERT, and Bleu Scores each to evaluate and compare
                the model's performance against human evaluators
              </li>
              <li>
                Deployed CUDA based Docker containers to efficiently train
                models using the PyTorch DataParallel class, leveraging 4 GPUs
                in parallel
              </li>
            </ul>
            <h4>SuPerPM, A Surgical Perception Framework</h4>
            <ul className="resume-pts">
              <li>
                Fine tuned Lepard, a point cloud matching model for rigid and
                deformable scenes, over a physically constrained simulation
                dataset
              </li>
              <li>
                Implemented a custom visualization algorithm using Open3D to
                visualize 3D point clouds and their correspondences
              </li>
            </ul>
          </div>

          <div className="Sub-section-item">
            <h3>WiseCounsel.ai</h3>
            <ul className="resume-pts">
              <li>
                Developed core negotiation engine CLI for WiseCounsel's
                end-to-end deal-making platform, enabling structured
                bi-directional communication between clients and counterparties
              </li>
              <li>
                Enhanced CLI functionality to parse and reconstruct highly
                structured legal agreements, orchestrating multi-clause
                negotiations by managing LLM inputs/outputs and agreement
                lifecycle
              </li>
            </ul>
          </div>

        </div>

        <div className="Projects">
          <h2>Projects</h2>

          <div className="Sub-section-item">
            <h3>WaveIT</h3>
            <ul className="resume-pts">
              <li>
                Worked in a team of 2 to develop an IoT device for individuals
                with hearing disabilities
              </li>
              <li>
                Trained a LSTM Neural network using PyTorch and MediaPipe with
                manually collected data to recognize hand gestures and control
                smart-home devices{" "}
              </li>
            </ul>
          </div>
          <div className="Sub-section-item"></div>
        </div>

      <div className="Resume">
        <h2>Resume</h2>
        <Link className="download-link" href="charvi-resume.pdf" locale={false} download="resume-charvi-shukla.pdf">
                Download Resume
            </Link>
      </div>

      </div>
    </div>
  );
}
