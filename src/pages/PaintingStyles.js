import React, { useState } from 'react';
import Renaissance from '../components/Renaissance';
import Neoclassicism from '../components/Neoclassicism';
import Mannerism from '../components/Mannerism';
import '../css/gallery.css';
import Romanticism from '../components/Romanticism';
import Realism from '../components/Realism';
import Impressionism from '../components/Impressionism';
import Symbolism from '../components/Symbolism';
import Expressionism from '../components/Expressionism';
import Cubism from '../components/Cubism';
import Constructivism from '../components/Constructivism';
import Futurism from '../components/Futurism';
import Abstract from '../components/Abstract';

function PaintingStyles() {
  return (
    <div className="painting pt-16 ">
      <div className=" ">
        <h1 className="text-7xl text-center mb-12 tracking-widest painting-heading ">
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
            <h1 className=" font-bold text-lg md:text-2xl ">
              NEOCLASSICISM ART
            </h1>
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
        {/* Realism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">Realism ART</h1>
            <p className="text-sm md:text-lg">
              "It is not a question, here, of searching for an ‘absolute’ of
              beauty. The artist is neither painting history or his soul… And it
              is because of this that he should neither be judged as a moralist
              nor as a literary man. He should be judged simply as a painter.
              Painting is the representation of visible forms.”
            </p>
          </div>
          <div className="mt-10">
            <Realism />
          </div>
        </div>
        {/* Impressionism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">
              Impressionism ART
            </h1>
            <p className="text-sm md:text-lg">
              "It is not a question, here, of searching for an ‘absolute’ of
              beauty. The artist is neither painting history or his soul… And it
              is because of this that he should neither be judged as a moralist
              nor as a literary man. He should be judged simply as a painter.
              Painting is the representation of visible forms.”
            </p>
          </div>
          <div className="mt-10">
            <Impressionism />
          </div>
        </div>
        {/* Symbolism art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">Symbolism ART</h1>
            <p className="text-sm md:text-lg">
              "In this art, scenes from nature, human activities, and all other
              real-world phenomenon will not be described for their own sake;
              here, perceptible surfaces created to represent their esoteric
              affinities with the primordial ideals. The logic of the visible
              world at the service of the invisible.”
            </p>
          </div>
          <div className="mt-10">
            <Symbolism />
          </div>
        </div>
        {/* Expressionism  art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">
              Expressionism ART
            </h1>
            <p className="text-sm md:text-lg">
              "Art is nothing but the expression of our dream; the more we
              surrender to it the more get to the inner truth of things, our
              dreamlife, the truth life that scorns questions and doesn’t see
              them. True dreams and visions should be as visible to the artist
              as phenomenon of the objective.”
            </p>
          </div>
          <div className="mt-10">
            <Expressionism />
          </div>
        </div>
        {/* Cubism  art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">Cubism ART</h1>
            <p className="text-sm md:text-lg">
              "Cubism was an attack on the perspective that had been known and
              used for 500 years. It was the first big, big change. It confused
              people: they said, “things don't look like that!” Cubism is like
              standing at a certain point on a mountain and looking around. If
              you go higher, things will look different; if you go lower, again
              they will look different. T is a point of view”
            </p>
          </div>
          <div className="mt-10">
            <Cubism />
          </div>
        </div>
        {/* Constructivism  art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">
              Constructivism ART
            </h1>
            <p className="text-sm md:text-lg">
              "Art must not be concentrated in dead shrines called museums. It
              must be spread everywhere - on the streets, in the trams,
              factories, workshops, and in the worker's home”
            </p>
          </div>
          <div className="mt-10">
            <Constructivism />
          </div>
        </div>
        {/* Futurism  art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">Futurism ART</h1>
            <p className="text-sm md:text-lg">
              "The gesture which we would reproduce on canvas shall no longer be
              a fixed moment in universal dynamism. It shall be the dynamic
              sensation itself. Indeed, all things move, all things run, all
              things are rapidly changing… We would at any price re-enter into
              life”
            </p>
          </div>
          <div className="mt-10">
            <Futurism />
          </div>
        </div>
        {/* Abstract  art */}
        <div className="px-12 mt-12">
          <div className="bg-gray-900 tracking-widest text-gray-200 p-6 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-20 ">
            <h1 className=" font-bold text-lg md:text-2xl ">
              Abstract Expressionism ART
            </h1>
            <p className="text-sm md:text-lg">
              "Every so often, a painter has to destroy painting. Cezanne did
              it, Picasso did it with Cubism. Then Pollock did it. He busted our
              idea of a picture all to hell. To us, art is an adventure int an
              unknown world of the imaginations, which is fancy-free and
              violently opposed to common sense”
            </p>
          </div>
          <div className="mt-10">
            <Abstract />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaintingStyles;
