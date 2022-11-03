import React from "react";

import logoSmall from "../../images/logo-o-shape-small-color.png";
import logoMedium from "../../images/logo-o-shape-medium-color.png";
import logo from "../../images/logo-noytrall-color.png";

import { useLocation } from "@reach/router";

type tProps = {};

const Header: React.FC<tProps> = ({}) => {
  const { pathname } = useLocation();

  const renderButtons = () => {
    const list = [
      { path: "/", text: "FOR GUESTS" },
      { path: "/hotels/", text: "FOR HOTELS" },
      { path: "/providers/", text: "FOR PROVIDERS" },
      { path: "/help/", text: "HELP AND SUPPORT" },
    ];

    return list.map(({ path, text }) => {
      const bool =
        pathname === "/" || path === "/"
          ? pathname === path
          : path.indexOf(pathname) >= 0 || pathname.indexOf(path) >= 0;

      return (
        <li key={path} className={bool ? "uk-active" : ""}>
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
          uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
        >
          <nav
            className="uk-navbar-container uk-navbar-muted"
            data-uk-navbar
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="uk-navbar-left">
              <a
                className="uk-navbar-toggle uk-hidden@m"
                data-uk-navbar-toggle-icon
                data-uk-toggle="target: #offmenuid"
              ></a>

              <a
                className="uk-navbar-item uk-logo uk-visible uk-hidden@s"
                href="/"
              >
                <img
                  style={{ background: "none" }}
                  data-src={logoSmall}
                  width="41"
                  height="53"
                  data-uk-img
                />
              </a>

              <a
                className="uk-navbar-item uk-logo uk-visible@s uk-hidden@m"
                href="/"
              >
                <img
                  style={{ background: "none" }}
                  data-src={logoMedium}
                  width="128"
                  height="53"
                  data-uk-img
                />
              </a>

              <a className="uk-navbar-item uk-logo uk-visible@m" href="/">
                <img
                  style={{ background: "none" }}
                  data-src={logo}
                  width="250"
                  height="53"
                  data-uk-img
                />
              </a>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@m">{renderButtons()}</ul>
              <div className="uk-navbar-item">
                <a
                  className="uk-button uk-button-default uk-button-primary uk-border-pill"
                  data-uk-toggle="target: #modal-book-demo-calendar"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
