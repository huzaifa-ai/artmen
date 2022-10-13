import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';

import Allegory from '../images/Mannerism/Allegory.jpg';
import Cana from '../images/Mannerism/Cana.jpg';

import Convex from '../images/Mannerism/Convex.jpg';

import Deposition from '../images/Mannerism/Deposition.jpg';

import Egypt from '../images/Mannerism/Egypt.jpg';

import Eleanor from '../images/Mannerism/Eleanor.jpg';

import Madonna from '../images/Mannerism/Madonna.jpg';

import Orgaz from '../images/Mannerism/Orgaz.jpg';

import Toledo from '../images/Mannerism/Toledo.jpg';

function Mannerism() {
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
      img: Allegory,
      Title: 'An Allegory with Venus and Cupid',
      author: 'Bronzino',
    },
    {
      id: 2,
      img: Cana,
      Title: 'The Wedding Feast at Cana',
      author: 'Paolo Veronese',
    },
    {
      id: 4,
      img: Convex,
      Title: 'Self-Portrait in a Convex Mirror',
      author: 'Parmigianino',
    },
    {
      id: 5,
      img: Deposition,
      Title: 'Deposition from the Cross',
      author: 'Jacopo Da Pontormo',
    },
    {
      id: 6,
      img: Egypt,
      Title: 'The Flight into Egypt',
      author: 'Jacopo Bassano',
    },
    { id: 7, img: Eleanor, Title: 'Eleanor of Toledo', author: 'Bronzino' },
    {
      id: 8,
      img: Madonna,
      Title: 'Madonna with the Long Neck',
      author: 'Parmigianino',
    },

    {
      id: 9,
      img: Toledo,
      Title: 'View of Toledo',
      author: 'El Greco',
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
          <img src={tempImg} alt="" className="drop-shadow-sm p-4" />
        </div>
        <div>
          <h1 className="text-white md:text-3xl">{title}</h1>
          <h2 className="text-white text-sm mt-2 trackin-wider">
            Author: {''} {author}
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

export default Mannerism;
