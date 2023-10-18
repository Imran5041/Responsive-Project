import React from "react";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import QuantityChanger from "../QuantityChanger/QuantityChanger";
import "./ProductCard.scss";

function ProductCard() {
  return (
    <div
      className="ProductCard _ptr"
      onClick={() => {
        Navigator.push("/view-product/1");
      }}
    >
      <div className="ProductCard__imageBox">
        <img src="/chicken.png" width={"100%"} height="100%" alt="imageBox" />
      </div>
      <div className="ProductCard__contentBox">
        <p className="title">Chiken Curry</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          placeat aliquid recusandae soluta ipsa minima modi doloremque adipisci
          eveniet? Iste ipsum non molestias laborum tenetur, consequuntur ad
          ullam maxime recusandae.
        </p>
        <div className="quantityBox">
          <p className="text">
            Net Weight: <br /> <span className="quantity">100gms</span>
          </p>

          <div className="changeButton">
            <QuantityChanger />
          </div>
        </div>
        <div className="priceBox">
          <p className="priceBox__newPrice">Rs.180</p>
          <p className="priceBox__oldPrice">Rs.220</p>
        </div>
        
        <button className="cartBtn _btnFillGreen">Add to Cart </button>
      </div>
    </div>
  );
}

export default ProductCard;
