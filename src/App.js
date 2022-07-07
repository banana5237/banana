import { Helmet } from "react-helmet";
import styles from "./App.module.css";
import Layout from "./Layout";
import PostItem from "./PostItem";
import WorkItem from "./WorkItem";

const App = (props) =>{
  return (
    <Layout>
      <Helmet>
        <title>My Site</title>
        <meta name="description" content="My first react website" />
      </Helmet>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        わい，ぽたく
      </p>
      <h2 className={styles.heading}>Posts</h2>
      {props.posts.map((post) => {
        return <PostItem post={post} key={post.title} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.workItems}>
      {props.works.map((work) => {
          return <WorkItem work={work} key={work.name} />;
        })}
      </div>
    </Layout>
  );
};

export default App;
