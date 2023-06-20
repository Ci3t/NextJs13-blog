import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, url, onClick }) => {
  return (
    <Link href={url}>
      <button onClick={onClick} className={styles.container}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
