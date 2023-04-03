import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handlePost = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="bg-purple-200 p-5 font-bold l leading-8">
      <p className="  bg-purple-900 inline-block text-white p-1 rounded-full px-2">
        <small className="text-right">{post.id}</small>
      </p>
      <p>{post.title}</p>
      {/* dynamic route */}
      <button
        onClick={handlePost}
        className="p-2 bg-purple-600 rounded-sm text-white"
      >
        Show Post
      </button>
    </div>
  );
};

export default Post;
