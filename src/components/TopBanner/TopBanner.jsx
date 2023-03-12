import React from "react";
import { paris } from "../../assets/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import "./TopBanner.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopBanner = () => {
  return (
    <div className="top__banner">
      <div className="top__header">
        <h2>Our biggest offer</h2>
        <div className="arrow">
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div className="row__banner">
        <Swiper
          slidesPerView={3}
          // centeredSlides={true}
          spaceBetween={40}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
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
            <div className="card__banner">
              <img src={paris} alt="" />
              <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__banner">
              <img src={paris} alt="" />
              <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__banner">
              <img src={paris} alt="" />
              <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card__banner">
              <img src={paris} alt="" />
              <div className="text">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopBanner;
