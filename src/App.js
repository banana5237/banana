import { Helmet } from "react-helmet";
import styles from "./App.module.css";
import Layout from "./Layout";

const App = (props) =>{
  return (
    <Layout className={styles.container}>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <body className={styles.body}>
        <div className={styles.top}>
          <img alt="top" src="/rinne.png" />
        </div>
        <h1 className={styles.about_title}>About Me</h1>
        <div className={styles.about}>
          <div className={styles.about_image}>
          <img alt="about" src="/work1.png" />
          </div>
          <div className={styles.about_me}>
          <div className={styles.about_name}>
            やまだ
          </div>
          <div className={styles.about_honbun}>
            推しのいろんな姿が見たくて<br />
            絵を描き始めたアクティブなヲタク<br />
            筋肉がすき<br />
          </div>
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default App;
