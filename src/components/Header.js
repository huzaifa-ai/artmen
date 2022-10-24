import React from 'react';
import '../css/Header.css';
import logo from '../images/logo.png';
import moon from '../images/moon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    /* Top Header section ------------------------------------------------------------ */
    <div className="wrapper pt-8 sm:p-6">
      {/* <div className="flex justify-between text-white pb-4">
        <div className="w-64">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>Home</li>
            <li>Painting</li>
            <li>Price</li>
          </ul>
        </div>
      </div>
      <hr /> */}
      {/* Below Section */}

      <div className="flex text-white items-center space-x-52">
        <div className="pt-48 flex space-x-6 items-center w-1/2 md:space-x-16">
          <div className="flex flex-col items-center">
            <div className="border-l-2 border-white h-36 "></div>
            <p className="rotate-90 py-10 text-md">Hello</p>
            <div className="border-l-2 border-white h-36 "></div>
          </div>
          <div className="">
            <h1 className="text-7xl pb-10 md:text-8xl">ARTMEN</h1>
            <button className="border py-4 px-8">See Gallery</button>
          </div>
        </div>
        <div class="circle">
          <img src={moon} alt="" />
        </div>
      </div>
      {/* Buttons section */}
      <div className=" mt-20 flex flex-col py-36 text-center px-2 text-white lg:flex-row lg:justify-center">
        <Link to="paintingstyles">
          <div className="text-xl tracking-widest uppercase border py-8 lg:px-16 xl:px-48 hover:bg-gray-800 cursor-pointer ease-in-out duration-300 ">
            PAINTING STYLES
          </div>
        </Link>
        <Link to="venturist">
          <div className="text-xl tracking-widest uppercase border py-8 lg:px-16 xl:px-48 hover:bg-gray-800 cursor-pointer ease-in-out duration-300">
            BE A SOCIAL VENTURIST
          </div>
        </Link>
        <Link to="gallery">
          <div className="text-xl tracking-widest uppercase border py-8 lg:px-16 xl:px-48 hover:bg-gray-800 cursor-pointer ease-in-out duration-300">
            GALLERY
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
