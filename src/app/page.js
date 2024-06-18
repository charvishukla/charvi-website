import logo from "./logo.png";
import SideNav from "./SideNav";
import styles from "./page.module.css";
import Image from "next/image";
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
            I am an undergraduate student at UC San Diego, pursuing a dual
            degree in Mathematics-Computer Science and Cognitive Science with a
            specialization in Machine Learning and Neural Computation. My
            research interests lie in medical and autonomous driving
            applications of Computer Vision. At UCSD, I have worked as an
            instructional assistant for the Computer Science and Engineering
            Department (CSE 30), and as a Supplemental Instruction leader for
            the Mathematics department (MATH 18). I also work as a research
            student at the Advanced Robotics and Controls Lab at UCSD.
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
            <ul>
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
            <ul>
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
            <ul>
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

          <div className="Sub-section-item">
            <h3>Tutoring and Supplemental Instruction</h3>
            <h4>Academic Achievement Hub, MATH 18: Linear Algebra</h4>
            <ul>
              <li>Collaborated with Teaching Assistants to conduct 5 weekly discussion sessions for 20-30 undergraduates each, reinforcing Linear Algebra lecture content among students</li>
              <li>Orchestrated supplemental instruction in groups of 10 students, engaging students in problem-solving and doubt clarifications</li>
            </ul>
            <h4>Computer Science and Engineering, CSE 30: Computer Organization and Systems Programming</h4>
            <ul>
              <li>Conducted 4.5 hours of weekly tutoring for students, debugging C and ARM Assembly code and re-iterating core class concepts</li>
            </ul>
          </div>
        </div>

        <div className="Projects">
          <h2>Projects</h2>

          <div className="Sub-section-item">
            <h3>WaveIT</h3>
            <ul>
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
      </div>
    </div>
  );
}
