import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const Postcard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/14875250/pexels-photo-14875250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
