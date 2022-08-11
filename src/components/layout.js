import React from "react";
import Helmet from "react-helmet";

import "../css/uikit.min.css";
// import "../css/custom-style-noy.css";
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
        <Helmet
        // title={this.props.title}
        // defaultTitle={this.props.title}
        // titleTemplate="%s | Bay Phillips"
        // meta={[
        //   { name: "description", content: pageDescription },
        //   { name: "keywords", content: pageKeywords },
        //   { name: "og:title", content: this.props.title },
        //   { name: "og:description", content: pageDescription },
        //   { name: "og:url", content: canonicalUrl },
        //   {
        //     name: "og:image",
        //     content: `https:${this.props.previewImageUrl}`,
        //   },
        //   { name: "twitter:card", content: "summary" },
        //   { name: "twitter:creator", content: "@bayphillips" },
        //   { name: "twitter:site", content: "@bayphillips" },
        //   { name: "twitter:image:alt", content: this.props.title },
        //   {
        //     name: "google-site-verification",
        //     content: googleSiteVerification,
        //   },
        // ]}
        // script={[
        //   {
        //     type: "application/ld+json",
        //     innerHTML: `${JSON.stringify(this.props.structuredDataJson)}`,
        //   },
        // ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
          />

          <script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"></script>
        </Helmet>
        {/* <NavigationBar
            location={this.props.location}
            menu={this.props.data.menu.edges[0]}
          /> */}

        <div>{this.props.children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}

// export default function Layout({ children }) {
//   return <div>{children}</div>;
// }

export default MainLayout;
