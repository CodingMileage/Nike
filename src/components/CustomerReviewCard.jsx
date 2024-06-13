import React from "react";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div>
      <img src={imgURL} alt="" />
      <div>
        <h2>{customerName}</h2>
        <p>{rating}</p>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
