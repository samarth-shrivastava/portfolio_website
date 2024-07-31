import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return <footer id='contact' className= {styles.container}>
    <div className= {styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>

    </div>
    <ul className= {styles.links}>
        <li className= {styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:samarthshrivastav03@gmail.com">samarthshrivastav03@gmail.com</a>
        </li>

        <li className= {styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedIn icon" />
            <a href="https://www.linkedin.com/in/samarth-shrivastava-276904251?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZ0S46oRgRce6q%2FbdvmopUA%3D%3D">linkedin.com/samarth-shrivastava</a>
        </li>

        <li className= {styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/samarth-shrivastava">github.com/samarth-shrivastava</a>
        </li>
    </ul>
  </footer>
  
}
