import React from "react";
import "./homepageservice.css";
import ServiceBlock from "../ServiceBlock/ServiceBlock";

function HomepageService() {
  return (
    <div className="HomeService">
      <div className="HomeServiceBlock">
        <ServiceBlock
          heading="Consulatncy"
          description="We provide good consultation"
        ></ServiceBlock>
        <ServiceBlock
          heading="Advisory"
          description="We provide good advisory as well"
        ></ServiceBlock>
        <ServiceBlock
          heading="Service"
          description="We provide good service too"
        ></ServiceBlock>
      </div>
      <div className="HomeServiceBlock">
        <ServiceBlock
          heading="Consulatncy"
          description="We provide good consultation"
        ></ServiceBlock>
        <ServiceBlock
          heading="Advisory"
          description="We provide good advisory as well"
        ></ServiceBlock>
      </div>
    </div>
  );
}

export default HomepageService;
