import React from "react";
import { Link } from "react-router-dom";

import footer from "./footer.module.scss";

function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.linkSection}>
        <h4 className={footer.linkTitle}>Commerce.js</h4>
        <div className={footer.links}>
          <Link to="/">Documentation</Link>
          <Link to="/">About</Link>
          <Link to="/">Features</Link>
          <Link to="/">Community</Link>
        </div>
      </div>
      <div className={footer.linkSection}>
        <h4 className={footer.linkTitle}>Follow us</h4>
        <div className={footer.links}>
          <Link to="/">Twitter</Link>
          <Link to="/">Angel</Link>
          <Link to="/">Instagram</Link>
          <Link to="/">Linledin</Link>
        </div>
      </div>
      <div className={footer.linkSection}>
        <h4 className={footer.linkTitle}>Newsletter</h4>
        <input
          type="email"
          placeholder="email address"
          className={footer.input}
        />
      </div>
    </div>
  );
}

export default Footer;
