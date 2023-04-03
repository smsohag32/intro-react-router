import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl text-center">Total post : {posts.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
