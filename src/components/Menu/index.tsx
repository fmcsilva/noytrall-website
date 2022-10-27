import React from "react";
import { useLocation } from "@reach/router";

const Menu: React.FC = () => {
  const { pathname } = useLocation();

  const renderButtons = () => {
    const list = [
      { path: "/", text: "For Guests" },
      { path: "/hotels", text: "For Hotels" },
      { path: "/providers", text: "For Providers" },
      { path: "/help", text: "Help and support" },
      { path: "/aboutus", text: "About us" },
      { path: "/privacy", text: "Privacy Policy" },
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
    <div id="offmenuid" uk-offcanvas="mode: reveal; overlay: true">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close
        ></button>

        <ul
          className="uk-nav uk-nav-default"
          uk-scrollspy-nav="closest: li; scroll: true"
        >
          <li className="uk-nav-header">Menu</li>

          {renderButtons()}
        </ul>
      </div>
    </div>
  );

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
          <li className="uk-nav-header">Menu</li>
          {renderButtons()}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
