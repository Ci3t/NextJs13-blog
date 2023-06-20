"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  const router = useRouter();

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher,
  );

  console.log(data);

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }
  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      }),
        mutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading
          ? "Loading...."
          : data.map((post) => (
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image width={200} height={100} src={post.img} alt="" />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  onClick={() => {
                    handleDelete(post._id);
                  }}
                  className={styles.delete}
                >
                  X
                </span>
              </div>
            ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.new}>
        <h1>Add New Post</h1>
        <input type="text" className={styles.input} placeholder="Title" />
        <input type="text" className={styles.input} placeholder="Desc" />
        <input type="text" className={styles.input} placeholder="Image" />
        <textarea
          cols={"30"}
          rows={"10"}
          className={styles.textArea}
          placeholder="Content"
        />
        <button className={styles.button}>
          {isLoading ? "Posting" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
