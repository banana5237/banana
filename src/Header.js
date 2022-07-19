import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <ul className={styles.nav}>
        <h1 className={styles.siteName}>
        <a href="/">My Site</a>
        </h1>
        <li className={styles.navItem}>
          <a href="/">About</a>
        </li>
        <li className={styles.navItem}>
          <a href="/">Works</a>
        </li>
      </ul>
      <div className={styles.social}>
        <a href="https://github.com/banana5237" target="_blank" rel="noreferrer">
          <img alt="GitHub" src="/GitHub.png" />
        </a>
      </div>
    </header>
  );
};

export default Header;
