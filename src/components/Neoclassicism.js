import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Archilles from '../images/Neoclassicim/Archilles.jpg';
import Cornelia from '../images/Neoclassicim/Cornelia.jpg';
import Cupid from '../images/Neoclassicim/Cupid.jpg';
import Monticello from '../images/Neoclassicim/Monticello.jpg';
import Horaitai from '../images/Neoclassicim/Horaitai.jpg';
import Pantheon from '../images/Neoclassicim/Pantheon.jpg';
import Wolfie from '../images/Neoclassicim/Wolfie.jpg';

function Neoclassicism() {
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
      img: Archilles,
      Title: 'Achilles Receiving the Ambassadors of Agamemnon',
      author: 'Jean-Auguste-Dominique Ingres',
    },
    {
      id: 2,
      img: Cornelia,
      Title:
        'Cornelia, Mother of the Gracchi, Pointing to her Children as Her Treasures',
      author: 'Angelica Kauffman',
    },

    {
      id: 5,
      img: Horaitai,
      Title: 'Oath of the Horatii',
      author: 'Jacques-Louis David',
    },

    {
      id: 7,
      img: Wolfie,
      Title: 'Death of General Wolf',
      author: 'Benjamin West',
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
        <img src={tempImg} alt="" className="drop-shadow-sm p-4 max-w-sm" />
        <div className="max-w-xs">
          <h1 className="text-white md:text-3xl">{title}</h1>
          <h2 className="text-white text-sm mt-2 tracking-wider">
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

export default Neoclassicism;
