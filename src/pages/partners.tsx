import React from "react";
import DownloadTheApp from "../components/DownloadTheApp";

import Layout from "../components/layout";

import Menu from "../components/Menu";

const Partners: React.FC = () => {
  return (
    <Layout>
      <Menu/>
      <Hero />
      <Content />
      <DownloadTheApp />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-padding-remove uk-flex uk-flex-center uk-flex-middle"
      data-uk-height-viewport="offset-bottom: 30"
    >
      <div className="uk-container uk-container-small">
        <div id="hero" className="uk-margin-auto uk-padding-large">
          <div>
            <h1 className="uk-heading-medium">Partners</h1>
            <h1 className="uk-margin-remove">Be part of a huge community.</h1>
            <h3>
              Expose your business to the industry and reach customers from all
              over the world.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  return (
    <div id="" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-3 uk-margin-large" data-uk-grid>
          <div>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
