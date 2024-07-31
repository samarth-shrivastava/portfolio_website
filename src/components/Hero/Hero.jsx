import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Samarth</h1>
        <p className={styles.description}>A full-stack developer dedicated to crafting seamless and innovative digital experiences. Explore my projects and let’s create something great together!</p>
        <a 
        href="mailto:samarthshrivastav03@gmail.com" className={styles.contactBtn}>Contact Me</a> <br />
        <a 
        href="https://drive.google.com/file/d/1qh-FH5MUApY-nx8ONelw1oFmmEe4P-FY/view?usp=drive_link" className={styles.contactBtn}>My Resume</a>
      </div>

      <img src={getImageUrl("hero/image-modified.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
