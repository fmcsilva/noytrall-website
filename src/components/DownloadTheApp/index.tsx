import React from "react";

import googleStoreLogo from "../../images/logo-google-store.png";
import appleStoreLogo from "../../images/logo-apple-store.png";

const DownloadTheApp: React.FC = () => {
  return (
    <div id="download" className="uk-section uk-section-primary">
      <div className="uk-container uk-container-large">
        <div className="uk-text-center">
          <h1 className="uk-margin-large uk-margin-remove-bottom">
            Download our App and start saving as you travel
          </h1>
          <p>Our app is compatible with Android and iPhone.</p>
          <div className="uk-child-width-1-2" data-uk-grid>
            <div>
              <a href="#">
                <img
                  className="uk-align-right"
                  data-src={googleStoreLogo}
                  width="150"
                  height=""
                  alt="Download nøytrall app at Google Play Store"
                  data-uk-img
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  className="uk-align-left"
                  data-src={appleStoreLogo}
                  width="150"
                  height=""
                  alt="Download nøytrall app at App Store"
                  data-uk-img
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadTheApp;
