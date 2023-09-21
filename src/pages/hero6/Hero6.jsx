import React from "react";
import "./Hero6.scss";
import { call } from "../../assets";

function Hero6() {
  return (
    <section className="hero6">
      <div className="container-6">
        <div className="hero6-content">
          <div className="first-content">
            <h1>Contact Us</h1>
            <p>
              In dignissim euismod pretium amet enim a eu nam ut urna accumsan
              pellentesque lacus duis pharetra eutortor.
            </p>
            <div className="nn">
              <img src={call} alt="" />
              <div className="nnn">
                <h6>Call us now</h6>
                <p>(414) 567 - 2109</p>
              </div>
            </div>
            <hr />
            <h2>Not convinced yet?</h2>
            <h3>
              Massa bibendum consectetur maurisid gravida purus, dolor dui amet
              morbi non nunc urna purus diam.
            </h3>
            <a href="#">Browse our packages</a>
          </div>
          <div className="second-content">
            <div className="n1">
              <div className="nn1">
                <label htmlFor="FullName">Full name</label>
                <input type="text" name="FullName" id="FullName1" />
              </div>
              <div className="nnn1">
                <label htmlFor="number">Number</label>

                <input type="number" name="number" id="number1" />
              </div>
            </div>
            <div className="n2">
              <div className="nn1">
                <label htmlFor="FullName">Address</label>
                <input type="text" name="FullName" id="FullName1" />
              </div>
              <div className="nnn1">
                <label htmlFor="number">Email</label>

                <input type="number" name="number" id="number1" />
              </div>
            </div>
            <div className="n3">
              <div className="nn1">
                <label htmlFor="FullName">Requested service</label>
                <input type="text" name="FullName" id="FullName1" />
              </div>
              <div className="nnn1">
                <label htmlFor="number">Day of service</label>

                <input type="number" name="number" id="number1" />
              </div>
            </div>
            <div className="n4">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="fof22" />
            </div>
            <a href="#">Submit message</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero6;
