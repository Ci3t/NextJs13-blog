import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link className={styles.container} href={"/blog/testId"}>
        <div className={styles.imgC}>
          <Image
            src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Teest</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
