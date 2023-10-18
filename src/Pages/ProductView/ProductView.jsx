import React from "react";
import { ProductViewCard } from "../../Components";
import {
  CategoryHeader,
  Footer,
  Header,
  ItemCarousel,
  RecipieCarousel,
} from "../../Containers";
import "./ProductView.scss";

function ProductView() {
  return (
    <div className="ProductView">
      <Header />
      <CategoryHeader />
      <div className="_container">
        <ProductViewCard />
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

export default ProductView;
