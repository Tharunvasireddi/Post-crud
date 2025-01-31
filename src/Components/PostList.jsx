import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await axios.get("http://localhost:5000/posts");
        setPost(data.data);
      } catch (error) {
        console.log("error while fetching data");
      }
    };
    getPost();
  }, [posts]);
  return (
    <div className="grid grid-cols-2 space-y-3">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} views={post.views} />
      ))}
    </div>
  );
};

export default PostList;
