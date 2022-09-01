import React from "react";

import logo from "../../images/logo-noytrall-color.png";
import { useLocation } from "@reach/router";

type tProps = {};

const Header: React.FC<tProps> = ({}) => {
  const { pathname } = useLocation();

  const renderButtons = () => {
    const list = [
      { path: "/", text: "FOR GUESTS" },
      { path: "/hotels", text: "FOR HOTELS" },
      // { path: "/partners", text: "FOR PARTNERS" },
      { path: "/providers", text: "FOR PROVIDERS" },
      { path: "/help", text: "HELP AND SUPPORT" },
    ];

    return list.map(({ path, text }) => {
      return (
        <li key={path} className={path === pathname ? "uk-active" : ""}>
          <a href={path}>{text}</a>
        </li>
      );
    });
  };

  return (
    <header
      id="header"
      className="uk-background-muted"
      data-uk-sticky
      style={{ zIndex: 990 }}
    >
      <div className="uk-container uk-container-large">
        <div
          className=""
          data-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        >
          <nav className="uk-navbar-container uk-navbar-muted" data-uk-navbar>
            <div className="uk-navbar-left">
              <a
                className="uk-navbar-toggle uk-hidden@m"
                data-uk-toggle="target: #offmenuid"
                data-uk-navbar-toggle-icon
              ></a>
              <a className="uk-navbar-item uk-logo" href="/">
                <img data-src={logo} className="headerLogoSize" data-uk-img />
              </a>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@m">{renderButtons()}</ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
