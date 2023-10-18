import React from "react";
import { RecipieViewCard } from "../../Components";
import {
  CategoryHeader,
  Footer,
  Header,
  ItemCarousel,
  RecipieCarousel,
} from "../../Containers";
import "./RecipieView.scss";

function RecipieView() {
  return (
    <div className="RecipieView">
      <Header />
      <CategoryHeader />
      <div className="_container">
        <RecipieViewCard />
      </div>

      <div className="_container">
        <ItemCarousel title={"Related Products"} />
      </div>

      <div className="_container">
        <RecipieCarousel title={"Recipies"} />
      </div>

      <Footer />
    </div>
  );
}

export default RecipieView;
