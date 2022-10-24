import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Der from '../images/Expressionism/Der.jpg';
import Large from '../images/Expressionism/Large.jpg';
import Mad from '../images/Expressionism/Mad.jpg';
import Potrait from '../images/Expressionism/Potrait.jpg';
import Scream from '../images/Expressionism/Scream.jpg';
import Sitting from '../images/Expressionism/Sitting.jpg';
import Street from '../images/Expressionism/Street.jpg';

function Expressionism() {
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
      img: Der,
      Title: 'Der Blaue Reiter',
      author: 'Wassily Kandinsky',
    },
    {
      id: 2,
      img: Large,
      Title: 'Large Blue Horses',
      author: 'Franz Marc',
    },
    {
      id: 4,
      img: Mad,
      Title: 'Mad Woman',
      author: 'Chaim Soutine',
    },
    {
      id: 5,
      img: Potrait,
      Title: 'Portrait of a Man',
      author: 'Erich Heckel',
    },
    {
      id: 6,
      img: Scream,
      Title: 'The Scream',
      author: 'Edvard Munch',
    },
    {
      id: 7,
      img: Sitting,
      Title: 'Sitting Woman with Legs Drawn Up',
      author: 'Egon Schiele',
    },
    {
      id: 8,
      img: Street,
      Title: 'Street, Berlin',
      author: 'Ernst Ludwig Kirchner',
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

export default Expressionism;
