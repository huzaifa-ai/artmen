import React from 'react';
import Catching from '../images/Gallery/Catching.jpg';
import Golden from '../images/Gallery/Golden.jpg';
import Rename from '../images/Gallery/Rename.jpg';
import '../css/Images.css';

function Gallery() {
  return (
    <div>
      <h1 className="text-center text-6xl pt-6">Gallery</h1>
      <div className="flex flex-col mt-12 px-6 space-y-20 md:space3-y-40">
        <div className="flex items-center space-y-4 justify-center space-x-8 flex-col md:flex-row md:space-y-0 ">
          <div className="border-dashed border-2 border-gray-600 p-6 images ">
            <img src={Catching} alt="" />
          </div>
          <div>
            <h1 className="text-4xl">Catching The Wind</h1>
            <p className="text-xl">Christine Alfery</p>
            <span className=" text-sm text-center">2000$</span>
          </div>
        </div>
        <div className="flex items-center space-y-4 justify-center space-x-8 flex-col md:flex-row md:space-y-0 ">
          <div className="border-dashed border-2 border-gray-600 p-6 images">
            <img src={Golden} alt="" />
          </div>
          <div>
            <h1 className="text-4xl">Golden Nuggest</h1>
            <p className="text-xl">Christine Alfery</p>
            <span className=" text-sm text-center">1100$</span>
          </div>
        </div>
        <div className="flex items-center space-y-4 justify-center space-x-8 flex-col md:flex-row md:space-y-0 ">
          <div className="border-dashed border-2 border-gray-600 p-6 images">
            <img src={Rename} alt="" />
          </div>
          <div>
            <h1 className="text-4xl">Reaching For The Stars</h1>
            <p className="text-xl">Christine Alfery</p>
            <span className=" text-sm text-center">3000$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
