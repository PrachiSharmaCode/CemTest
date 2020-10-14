import React from "react";
import "./ServiceBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiceBlock(props) {
  return (
    <div className="service-block">
      <i className="fa fa-hammer"></i>
      <h3 className="service-heading">{props.heading}</h3>
      <p className="service-description">{props.description}</p>
    </div>
  );
}

export default ServiceBlock;
