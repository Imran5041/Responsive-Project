import React from "react";
import { QuantityChanger } from "../../Components";
import "./ProductViewCard.scss";
import { AiFillStar } from "react-icons/ai";

function ProductViewCard() {
  return (
    <div className="ProductViewCard">
      <div className="ProductViewCard__imgBox">
        <img src="/chicken.png" alt="productImg" />
      </div>
      <div className="ProductViewCard__contentBox">
        <div className="detailBox">
          <p className="detailBox__title">Chicken Wings22222</p>
          <p className="detailBox__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, cum.
            Molestiae, optio nihil doloribus nostrum minima quae. Eius doloribus
            in explicabo magnam! Assumenda deleniti rem quas sit, iure labore,
            eum recusandae porro corporis voluptas veniam maxime ullam sapiente
            provident voluptatibus!
          </p>
          <div className="detailBox__quantityBar">
            <p>Quantity: 500gms</p>
            <QuantityChanger style={{ fontSize: "1.3rem" }} />
          </div>
          <div className="detailBox__ratingBox">
            <AiFillStar /> 4.0
          </div>
        </div>
        <div className="priceBox">
          <p className="priceBox__price">
            <span className="price">Rs.198</span>
            &nbsp;
            <span className="oldPrice">Rs.220</span>
            <br />
            <span className="discount">20% Off</span>
          </p>

          <div className="priceBox__buttonBox">
            <button className="wishlistBtn _btnFillRed">Wishlist khan</button>
            <button className="cartBtn _btnFillGreen">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewCard;
