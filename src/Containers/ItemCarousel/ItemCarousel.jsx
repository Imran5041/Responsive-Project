import React from "react";
import "./ItemCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ProductCard } from "../../Components";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";

function ItemCarousel({ title }) {
  return (
    <div className="ItemCarousel container">
      <div className="ItemCarousel__titleBar">
        <p className="_headerText">{title}</p>
        <p
          className="_headerText _ptr"
          style={{ color: "red" }}
          onClick={() => {
            Navigator.push(`/products/0/${title}`);
          }}
        >
          See More
        </p>
      </div>
      <div className="ItemCarousel__carouselBox">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="ItemCarouselSwipper"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ItemCarousel;
