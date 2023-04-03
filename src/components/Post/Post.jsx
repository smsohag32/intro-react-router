import React from "react";

const Post = ({ post }) => {
  return (
    <div className="bg-purple-200 p-5 font-bold">
      <p>{post.id}</p>
      <p>{post.title}</p>
      <button className="p-2 bg-purple-400 rounded-full">show post</button>
    </div>
  );
};

export default Post;
