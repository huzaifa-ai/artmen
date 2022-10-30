import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png';
import moon from '../images/moon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    /* Top Header section ------------------------------------------------------------ */
    <div className="wrapper pt-8 sm:p-6">
      <div className="px-6">
        <ul className="text-white flex justify-center text-xs space-x-2 items-center  md:space-x-24 md:justify-end md:text-md py-6">
          <Link to="/paintingstyles">
            <li className="hover:text-gray-300 tracking-widest">
              PAINTING STYLES
            </li>
          </Link>
          <Link to="venturist">
            <li className="hover:text-gray-300 tracking-widest">
              BE A SOCIAL VENTURIST
            </li>
          </Link>
          <Link to="gallery">
            <li className="hover:text-gray-300 tracking-widest">GALLERY</li>
          </Link>
        </ul>
      </div>
      <div className="flex text-white items-center space-x-52 pb-56">
        <div className="pt-48 flex space-x-6 items-center w-1/2 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-white h-36 "></div>
            <p className="rotate-90 py-10 text-md">Hello</p>
            <div className="border-l-2 border-white h-36 "></div>
          </div>
          <div className="">
            <h1 className="text-7xl pb-6 md:text-8xl -tracking-tighter artmen">
              ARTMEN
            </h1>
            <p className="pb-4 tracking-widest">For Minds Who Innovate...</p>
            <button className="border py-4 px-8">See Gallery</button>
          </div>
        </div>
        <div class="circle">
          <img src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
