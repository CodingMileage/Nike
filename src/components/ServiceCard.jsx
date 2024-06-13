import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div>
      <img src={imgURL} alt="" />
      <p>{label}</p>
      <p>{subtext}</p>
    </div>
  );
};

export default ServiceCard;
