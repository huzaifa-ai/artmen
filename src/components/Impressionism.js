import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Absinthe from '../images/Impressionism/Absinthe.jpg';
import Boulevard from '../images/Impressionism/Boulevard.jpg';
import Fog from '../images/Impressionism/Fog.jpg';
import Girl from '../images/Impressionism/Girl.jpg';
import Impression from '../images/Impressionism/Impression.jpg';
import Nocturne from '../images/Impressionism/Nocturne.jpg';
import Opera from '../images/Impressionism/Opera.jpg';
import Paris from '../images/Impressionism/Paris.jpg';
import Park from '../images/Impressionism/Park.jpg';

function Impressionism() {
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
      img: Absinthe,
      Title: 'L Absinthe',
      author: 'Edgar Degas',
    },
    {
      id: 2,
      img: Boulevard,
      Title: 'The Boulevard Montmartre, Afternoon',
      author: 'Camille Pissarro',
    },
    {
      id: 4,
      img: Fog,
      Title: 'Fog, Voisins',
      author: 'Alfred Sisley',
    },
    {
      id: 5,
      img: Girl,
      Title: 'Girl with a Hoop',
      author: 'Pierre-Auguste Renoir',
    },
    {
      id: 6,
      img: Impression,
      Title: 'Impression, Sunrise',
      author: 'Claude Monet',
    },
    {
      id: 7,
      img: Nocturne,
      Title: 'Nocturne: Blue and Gold - Old Battersea Bridge',
      author: 'James Abbott McNeill Whistler',
    },
    {
      id: 8,
      img: Opera,
      Title: 'At the Opera',
      author: 'Mary Cassatt',
    },

    {
      id: 9,
      img: Paris,
      Title: 'Paris Street, Rainy Day',
      author: ' Gustave Caillebotte',
    },
    {
      id: 10,
      img: Park,
      Title: 'In a Park',
      author: ' Berthe Morisot',
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

export default Impressionism;
