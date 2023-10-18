import React from "react";
import "./RecipieCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { RecipieCard } from "../../Components";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";

function RecipieCarousel({ title }) {
  return (
    <div className="RecipieCarousel container">
      <div className="RecipieCarousel__titleBar">
        <p className="_headerText">{title}</p>
        <p
          className="_headerText _ptr"
          style={{ color: "red" }}
          onClick={() => {
            Navigator.push("/recipies");
          }}
        >
          See More
        </p>
      </div>
      <div className="RecipieCarousel__carouselBox">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="RecipieCarouselSwipper"
        >
          <SwiperSlide>
            <RecipieCard />
            <RecipieCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default RecipieCarousel;
