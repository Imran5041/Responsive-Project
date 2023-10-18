import React from "react";
import "./RecipieViewCard.scss";

function RecipieViewCard() {
  return (
    <div className="RecipieViewCard">
      <div className="RecipieViewCard__imgContainer">
        <img src="/chicken.png" alt="recipie" />
      </div>
      <div className="RecipieViewCard__contentContainer">
        <p className="title">Chicken Curry555  </p>
        <p className="ingredients">
          Product Ingredient:&nbsp;
          <span className="prod _ptr">Chicken Pieces</span>
        </p>
        <p className="ingredients">
          Other Ingredient:&nbsp;
          <span className="">Chicken Pieces</span>
        </p>

        <p className="instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
          est aperiam, voluptatibus molestias temporibus quod aspernatur, saepe
          autem, esse quis consequuntur et dolore odio minima porro sapiente
          placeat asperiores. Exercitationem pariatur, accusantium non impedit
          quisquam quia voluptate fugit neque cupiditate eveniet doloribus
          beatae amet tempore! Fuga assumenda quas labore!
        </p>
        <p className="instructions">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi omnis
          est aperiam, voluptatibus molestias temporibus quod aspernatur, saepe
          autem, esse quis consequuntur et dolore odio minima porro sapiente
          placeat asperiores. Exercitationem pariatur, accusantium non impedit
          quisquam quia voluptate fugit neque cupiditate eveniet doloribus
          beatae amet tempore! Fuga assumenda quas labore!2222
        </p>
      </div>
    </div>
  );
}

export default RecipieViewCard;
