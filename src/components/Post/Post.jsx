import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="bg-purple-200 p-5 font-bold">
      <p>{post.id}</p>
      <p>{post.title}</p>
      <Link to={`/post/${post.id}`}>
        <button className="p-2 bg-purple-400 rounded-full">show post</button>
      </Link>
    </div>
  );
};

export default Post;
