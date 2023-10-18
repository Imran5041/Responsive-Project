import React from "react";
import {
  CategoryHeader,
  Footer,
  Header,
  RecipieListing,
} from "../../Containers";
import "./RecipieList.scss";

function RecipieList() {
  return (
    <div className="RecipieList">
      <Header />
      <CategoryHeader />
      <div className="_container">
        <RecipieListing />
      </div>
      <Footer />
    </div>
  );
}

export default RecipieList;
