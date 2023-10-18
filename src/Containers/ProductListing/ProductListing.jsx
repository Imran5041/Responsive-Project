import React from "react";
import { ProductCard } from "../../Components";
import "./ProductListing.scss";

const products = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

function ProductListing() {
  return (
    <div className="ProductListing">
      <div className="ProductListing__titleContainer">
        <p>Products</p>
      </div>
      <div className="ProductListing__productContainer">
        {products.map((item, index) => (
          <div className="prodBox" key={index}>
            <ProductCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
