import React from "react";
import { card1, makhha, paris, tawar } from "../../assets/image";
import "./Seaction.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const Seaction = ({ header }) => {
  return (
    <main className="main_card">
      <h2 className="header">{header}</h2>
      <div className="conatiner">
        <div className="row">
          <Swiper
            slidesPerView={3}
            // centeredSlides={true}
            spaceBetween={40}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              420: {
                width: 420,
                slidesPerView: 1,
                centeredSlides: true,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
                centeredSlides: true,
              },
              998: {
                width: 980,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={makhha} alt="" />
                <div className="text">
                  <h2>makkha</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={tawar} alt="" />
                <div className="text">
                  <h2>makkha</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={paris} alt="" />
                <div className="text">
                  <h2>Paris</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={paris} alt="" />
                <div className="text">
                  <h2>Paris</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={paris} alt="" />
                <div className="text">
                  <h2>Paris</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="card">
                <img src={card1} alt="" />
                <div className="text">
                  <h2>dubai</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Seaction;
