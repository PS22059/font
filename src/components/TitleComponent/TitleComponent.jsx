import React from "react";
import "./TitleComponent.css";
const TitleComponent = ({ title }) => {
  return (
    <div className="title_list_new">
      <h2>{title}</h2>
    </div>
  );
};

export default TitleComponent;
