import React from "react";
import { RecipieCard } from "../../Components";
import "./RecipieListing.scss";

const recipies = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1,];

function RecipieListing() {
  return (
    <div className="RecipieListing">
      <div className="RecipieListing__titleContainer">
        <p>Recipies</p>
      </div>
      <div className="RecipieListing__productContainer">
        {recipies.map((item, index) => (
          <div className="prodBox" key={index}>
            <RecipieCard />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipieListing;
