import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Contact",
  description: "Contact Page",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Enter Name"
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            cols="30"
            rows="10"
            placeholder="message"
          ></textarea>
          <Button url="#" text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
