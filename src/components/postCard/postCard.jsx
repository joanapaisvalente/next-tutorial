import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const Postcard = () => {
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
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
          perferendis error, est exercitationem totam illum non ab illo suscipit
          eius. Assumenda esse commodi aliquid exercitationem, quidem architecto
          eius explicabo voluptatum?
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Postcard;
