import React from "react";
import "./BannerCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function BannerCarousel() {
  return (
    <div className="BannerCarousel">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/slider.png" alt="banner" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCarousel;
