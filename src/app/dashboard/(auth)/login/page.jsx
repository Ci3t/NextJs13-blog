"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const session = useSession();

  const [err, setErr] = useState(false);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
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
        <button className={styles.button}>Login</button>
      </form>
      {err && "Something went wrong!"}
      <Link href={"/dashboard/register"}> Dont have an account? Register </Link>
      <button className={styles.google} onClick={() => signIn("google")}>
        {" "}
        Sign with Google
      </button>
    </div>
  );
};

export default Login;
