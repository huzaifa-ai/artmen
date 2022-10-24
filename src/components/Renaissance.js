import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';

import Tempietto from '../images/renainance/Tempietto.jpg';
import Virgin from '../images/renainance/Virgin.jpg';
import Sistine from '../images/renainance/Sistine.jpg';
import Rock from '../images/renainance/Rock.jpg';
import Supper from '../images/renainance/Supper.jpg';
import Adam from '../images/renainance/Adam.jpg';
import Madonna from '../images/renainance/Madonna.jpg';
import Mona from '../images/renainance/Mona.jpg';
import Harpies from '../images/renainance/Harpies.jpg';
import Athens from '../images/renainance/Athens.jpg';

function Renaissance() {
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
    { id: 1, img: Tempietto, Title: 'Tempietto', author: 'Donato Bramante' },
    {
      id: 2,
      img: Virgin,
      Title: 'The assumption of  the Virgin',
      author: 'Correggio',
    },
    { id: 3, img: Sistine, Title: 'The Sistine Madonna', author: 'Raphael' },
    {
      id: 4,
      img: Rock,
      Title: 'Virgin of the Rocks',
      author: 'Leonardo da Vinci',
    },
    {
      id: 5,
      img: Supper,
      Title: 'The last of Supper',
      author: 'Leonardo da Vinci',
    },
    { id: 6, img: Adam, Title: 'The creation of Adam', author: 'Michelangelo' },
    { id: 7, img: Madonna, Title: 'The alba of Madonna', author: 'Raphael' },
    { id: 8, img: Mona, Title: 'Mona Lisa', author: 'Leonardo da Vinci' },
    {
      id: 9,
      img: Harpies,
      Title: 'Madonna of the Harpies',
      author: 'Andrea del Sarto',
    },
    { id: 10, img: Athens, Title: 'School of the Athens', author: 'Raphael' },
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

export default Renaissance;
