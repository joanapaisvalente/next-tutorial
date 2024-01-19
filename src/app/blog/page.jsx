import Postcard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <Postcard />
      <Postcard />
      <Postcard />
      <Postcard />
    </div>
  );
};

export default BlogPage;
