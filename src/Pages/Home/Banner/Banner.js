import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" alt=" " />
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
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
