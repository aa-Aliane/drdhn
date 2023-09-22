import React from "react";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__content">{children}</div>
    </div>
  );
};

export default Section;
