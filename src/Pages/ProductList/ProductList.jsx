import React from "react";
import {
  CategoryHeader,
  Footer,
  Header,
  
  ProductListing,
} from "../../Containers";
import "./ProductList.scss";

function ProductList() {
  return (
    <div className="ProductList">
      <Header />
      <CategoryHeader />
      <div className="_container">
        <ProductListing />
      </div>
      <div>

    <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
