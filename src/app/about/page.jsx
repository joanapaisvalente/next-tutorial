import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit
          nibh, faucibus nec mi vel, lacinia vehicula massa. Curabitur blandit
          arcu lorem, vitae porta ex posuere eget. Pellentesque quis elit
          ultrices dolor gravida eleifend. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
