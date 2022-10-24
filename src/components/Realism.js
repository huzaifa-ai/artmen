import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Song from '../images/Realism/Song.jpg';
import Barge from '../images/Realism/Barge.jpg';
import Burial from '../images/Realism/Burial.jpg';
import Gleanery from '../images/Realism/Gleanery.jpg';
import Gross from '../images/Realism/Gross.jpg';
import Le from '../images/Realism/Le.jpg';
import Olympia from '../images/Realism/Olympia.jpg';
import Rue from '../images/Realism/Rue.jpg';
import Stone from '../images/Realism/Stone.jpg';
import Symphony from '../images/Realism/Symphony.jpg';

function Realism() {
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
      img: Song,
      Title: 'Song of the Lark',
      author: 'Jules Breton',
    },
    {
      id: 2,
      img: Barge,
      Title: 'Barge Haulers on the Volga',
      author: 'Ilya Repin',
    },
    {
      id: 3,
      img: Burial,
      Title: 'A Burial at Ornans',
      author: 'Gustave Courbet',
    },
    {
      id: 4,
      img: Gleanery,
      Title: 'The Gleaners',
      author: 'Jean-François Millet',
    },
    {
      id: 5,
      img: Gross,
      Title: 'The Gross Clinic',
      author: 'Thomas Eakins',
    },
    { id: 6, img: Olympia, Title: 'Olympia', author: 'Édouard Manet' },
    {
      id: 7,
      img: Rue,
      Title: 'Rue Transnonain, le 15 Avril 1834',
      author: 'Honoré Daumier',
    },
    {
      id: 8,
      img: Stone,
      Title: 'The Stone Breakers',
      author: 'Gustave Courbet',
    },
    {
      id: 9,
      img: Symphony,
      Title: 'Symphony in White',
      author: 'James Whistler',
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

export default Realism;
