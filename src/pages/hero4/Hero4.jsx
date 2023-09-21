import React from "react";
import "./Hero4.scss";
import { call, bg_img2 } from "../../assets";

function Hero() {
  return (
    <section className="hero4">
      <div className="container">
        <div className="hero4-content">
          <div className="right-content">
            <img src={bg_img2} alt="bg-img" />
          </div>
          <div className="left-content">
            <p className="t0">Quality cleaning for your home</p>
            <h1 className="t1">Quality cleaning for your home</h1>
            <p className="t2">
              Condimentum mauris sit cursus amet id non neque pharetra nulla
              ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
              aliquet et nulla magna lacus penatibus.
            </p>
            <div className="tt">
              <a href="#" className="t3">
                Get a free quote
              </a>
              <div className="ttt">
                <img src={call} alt="call" className="ti" />
                <div className="tttt">
                  <h4 className="t4">Call us now</h4>
                  <h5 className="t5">(414) 567 - 2109</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
