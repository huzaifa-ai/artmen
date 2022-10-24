import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';

import Dance from '../images/Symbolism/Dance.jpg';
import Death from '../images/Symbolism/Death.jpg';
import Eye from '../images/Symbolism/Eye.jpg';
import Jupiter from '../images/Symbolism/Jupiter.jpg';
import Life from '../images/Symbolism/Life.jpg';
import Three from '../images/Symbolism/Three.jpg';

function Symbolism() {
  const [modal, Setmodel] = useState(false);
  const [tempImg, setTempImg] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const getImg = (img, title, author) => {
    setTempImg(img);
    Setmodel(true);
    setTitle(title);
    setAuthor(author);
  };

  const [items, setItems] = useState([
    {
      id: 1,
      img: Dance,
      Title: 'The Dance of Life ',
      author: 'James Ensor',
    },
    {
      id: 2,
      img: Death,
      Title: 'Death and the Masks',
      author: 'Antoine Jean Gros',
    },
    {
      id: 3,
      img: Eye,
      Title: 'The Eye Like a Strange Balloon Mounts Toward Infinity',
      author: 'Odilon Redon',
    },

    {
      id: 4,
      img: Jupiter,
      Title: 'Jupiter and Semele',
      author: 'Gustave Moreau',
    },
    {
      id: 5,
      img: Life,
      Title: 'Death and Life',
      author: 'Gustav Klimt',
    },
    {
      id: 6,
      img: Three,
      Title: 'The Three Brides',
      author: 'Jan Toorop',
    },
  ]);

  return (
    <>
      <div
        className={modal ? 'model open' : 'model'}
        onClick={() => {
          setTempImg('');
          Setmodel(false);
        }}
      >
        <div className="bg-white">
          <img src={tempImg} alt="" className="drop-shadow-sm p-4 max-w-sm" />
        </div>
        <div className="max-w-xs">
          <h1 className="text-white md:text-3xl">{title}</h1>
          <h2 className="text-white text-sm mt-2 trackin-wider">
            Artist: {''} {author}
          </h2>
        </div>
      </div>
      <div className="gallery">
        {items.map((item) => (
          <div key={item.id} className="pics bg-black">
            <img
              src={item.img}
              alt=""
              className="p-2"
              style={{ width: '100%' }}
              onClick={() => {
                getImg(item.img, item.Title, item.author);
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Symbolism;
