import React from "react";
import "./QuantityChanger.scss";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";

function QuantityChanger({ style }) {
  return (
    <div className="QuantityChanger" style={style}>
      <span className="QuantityChanger__increase">
        <MdAddCircle />
      </span>
      <span className="QuantityChanger__value">1</span>
      <span className="QuantityChanger__decrease">
        <MdRemoveCircle />
      </span>
    </div>
  );
}

export default QuantityChanger;
