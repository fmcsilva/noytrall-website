import React from "react";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import "../css/uikit.min.css";
import "../css/custom-style-noy.css";

import "../css/parsley.css";
import "../css/trust-content.css";
import "../css/header.css";
import "../css/notification.css";
import { GlobalContextProvider } from "../context/GlobalContext";
import Menu from "./Menu";
import BookADemo from "./BookADemo";

class MainLayout extends React.Component {
  componentDidMount() {
    try {
      this.UIkit = require("uikit");
      this.Icons = require("uikit/dist/js/uikit-icons");
      this.UIkit.use(this.Icons);
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>For Accommodations. noytrall. Stay Smart.</title>

          {/* <link rel="shortcut icon" href="favicon.ico" /> */}

          <meta charset="utf-8" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="description"
            content="For Accommodations. noytrall. Stay Smart."
          />

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
              {this.props.children}
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
  }
}

export default MainLayout;
