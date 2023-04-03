import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const postsDetail = useLoaderData();
  //   console.log(postsDetail);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="mt-14 text-center">
      <h1 className="font-bold text-3xl my-5">About this post </h1>
      <div className="p-10 bg-purple-100 font-semibold md:w-3/6 mx-auto text-center">
        <p>{postsDetail.title}</p>
        <p>{postsDetail.body}</p>
        <button onClick={handleBack} className="p-2 bg-purple-400 mt-5">
          Go back
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
