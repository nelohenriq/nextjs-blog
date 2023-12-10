"use client";
import React from "react";

/**
 * Handles the submission of a comment.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
const handleSubmitComment = () => {
  console.log("submit comment");
};

/**
 * Renders a form for adding comments.
 *
 * @returns {void}
 */
export default function FormComment() {
  const [comment, setComment] = React.useState<string>("");
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
    //console.log(comment);
  };
  return (
    <div className="mt-4">
      <label
        htmlFor="comment"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Add Comment
      </label>
      <input
        value={comment}
        onChange={handleCommentChange}
        type="text"
        id="comment"
        name="comment"
        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
        placeholder="Write your thoughts here..."
      />
      <button
        //disabled={!data?.user?.email}
        onClick={handleSubmitComment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400"
      >
        Submit Comment
      </button>
    </div>
  );
}
