import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Website Design Products</h1>
        <p className={styles.desc}>Turn your Idea's to Reality With Us</p>
        <Button url="/portfolio" text={'More Info'}/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="home page image" className={styles.img} />
      </div>
    </div>
  );
}
