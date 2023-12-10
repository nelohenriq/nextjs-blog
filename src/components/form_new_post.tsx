"use client";
import React, { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { FormData } from "@/types/blog";

const inputClass =
  " w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";

/**
 * A description of the entire function.
 *
 * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event object containing information about the event.
 * @return {void} This function does not return anything.
 */
export const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  /**
   * Handles the change event for an input or textarea element.
   *
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event - The event object containing information about the event.
   * @return {void} This function does not return anything.
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  /**
   * Handles the form submission event.
   *
   * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
   * @return {void} No return value.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form className=" max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter the title"
          className={inputClass}
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          minRows={5}
          className={inputClass}
          name="content"
          placeholder="Enter the content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
      >
        Submit
      </button>
    </form>
  );
};
