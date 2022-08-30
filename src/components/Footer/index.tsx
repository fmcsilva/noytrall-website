import React from "react";

import iapmei from "../../images/logo-iapmei-white.png";
import portugal2020 from "../../images/logo-portugal2020-white.png";

const Footer: React.FC = () => {
  return (
    <footer id="footer">
      <div className="uk-section uk-section-secondary">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-1-4@m uk-grid-margin" data-uk-grid>
            <div>
              <ul className="uk-list uk-list-collapse">
                <li>
                  <a className="" href="/">
                    For Guests
                  </a>
                </li>
                <li>
                  <a className="" href="/hotels">
                    For Hotels
                  </a>
                </li>
                <li>
                  <a className="" href="/providers">
                    For Providers
                  </a>
                </li>
                <li>
                  <a className="" href="/help">
                    Help and Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="uk-list uk-list-collapse">
                <li>
                  <a className="" href="/aboutus">
                    About us
                  </a>
                </li>
                <li>
                  <a className="" href="/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <strong>noytral technologies</strong>
              <br />
              Rua Pedro Nunes
              <br />
              3030-199 Coimbra
            </div>
            <div>
              <div>
                <a href="#">
                  <i className="lab la-lg la-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-twitter"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-instagram"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-youtube"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-medium-m"></i>
                </a>
                <a href="#">
                  <i className="lab la-lg la-linkedin-in"></i>
                </a>
              </div>
              <div>
                <a className="" href="info@noytrall.pt">
                  info@noytrall.pt
                </a>
              </div>
            </div>
          </div>
          <div className="uk-margin-large" data-uk-grid>
            <div>
              <img
                data-src={iapmei}
                width="100"
                height=""
                alt="iapmei"
                data-uk-img
              />
            </div>
            <div>
              <img
                style={{ background: "none" }}
                data-src={portugal2020}
                width="350"
                height=""
                alt="portugal2020"
                data-uk-img
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
