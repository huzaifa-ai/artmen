import React, { useState } from 'react';
import Renaissance from '../components/Renaissance';
import Neoclassicism from '../components/Neoclassicism';
import Mannerism from '../components/Mannerism';
import '../css/gallery.css';
import Romanticism from '../components/Romanticism';

function PaintingStyles() {
  return (
    <div className="painting pt-20 ">
      <div className="bg-white h-screen">
        <h1 className="text-4xl text-center mb-12 tracking-widest painting-heading">
          Painting Styles
        </h1>
        {/* Resnaissance art */}
        <div className="px-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">RENAISSANCE ART</h1>
            <p className="text-sm md:text-lg">
              "Painting is poetry that is seen rather than felt, and poetry is
              painting that is felt rather than seeing. Perspective is the rein
              and rubber of painting"
            </p>
          </div>

          <div className="mt-10">
            <Renaissance />
          </div>
        </div>
        {/* NeoClassicism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">RENAISSANCE ART</h1>
            <p className="text-sm md:text-lg">
              "The same truth that guides the pen of the historian should govern
              the pencil of the artist. The artist must be a philosopher and
              have no other guide except the torch of reason. The function of
              art is to make virtue adorable and vice repugnant"
            </p>
          </div>
          <div className="mt-10">
            <Neoclassicism />
          </div>
        </div>
        {/* Mannerism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">MANNERISM ART</h1>
            <p className="text-sm md:text-lg">
              "Painting, in fact, or nothing else much than a tree, a man, or
              any other object, reflected in the water. Painters use the same
              license as poets and madmen.”
            </p>
          </div>
          <div className="mt-10">
            <Mannerism />
          </div>
        </div>
        {/* Romanticism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">Romanticism ART</h1>
            <p className="text-sm md:text-lg">
              "The source of genius is imagination alone, the refinement of the
              senses that sees what others do not see, or sees them differently.
              The things one experience alone with oneself are very much
              stronger and purer. With the brush the painter merely tint, while
              the imagination alone produces color. Amid those senses of
              solitude… the mind is cast into the contemplation of eternal
              things. The man who never in his mind and thoughts traveled to
              heaven is no artist.” ”
            </p>
          </div>
          <div className="mt-10">
            <Romanticism />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaintingStyles;
