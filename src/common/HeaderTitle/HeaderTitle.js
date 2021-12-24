import React from "react";
import { useNavigate } from "react-router";

import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";

import "./styles.css";

const HeaderTitle = ({ title, backButton }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="header-title">
      {backButton && (
        <ArrowLeft className="header-title-back-button" onClick={handleBack} />
      )}
      <span>{title}</span>
    </div>
  );
};

export default HeaderTitle;
