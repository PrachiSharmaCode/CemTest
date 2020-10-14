import React from "react";
import "./banner.css";
import { Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="mainBanner">
      <div className="banner">
        <h1>We Give Good Consultancy</h1>
        <p>
          We provide Consultancy advisory service and <br></br>
          very good service.
        </p>
        <Button>See our Services</Button>
      </div>
    </div>
  );
}

export default Banner;
