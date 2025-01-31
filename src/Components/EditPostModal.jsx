import React, { useEffect, useState } from "react";
import axios from "axios";

const EditPostModal = ({ isOpen, post, onClose, onUpdate }) => {
    console.log(post);
    
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);
  useEffect(() => {
    setTitle(post.title);
    setViews(post.views);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const upDatesPost = { ...post, title, views };
    const response = await axios.put(
      `http://localhost:5000/posts/${post.id}`,
      upDatesPost
    );
    onUpdate(response.data);
    onClose();
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
        <div className="p-4 rounded-lg shadow-lg">
          <h1 className="font-semibold text-yellow-500">EDIT POST</h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="text-white text-center space-y-2 "
          >
            <input
              type="text"
              className="border rounded-lg px-4 py-2 outline-none bg-gray-400 text-gray-900"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              value={views}
              placeholder="enter the views"
              onChange={(e) => setViews(Number(e.target.value))}
              className="border rounded-lg px-4 py-2 outline-none bg-gray-400 text-gray-900"
            />
            <div className="flex space-x-2 ">
              <button
                type="submit"
                className="bg-orange-500 w-full px-4 py-2 rounded-sm text-center"
              >
                update
              </button>
              <button
                className="bg-red-500 w-full px-4 py-2 rounded-sm text-center"
                onClick={onClose}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPostModal;
