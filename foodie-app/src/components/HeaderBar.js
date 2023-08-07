import React from "react";
import "../styles/headerBarStyles.css";
import "../styles/commonStyles.css";
import logoWhite from "../resources/images/logoWhite.png";

const HeaderBar = () => {
  return (
    <div className="header">
      <div className="header-content child">
        <img className="header-logo" src={logoWhite} alt="logo" />
        <div className="user-name">
          <span>Hello, Ashok Madhavan</span>
          <i className="user-icon fa fa-user-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
