import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import nine from '../images/Abstract/1957.jpg';
import Autumn from '../images/Abstract/Autumn.jpg';
import Chief from '../images/Abstract/Chief.jpg';
import Mountains from '../images/Abstract/Mountains.jpg';
import Vir from '../images/Abstract/Vir.jpg';

function Abstract() {
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
      img: nine,
      Title: 'No. 1 (1957)',
      author: 'Clyfford Still',
    },
    {
      id: 2,
      img: Autumn,
      Title: 'Autumn Rhythm (Number 30) (1950) ',
      author: 'Jackson Pollock',
    },
    {
      id: 4,
      img: Chief,
      Title: 'Chief (1950)',
      author: 'Franz Kline',
    },
    {
      id: 5,
      img: Mountains,
      Title: 'Mountains and Sea (1952)',
      author: 'Helen Frankenthaler',
    },
    {
      id: 6,
      img: Vir,
      Title: 'Vir heroicus sublimis (1950-51)',
      author: 'Barnett Newman',
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

export default Abstract;
