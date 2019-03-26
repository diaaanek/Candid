import React from "react";
import "./Splash.scss";

export default () => (
  <div className="footer">
    <section id="footer-left">
      <a href="https://github.com/diaaanek">
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="github"
          height="35"
          width="35"
        />
      </a>

      <a href="https://www.linkedin.com/in/dianeelizabeth/">
        <img
          src="https://cdn1.iconfinder.com/data/icons/somacro___dpi_social_media_icons_by_vervex-dfjq/500/linkedin.png"
          alt="linkedin"
          height="35"
          width="35"
        />
      </a>

      <a href="http://dianedesigned.com">
        <img
          src="http://www.iconsalot.com/asset/icons/dinosoftlabs/banking-and-finance-7/512/039-portfolio-icon.png"
          alt="portfolio"
          height="35"
          width="35"
        />
      </a>
    </section>

    <section id="footer-right">
      <p>
        <span />2019 Diane
      </p>
    </section>
  </div>
);
