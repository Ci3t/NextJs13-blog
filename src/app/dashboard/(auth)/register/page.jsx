"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          className={styles.input}
          required
          placeholder="Username"
        />
        <input
          type="email"
          className={styles.input}
          required
          placeholder="Email"
        />
        <input
          type="password"
          className={styles.input}
          required
          placeholder="Password"
        />
        <button className={styles.button}>Register</button>
      </form>
      {err && "Something went wrong!"}
      <Link href={"/dashboard/login"}> Login with Existing Account</Link>
    </div>
  );
};

export default Register;
