import React, { useEffect } from "react";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import "../css/uikit.min.css";
import "../css/custom-style-noy.css";
import "../css/notification.css";

import { GlobalContextProvider } from "../context/GlobalContext";
import Menu from "./Menu";
import BookADemo from "./BookADemo";

const MainLayout = ({ title, children }) => {
  useEffect(() => {
    try {
      const UIkit = require("uikit");
      const Icons = require("uikit/dist/js/uikit-icons");
      UIkit.use(Icons);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />

        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="author" content="nøytrall" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
      </Helmet>

      <GlobalContextProvider>
        <div style={{ position: "relative" }}>
          <Header />
          <Menu />
          <BookADemo />
          <div>
            {children}
            <div
              className="uk-border-circle uk-light uk-background-primary uk-box-shadow-small uk-position uk-position-fixed uk-position-medium uk-position-bottom-left uk-flex uk-flex-center uk-flex-middle"
              id="toTop"
              style={{ cursor: "pointer" }}
              data-uk-totop
              data-uk-scroll
            ></div>
          </div>

          <Footer />
        </div>
      </GlobalContextProvider>
    </div>
  );
};

export default MainLayout;
