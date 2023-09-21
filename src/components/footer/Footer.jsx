import React from "react";
import footers from "./Footer.module.css";
import { logo } from "../../assets";

function Footer() {
  return (
    <footer>
      <div className={footers.container}>
        <hr />
        <div className={footers.content}>
          <img src={logo} alt="logo" />
          <h4 className={footers.h4}>
            Copyright © Cleaning X | Designed by <b>BRIX Templates</b> - Powered
            by <b>Webflow Licenses</b>
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
