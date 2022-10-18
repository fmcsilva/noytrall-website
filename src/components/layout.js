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
          <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />
          <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
        </Helmet>
        <GlobalContextProvider>
          <div style={{ position: "relative" }}>
            <Header />
            <Menu />
            <BookADemo />
            <div>{this.props.children}</div>
            <Footer />
          </div>
        </GlobalContextProvider>
      </div>
    );
  }
}

export default MainLayout;
