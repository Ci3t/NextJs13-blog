"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // old Way
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
  //       next: { revalidate: 10 },
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setLoading(false);
  //   }

  //   getData();
  // }, []);

  console.log(data);
  return (
    <div className={styles.container}>
      <h1>{data.map((item) => item.name)}</h1>
    </div>
  );
};

export default Dashboard;
