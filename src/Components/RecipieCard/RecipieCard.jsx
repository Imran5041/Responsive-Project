import React from "react";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import "./RecipieCard.scss";

function RecipieCard() {
  return (
    <div
      className="RecipieCard _ptr"
      onClick={() => {
        Navigator.push("/view-recipie/1");
      }}
    >
      <div className="RecipieCard__imageBox">
        <img src="/chicken.png" width={"100%"} height="100%" alt="imageBox" />
      </div>
      <div className="RecipieCard__contentBox">
        <p className="title">Chiken Curry0001</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          placeat aliquid recusandae soluta ipsa minima modi doloremque adipisci
          eveniet? Iste ipsum non molestias laborum tenetur, consequuntur ad
          ullam maxime recusandae000001.
        </p>
      </div>
    </div>
  );
}

export default RecipieCard;
