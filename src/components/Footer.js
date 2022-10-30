import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row text-xl py-20 md:px-10 text-center space-y-6 md:space-y-0 items-center">
      <div className="md:w-1/2 w-full">
        <h1 className="text-7xl">ART MEN</h1>
        <p className="my-4">®Artmen, Services, 2020</p>
        <div className="flex justify-around cursor-pointer">
          <Link to="/aboutus">
            <p>About Us</p>
          </Link>
          <Link to="/faqs">
            <p>Considerations</p>
          </Link>
        </div>
        <i class="fa-brands fa-instagram text-4xl text-center mt-6"></i>
      </div>
      <div className=" w-full md:w-1/2 md:px-20">
        <p className="text-md md:text-xl">
          Based in Office 72, 73 and 74 Edgerton Street Bolton City, England.
          Popular worldwide. Connecting The Art World, Members, Artists,
          Galleries and Universities from 40 Countries… and counting.
        </p>
        <div className="flex flex-col mt-8 lg:flex-row lg:space-x-4 lg:justify-center">
          <div>
            <i class="fa-solid fa-phone"></i>
            <p className=" text-gray-700">731-71-29-47 </p>
          </div>
          <div>
            <i class="fa-solid fa-envelope"></i>
            <p className=" text-gray-700">hello@artmen.co </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
