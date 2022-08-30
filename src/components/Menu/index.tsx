import React from "react";
import { useLocation } from "@reach/router";

const Menu: React.FC = () => {
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
    <div id="offmenuid" data-uk-offcanvas="mode: reveal; overlay: true">
    <div className="uk-offcanvas-bar">
      <button className="uk-offcanvas-close" type="button" data-uk-close></button>
      <ul className="uk-nav uk-nav-default" data-uk-scrollspy-nav="closest: li; scroll: true">
        <li className="uk-nav-header">Menu</li>
        {renderButtons()}
      </ul>
    </div>
  </div>
  );

};

export default Menu;
