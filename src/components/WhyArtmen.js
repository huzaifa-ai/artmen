import React from 'react';
import '../css/Why.css';

function WhyArtmen() {
  return (
    <div className="flex flex-col-reverse md:flex-row  ">
      <div className=" px-6 w-full md:w-1/2 py-20 text-black text-center flex items-center justify-center">
        <ul className="flex text-left uppercase flex-col p-10 space-y-4 text-md tracking-widest why md:p-16 lg:p-20 font-bold md:text-xl rounded-xl">
          <li>Better Quality</li>
          <li>Genuine Price</li>
          <li>Discount on Repurchase</li>
          <li>Refund Policy</li>
          <li>Employment Opportunity</li>
        </ul>
      </div>
      <div className=" w-full text-center md:text-left  md:w-1/2 px-8 text-md  py-10 md:py-20 lg:px-14 lg:text-xl">
        <h1 className="pb-6 font-bold"> Why Artmen, Services.?</h1>
        <div className="flex flex-col space-y-4">
          <p>
            Artmen Co. is an art platform that connects art enthusiasts,
            artists, galleries, and universities around the globe.
          </p>
          <p>
            If you’re an artist, Artmen.Co allows you to sell art online
            commission-free, which sets us apart from other online gallery
            websites.
          </p>
          <p>
            If you’re in the market for a new painting, Artmen, CO. negotiate on
            behalf of their client regarding the monetary value of the art-work
            with the artist.
          </p>
          <p>
            While other digital galleries use third-party mediators to monitor
            artist to buyer interactions, charging between 30-35%
            commission-fees, Artmen, Co. acts as a facilitator between artists
            and buyers for free.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyArtmen;
