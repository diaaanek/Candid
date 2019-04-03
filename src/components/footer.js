import React from "react";
import "./Splash.scss";

export default () => (
  <div className="footer">
    <section id="footer-left">
      <a href="https://github.com/diaaanek" style={{ margin: ".5em" }}>
        <img
          src="https://image.flaticon.com/icons/svg/25/25231.svg"
          alt="github"
          height="35"
          width="35"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/dianeelizabeth/"
        style={{ margin: ".5em" }}
      >
        <img
          src="https://cdn1.iconfinder.com/data/icons/somacro___dpi_social_media_icons_by_vervex-dfjq/500/linkedin.png"
          alt="linkedin"
          height="35"
          width="35"
        />
      </a>

      <a href="http://dianedesigned.com" style={{ margin: ".5em" }}>
        <img
          src="http://www.iconsalot.com/asset/icons/dinosoftlabs/banking-and-finance-7/512/039-portfolio-icon.png"
          alt="portfolio"
          height="35"
          width="35"
        />
      </a>
    </section>

    <section id="footer-right">
      <span />
      2019 Diane
    </section>
    {/*} NEW FOOTER 
    <div class="section-landing footer">
      <div class="container1">
        <h2 class="center">Try it out!</h2>
        <a class="blue-app">
          <SignIn />
        </a>
        <p class="center footer-text">
          Currently available for beta testing! More content is coming soon!
        </p>

        <ul>
          <li>
            <a href="https://duolingo.com">Duolingo</a>
          </li>
          <li>
            <a href="http://www.duolingo.com/design/assets.zip">Press Kit</a>
          </li>
          <li>
            <a href="http://www.duolingo.com/contact">Contact</a>
          </li>
          <li>
            <a href="https://facebook.com/duolingo">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/duolingo">Twitter</a>
          </li>
        </ul>
      </div>
    </div> */}
  </div>
);
