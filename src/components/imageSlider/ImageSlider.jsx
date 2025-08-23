import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import i1 from '../../assets/1.jpg';
import i2 from '../../assets/2.jpg';
import i3 from '../../assets/3.jpg';
import i4 from '../../assets/4.jpg';
import i5 from '../../assets/5.jpg';
import i6 from '../../assets/6.jpg';

const images = [i1, i2, i3, i4, i5, i6];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <div className="w-full max-h-[300px] overflow-hidden shadow-lg rounded-lg object-contain">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full max-h-[300px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
