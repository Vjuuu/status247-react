import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slider = ({ label, images, link }) => {
  return (
    <div className="mb-3">
      <label className="mb-3">{label}</label>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="card h-100 bg-dark text-white">
              <img src={image.src} className="card-img-top btn-poster" alt={image.alt} />
            </div>
          </SwiperSlide>
        ))}
        {link && (
          <SwiperSlide>
            <a href={link}>
              <div className="card bg-light d-flex justify-content-center align-items-center" style={{ height: "150px" }}>
                <p>View More</p>
              </div>
            </a>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
