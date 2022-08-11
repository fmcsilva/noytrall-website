import React from "react";

const Menu: React.FC = () => {
  return (
    <div id="offmenuid" data-uk-offcanvas="mode: reveal; overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close
        ></button>
        <ul
          className="uk-nav uk-nav-default"
          data-uk-scrollspy-nav="closest: li; scroll: true"
        >
          <li className="uk-nav-header">nøytrall</li>
          <li>
            <a href="index.htm#download">Download the App</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="index.htm#keyfeatures" data-uk-scroll="offset:80">
              Key Features
            </a>
          </li>
          <li>
            <a href="help.htm">Help and Support</a>
          </li>
          <li className="uk-active">
            <a href="hotels.htm">For Guests</a>
          </li>
          <li>
            <a href="hotels.htm">For Hotels</a>
          </li>
          <li>
            <a href="index.htm#team" data-uk-scroll="offset:80">
              Meet the team
            </a>
          </li>
          <li>
            <a href="index.htm#talk" data-uk-scroll="offset:80">
              Talk to us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
