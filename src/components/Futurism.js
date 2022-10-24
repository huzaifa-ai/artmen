import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Aero from '../images/Futurism/Aero.jpg';
import Battle from '../images/Futurism/Battle.jpg';
import Citta from '../images/Futurism/Citta.jpg';
import City from '../images/Futurism/City.jpg';
import Cyclist from '../images/Futurism/Cyclist.jpg';
import Dancer from '../images/Futurism/Dancer.jpg';
import Dynamism from '../images/Futurism/Dynamism.jpg';
import Funeral from '../images/Futurism/Funeral.jpg';

function Futurism() {
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
      img: Aero,
      Title:
        'Aeroritratto di Mussolini aviatore (aerial portrait of Mussolini)',
      author: 'Alfredo Ambrosi',
    },
    {
      id: 2,
      img: Battle,
      Title: 'Battle of Lights, Coney Island, Mardi Gras',
      author: 'Joseph Stella',
    },
    {
      id: 4,
      img: Citta,
      Title: 'Città Nuova (New City)',
      author: 'Antonio Sant Elia',
    },
    {
      id: 5,
      img: City,
      Title: 'The City Rises',
      author: 'Umberto Boccioni',
    },
    {
      id: 6,
      img: Cyclist,
      Title: 'The Cyclist',
      author: 'Natalia Goncharova',
    },
    {
      id: 7,
      img: Dancer,
      Title: 'Dancer at Pigalle',
      author: 'Gino Severini',
    },
    {
      id: 8,
      img: Dynamism,
      Title: 'Dynamism of a Dog on a Leash',
      author: 'Giacomo Balla',
    },
    {
      id: 9,
      img: Funeral,
      Title: 'Funeral of the Anarchist Galli',
      author: 'Carlo Carrà',
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

export default Futurism;
