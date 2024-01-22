import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

/*const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong.");
  }

  return res.json();
};*/

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="post image" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/14875250/pexels-photo-14875250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
          {/*post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )*/}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
