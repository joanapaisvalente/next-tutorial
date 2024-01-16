import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/19605765/pexels-photo-19605765/free-photo-of-horizon-over-the-ocean-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
