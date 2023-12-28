import MyCounter from '@/components/MyCounter/MyCounter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="h-screen bg-gray-700">
      <h2 className="text-5xl text-center text-sky-300 font-medium p-10">
        This is Home Page
      </h2>
      <MyCounter></MyCounter>
      <div className="flex gap-5 items-center justify-center">
        <Link href="/about">
          <button className="btn bg-lime-500 text-white text-2xl">
            About Page
          </button>
        </Link>
        <Link href="/News/Article">
          <button className="btn bg-teal-600 text-white text-2xl">
            Article
          </button>
        </Link>
        <Link href="/News/Blog/special-blog">
          <button className="btn bg-emerald-600 text-white text-2xl">
            Special Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
