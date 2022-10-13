import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';

import Ancient from '../images/Romanticism/Ancient.jpg';
import Bonaparet from '../images/Romanticism/Bonaparet.jpg';
import Grande from '../images/Romanticism/Grande.jpg';
import Hay from '../images/Romanticism/Hay.jpg';
import Liberty from '../images/Romanticism/Liberty.jpg';
import May from '../images/Romanticism/May.jpg';
import Nightmare from '../images/Romanticism/Nightmare.jpg';
import Oxbow from '../images/Romanticism/Oxbow.jpg';
import Raft from '../images/Romanticism/Raft.jpg';

function Romanticism() {
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
      img: Ancient,
      Title: 'The Ancient of Days from Europe a Prophecy ',
      author: 'William Blake',
    },
    {
      id: 2,
      img: Bonaparet,
      Title: 'Bonaparte Visits the Plague Stricken in Jaffa',
      author: 'Antoine Jean Gros',
    },
    {
      id: 3,
      img: Grande,
      Title: 'La Grande Odalisque',
      author: 'Jean-Auguste-Dominique Ingres',
    },

    { id: 4, img: Hay, Title: 'The Hay Wain', author: 'John Constable' },
    {
      id: 5,
      img: Liberty,
      Title: 'Liberty Leading the People (July 28, 1830)',
      author: 'Eugène Delacroix',
    },
    {
      id: 6,
      img: May,
      Title: 'The Third of May 1808',
      author: 'Francisco Goya',
    },
    { id: 7, img: Nightmare, Title: 'The Nightmare', author: 'Henry Fuseli' },
    {
      id: 8,
      img: Oxbow,
      Title:
        'The Oxbow, View from Mount Holyoke, Northampton, Massachusetts, after a Thunderstorm',
      author: 'Thomas Cole',
    },
    {
      id: 9,
      img: Raft,
      Title: 'The Raft of the Medusa',
      author: 'Théodore Gericault',
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

export default Romanticism;
