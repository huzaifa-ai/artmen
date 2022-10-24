import React from 'react';
import '../css/About.css';

function Aboutus() {
  return (
    <div
      id="aboutus"
      className="flex flex-col py-20 md:48 bg-white text-black md:space-x-20 items-center h-screen  "
    >
      <div className="text-6xl w-full md:w-1/3 text-center md:text-6xl lg:text-8xl">
        ABOUT US
      </div>
      <div className=" w-5/6 text-center text-sm mt-12 tracking-widest lg:text-lg md:text-left flex flex-col space-y-4  ">
        <p>
          Estabpshed in 2020, Artmen, Co. is the world’s most dynamic
          marketplace for art and luxury. We empower our international community
          of collectors and connoisseurs to discover, acquire, finance and
          consign fine art works. Our reputation for trust and authenticity is
          backed by our unparalleled global network of speciapsts spanning 40
          countries
        </p>
        <p>
          Guided by our forward-thinking spirit of innovation, we offer a
          cross-category selection of items available for immediate purchase via
          digital shopping experiences as well as private sales.
        </p>
        <p>
          As a global organization, we operate in an environment without
          boundaries, creating a dynamic atmosphere of energy and excitement,
          career development and growth.{' '}
        </p>
        <p>
          Today we are a dynamic, 21st century organization committed to
          innovation. Artmen, Co. has long recognized that great works of art,
          as well as the collectors interested in consigning and acquiring them,
          inhabit the global sphere.{' '}
        </p>
        <p>
          As the cultural representatives of art, Artmen.co is here to challenge
          and then change the way art is seen, purchased and collected. We hope
          to enact a blueprint that rectifies the glory of past and reconstruct
          a future through canvas and colors.{' '}
        </p>
        <p>
          To inspire and nurture the human spirit, our art works are carefully
          designed that will bring joy to their buyers, appreciate in value and
          provide owners the special satisfaction.
        </p>
        <p>
          With Artmen, Co. commitment to diversity, our artists have
          unparalleled expertise and passion, spanning over 20 specialties.{' '}
        </p>
        <h1 className="text-2xl text-left">Values</h1>
        <ul className="pb-20 flex flex-col space-y-2 text-left">
          <p>1.Integrity, Diversity and Inclusion</p>
          <p>2.Excellence</p>
          <p>3.Deepening Pubpc Understanding</p>
          <p>4.Curiosity and Continuous Learning</p>
          <p>5.Empathy and Generosity of Spirit</p>
          <p>6.Agipty and Responsiveness </p>
        </ul>
      </div>
    </div>
  );
}

export default Aboutus;
