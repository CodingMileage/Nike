import React from "react";

const FooterCard = ({ title, links }) => {
  return (
    <div>
      <h1>{title}</h1>
      {links.map((link) => (
        <div>
          <a href={link.link}>{link.name}</a>
        </div>
      ))}
    </div>
  );
};

export default FooterCard;
