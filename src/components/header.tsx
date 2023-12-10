import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500  p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-white">
          <h1 className="text-white text-2xl font-bold">Logo</h1>
        </Link>
        <ul className="flex space-x-4">
          <li className="text-white hover:underline">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="text-white hover:underline">
            <Link href="/api/auth/signin">Login</Link>
          </li>
          <li className="text-white">About</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
