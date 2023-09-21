import React from "react";
import "./Hero5.scss";
import { j1, j2 } from "../../assets";

function Hero5() {
  return (
    <section className="hero5">
      <div className="containerrrr">
        <div className="hero5-info">
          <h1>Articles & resources</h1>
          <div className="ii">
            <a href="#" className="btn1">
              Get a free quote
            </a>
            <a href="#" className="btn2">
              Browse articles
            </a>
          </div>
        </div>
        <div className="hero5-content">
          <div className="item">
            <img src={j1} alt="" />
            <div className="hh">
              <h1>
                8 best vacuum cleaners to clean any mess for your home in 2022
              </h1>
              <h2>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </h2>
              <div className="jj">
                <h3>Jan 28, 2022</h3>
                <p></p>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={j2} alt="" />
            <div className="hh">
              <h1>
                How to properly disinfect your phone and other electronics
              </h1>
              <h2>
                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo
                quis odio sit sit ac port titor sit males.
              </h2>
              <div className="jj">
                <h3>Feb 1, 2022</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero5;
