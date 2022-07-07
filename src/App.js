import { Helmet } from "react-helmet";
import styles from "./App.module.css";
import Layout from "./Layout";
// import PostItem from "./PostItem";
// import WorkItem from "./WorkItem";

const App = (props) =>{
  return (
    <Layout className={styles.container}>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <body className={styles.body}>
        <div className={styles.top}>
          <img width={386} height={386} alt="top" src="/work1.png" />
          <div className={styles.name}>
            やまだ
          </div>
        </div>
      </body>
    </Layout>
  );
};

export default App;
