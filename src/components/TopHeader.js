import React from 'react';
import { Link } from 'react-router-dom';

function TopHeader() {
  return (
    <div className="tracking-widest text-xl px-6 py-12 bg-gray-900 text-white cursor-pointer">
      <Link to="/">
        <button className="bg-white text-black rounded-full py-2 px-4 hover:bg-gray-500">
          Home
        </button>
      </Link>
    </div>
  );
}

export default TopHeader;
