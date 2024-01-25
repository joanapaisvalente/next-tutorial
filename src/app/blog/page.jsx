import Postcard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong.");
  }

  return res.json();
};

export const metadata = {
  title: "Blog Page",
  description: "Blog description",
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Postcard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
