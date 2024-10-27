import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const MySwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1.5}
      grabCursor={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="card h-100 bg-dark text-white">
          <img
            src="assets/posters/gandhiJayanti/2.png"
            className="card-img-top btn-poster"
            alt="Template 1"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card h-100 bg-dark text-white">
          <img
            src="assets/posters/gandhiJayanti/3.png"
            className="card-img-top btn-poster"
            alt="Template 2"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card h-100 bg-dark text-white">
          <img
            src="assets/posters/gandhiJayanti/4.png"
            className="card-img-top btn-poster"
            alt="Template 3"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card h-100 bg-dark text-white">
          <img
            src="assets/posters/gandhiJayanti/5.png"
            className="card-img-top btn-poster"
            alt="Template 4"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <a href="/mobile-layout/gandhi_jayanti">
          <div
            className="card bg-light d-flex justify-content-center align-items-center"
            style={{ height: "150px" }}
          >
            <p>View More</p>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiperComponent;
