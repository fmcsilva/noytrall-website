import React from "react";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import jquery from "../../node_modules/jquery/src/jquery.js";

import "../css/uikit.min.css";
import "../css/custom-style-noy.css";
import "../css/parsley.css";
import "../css/trust-content.css";
import "../css/header.css";

// import "../js/uikit.min.js";
// import "../js/uikit-icons.min.js";

// import "uikit/dist/css/uikit.css";

// import UIkit from "uikit";
// import Icons from "uikit/dist/js/uikit-icons";
// UIkit.use(Icons); // See: https://getuikit.com/docs/webpack

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
    // const pageDescription =
    //   this.props.description !== undefined
    //     ? this.props.description
    //     : this.props.data.site.siteMetadata.description;

    // const pageKeywords =
    //   this.props.keywords !== undefined
    //     ? this.props.keywords.map((k) => k.toLowerCase()).join(",")
    //     : this.props.data.site.siteMetadata.keywords;

    // const canonicalUrl = `${this.props.data.site.siteMetadata.siteUrl}${this.props.location.pathname}`;

    // const googleSiteVerification =
    //   "NYAneve0llvi3Mmooz40QrY1GZNCNqsgiqYM-3DSMS4";

    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="../css/parsley.css"
          />
          <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
          {/* <script src="js/rangeslider-js.min.js"></script> */}

          <script src="../../node_modules/jquery/src/jquery.js"></script>
          <script src="../js/parsley.min.js"></script>
        </Helmet>

        <Header />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
