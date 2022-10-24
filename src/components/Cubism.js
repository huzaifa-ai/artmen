import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Conquest from '../images/Cubism/Conquest.jpg';
import Houses from '../images/Cubism/Houses.jpg';
import Les from '../images/Cubism/Les.jpg';
import Rue from '../images/Cubism/Rue.jpg';
import Tea from '../images/Cubism/Tea.jpg';
import Violen from '../images/Cubism/Violen.jpg';

function Cubism() {
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
      img: Conquest,
      Title: 'Conquest of the Air',
      author: 'Roger de la Fresnaye',
    },
    {
      id: 2,
      img: Houses,
      Title: 'Houses at L Estaque',
      author: 'Georges Braque',
    },
    {
      id: 4,
      img: Les,
      Title: 'Les Demoiselles d Avignon',
      author: 'Pablo Picasso',
    },
    {
      id: 5,
      img: Violen,
      Title: 'Violin and Palette',
      author: 'Georges Braque',
    },
    {
      id: 6,
      img: Tea,
      Title: 'Tea Time',
      author: 'Jean Metzinger',
    },
    {
      id: 7,
      img: Rue,
      Title: 'Still Life with Open Window, Rue Ravignan',
      author: 'Juan Gris',
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

export default Cubism;
