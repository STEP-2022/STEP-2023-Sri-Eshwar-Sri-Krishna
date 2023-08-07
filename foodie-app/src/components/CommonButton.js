import React from "react";
import "../styles/commonButtonStyles.css";

const CommonButton = ({type, className, value, onClick}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default CommonButton;