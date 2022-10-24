import React, { useState, Component } from 'react';
import Carousel from 'react-elastic-carousel';
import '../css/gallery.css';
import Beat from '../images/Constructivism/Beat.jpg';
import Books from '../images/Constructivism/Books.jpg';
import Self from '../images/Constructivism/Self.jpg';
import Stage from '../images/Constructivism/Stage.jpg';
import Suprematism from '../images/Constructivism/Suprematism.jpg';

function Constructivism() {
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
      img: Beat,
      Title: 'Beat the Whites with the Red Wedge',
      author: 'El Lissitzky',
    },
    {
      id: 2,
      img: Books,
      Title: 'Books (Please)! In All Branches of Knowledge ',
      author: 'Alexander Rodchenko',
    },
    {
      id: 4,
      img: Self,
      Title: 'Self-Portrait: The Constructor',
      author: ' El Lissitzky',
    },
    {
      id: 5,
      img: Stage,
      Title: 'Stage set design for, The Magnanimous Cuckold',
      author: 'Lyubov Popova',
    },
    {
      id: 6,
      img: Suprematism,
      Title: 'Suprematism',
      author: 'Kazimir Malevich',
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

export default Constructivism;
