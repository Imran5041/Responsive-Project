import React from "react";
import {
  BannerCarousel,
  CategoryGrid,
  CategoryHeader,
  Footer,
  Header,
  ItemCarousel,
  RecipieCarousel,
} from "../../Containers";
import "./Homepage.scss";

function Homepage() {
  return (
    <div className="Homepage">
      <Header />
      <CategoryHeader />
      <BannerCarousel />
      <div className="Homepage__aboutCompany _container">
        <p className="_titleText">About Company</p>
        <p className="_subText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore
          maiores dignissimos amet accusamus nam nulla, excepturi quas aliquid
          quod reprehenderit voluptatem repellendus aliquam culpa ducimus soluta
          ipsa itaque! Labore perspiciatis minima officia est error a fugiat
          ipsa incidunt necessitatibus asperiores voluptatum, ipsam tenetur sed
          delectus saepe nihil. Maxime, vitae.
        </p>
      </div>
      <div className="_container">
        <ItemCarousel title={"Best Sellers"} />
      </div>
      <div className="_container">
        <ItemCarousel title={"Todays Deal"} />
      </div>
      <div className="_container">
        <CategoryGrid />
      </div>
      <div className="_container">
        <RecipieCarousel title={"Recipies"} />
      </div>
      <div className="Homepage__aboutCompany _container">
        <p className="_titleText">Testimonial</p>
        <p className="_subText">
          Fresh N More provides the best in class meat products and at the most
          affordable price on the market.
          <br />
          <b>John Doe</b>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
