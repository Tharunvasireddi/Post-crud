import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import toast from "react-hot-toast";
import EditPostModal from "./EditPostModal";

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
  const deletePost = async (id)=>{
    try {
      const response = await axios.delete(`http://localhost:5000/posts/${id}`);
      setPost(posts.filter((post)=>id!==post.id));
      toast.success("post deleted successfully");
    } catch (error) {
      
    }
  }
  const[editPost,setEditpost] = useState({});
  const[isModalOpen,setIsMOdalOpen] = useState(false);
  const handleEditPost = (id)=>{
    const post = posts.find((post)=>post.id === id);
    setEditpost(post);
    setIsMOdalOpen(true);
  }
  const upDatePost = (updatedPost)=>{
     setPost([...posts,updatedPost])
    setIsMOdalOpen(false);
    }
  return (
    <div className="grid grid-cols-2 space-y-3">
      {posts.map((post, index) => (
        <Post key={index} title={post.title} views={post.views} onDelete={()=>deletePost(post.id)}  onEdit={()=>handleEditPost(post.id)} />
      ))}
      <EditPostModal isOpen={isModalOpen} post={editPost} onClose={()=>setIsMOdalOpen(flase)} onUpdate={upDatePost}/>
    </div>
  );
};

export default PostList;
