import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptopBoy.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer who builds responsive and optimised sites using HTML, CSS, ReactJS, Bootstrap, TailwindCSS.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/database.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems
              and APIs using NodeJS, ExpressJS, MongoDB, MySQL.</p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/machineLearning.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning</h3>
              <p>I have developed machine learning projects using Python.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
