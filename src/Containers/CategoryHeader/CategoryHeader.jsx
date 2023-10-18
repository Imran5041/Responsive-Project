import React from "react";
import Navigator from "../../Utils/GlobalNavigation/navigationHistory";
import "./CategoryHeader.scss";

const categories = [
  {
    id: 1,
    title: "Chicken",
    icon: "/Icons/icons1.png",
  },
  {
    id: 2,
    title: "Exotic",
    icon: "/Icons/icons2.png",
  },
  {
    id: 3,
    title: "Mutton",
    icon: "/Icons/icons3.png",
  },
  {
    id: 4,
    title: "Ready To Eat",
    icon: "/Icons/icons4.png",
  },
  {
    id: 5,
    title: "Sea Food",
    icon: "/Icons/icons5.png",
  },
];

function CategoryHeader() {
  return (
    <div className="CategoryHeader">
      {categories.map((item, index) => (
        <div
          className="CategoryHeader__catBox _ptr"
          key={index}
          onClick={() => {
            Navigator.push(`/products/${item?.id}/${item?.title}`);
          }}
        >
          <span className="icon">
            <img
              src={item?.icon}
              width={"100%"}
              height="100%"
              alt="categoryIcon"
            />
          </span>
          <p>{item?.title}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryHeader;
