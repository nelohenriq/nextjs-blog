import Comments from "@/components/comments";
import FormComment from "@/components/formComment";
import React from "react";

export default function BlogDetail({ params }: any) {
  console.log(params);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Post One</h1>
      <p>Written by: Jonh Doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
        impedit? A ipsa rem illo quaerat suscipit unde deleniti soluta minima.
      </div>
      <Comments />
      <FormComment />
    </div>
  );
}
