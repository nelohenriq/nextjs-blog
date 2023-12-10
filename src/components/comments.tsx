import React from "react";

export default function Comments() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <ul>
        <li className="mb-4 bg-slate-300 p-2 text-black">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-2">Jonh Doe</div>
            <div className="text-gray-500">10-December-2023</div>
          </div>
          Wow awesome bro!!!
        </li>
      </ul>
    </div>
  );
}
