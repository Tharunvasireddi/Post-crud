import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      try {
        const response = axios.post("http://localhost:5000/posts", {
          id: Date.now(),
          title,
          views,
        });
        toast.success("sucessfully added post");
      } catch (error) {
        toast.error("unable to add post");
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-md shadow-lg p-2 bg-red-300 space-y-2"
    >
      <input
        type="text"
        value={title}
        placeholder="enter your title"
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg px-4 py-2 outline-none bg-gray-400 text-gray-900"
      />
      <input
        type="number"
        value={views}
        placeholder="enter the views"
        onChange={(e) => setViews(Number(e.target.value))}
        className="border rounded-lg px-4 py-2 outline-none bg-gray-400 text-gray-900"
      />
      <button
        type="submit"
        className="bg-green-500 w-full px-4 py-2 rounded-sm text-center"
      >
        Submit
      </button>
      <Toaster/>
    </form>
  );
};

export default AddPost;
