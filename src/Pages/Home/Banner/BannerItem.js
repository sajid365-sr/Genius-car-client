import React from "react";
import './BannerItem.css';

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full rounded-xl" alt=" " />
      </div>
      <div className="absolute w-1/3 gap-5 transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
        <p className="text-white mt-4">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="mt-10">
          <button className="btn btn-outline btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
      </div>

      <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
