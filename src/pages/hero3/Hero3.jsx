import React from "react";
import "./Hero3.scss";
import { f1, f2, f3 } from "../../assets";

function Hero2() {
  return (
    <section className="hero3">
      <div className="containerrr">
        <div className="hero3-info">
          <h1>Our Services</h1>
          <a href="#">Explore services</a>
        </div>
        {/* //////// */}
        <div className="hero3-content">
          <div className="item">
            <img src={f1} alt="" />
            <h2>House cleaning</h2>
            <h3>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </h3>
          </div>
          <div className="item">
            <img src={f2} alt="" />
            <h2>Office cleaning</h2>
            <h3>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </h3>
          </div>
          <div className="item">
            <img src={f3} alt="" />
            <h2>Industrial cleaning</h2>
            <h3>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
              dalaracc lacus vel facilisis volutpat est.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero2;
