import React from "react";
import "./Hero2.scss";
import { i1, i2, i3 } from "../../assets";

function Hero2() {
  return (
    <section className="hero2">
      <div className="containerr">
        <div className="hero2-info">
          <h1>About Us</h1>
          <p>
            Sagittis nibh scelerisque vitae eget vulputate sem elementum sed
            neque nisi felis non ultrices massa id egestas quam velit pretium
            nu.
          </p>
        </div>
        {/* //////// */}
        <div className="hero2-content">
          <div className="item">
            <img src={i1} alt="" />
            <h2>1. Schedule online</h2>
            <h3>
              Sagittis nibh scelerisque vitae egetolment vulputate sem elementum
              sed n.
            </h3>
          </div>
          <div className="item">
            <img src={i2} alt="" />
            <h2>2. Pay online easily</h2>
            <h3>
              Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet
              at nunc.
            </h3>
          </div>
          <div className="item">
            <img src={i3} alt="" />
            <h2>3. Get your house cleaned</h2>
            <h3>
              Nunc maecenas sollicitudin metus tellus mattis sed porttitor
              cursus eleifend.
            </h3>
          </div>
        </div>
        <div className="hero2-button">
          <a href="#" className="btn1">
            Get a free quote
          </a>
          <a href="#" className="btn2">
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
