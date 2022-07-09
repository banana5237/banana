import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const About = () => {
  return (
    <about className={styles.container}>
      <ul className={styles.nav}>
        <h1 className={styles.navItem}>
          <Link to={`/`}>Home</Link>
        </h1>
        <li className={styles.siteName}>
          <Link to={`/About/`}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to={`/Work/`}>Work</Link>
        </li>
      </ul>
          
        <div className={styles.social}>
          <a href="https://github.com/banana5237" target="_blank" rel="noreferrer">
            <img alt="GitHub" src="/GitHub.png" />
          </a>  
        </div>
    </about>
  );
};

export default About;