import React from 'react';

export default function Cards({username="rohit sharma",clickBtn="Read more"}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.unsplash.com/photo-1618697371651-b203d4c3bac5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
              tempora ipsum soluta amet corporis accusantium aliquid consectetur
              eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {clickBtn}
          </button>
        </div>
      </div>

    </div>
  );
}