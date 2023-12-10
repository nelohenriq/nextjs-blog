import React from "react";
import { posts } from "@/data/posts";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      <p className="text-gray-700 mb-4">This is the blogs page.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <div className="bg-white p-4 rounded-md shadow-md hover:opacity-75">
              <h2 className="text-xl font-bold mb-2 text-black">
                {post.title}
              </h2>
              <p className="text-gray-700">{post.content}</p>
              <p className="text-gray-500">By {post.username}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
