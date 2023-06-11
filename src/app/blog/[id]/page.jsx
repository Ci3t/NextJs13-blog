import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
            accusantium deserunt esse cum rem, et expedita aspernatur neque
            omnis vel optio! Doloremque beatae illo facilis dicta voluptatem,
            deserunt inventore. Voluptatem.
          </p>
          <div className={styles.author}>
            <Image
              src={
                "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Loren</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ratione
          ducimus, deserunt pariatur repellendus earum perspiciatis assumenda
          numquam delectus porro dolorum ut consectetur expedita aliquam maiores
          inventore officia soluta minima? Quisquam similique velit consequuntur
          consectetur, itaque necessitatibus totam quasi delectus inventore quo
          veritatis numquam modi, deleniti aperiam fugit vitae sapiente ad?
          Mollitia nemo beatae non impedit labore facere maxime quod. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Unde ratione
          ducimus, deserunt pariatur repellendus earum perspiciatis assumenda
          numquam delectus porro dolorum ut consectetur expedita aliquam maiores
          inventore officia soluta minima? Quisquam similique velit consequuntur
          consectetur, itaque necessitatibus totam quasi delectus inventore quo
          veritatis numquam modi, deleniti aperiam fugit vitae sapiente ad?
          Mollitia nemo beatae non impedit labore facere maxime quod.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
