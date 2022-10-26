import React, { Fragment } from "react";
import DownloadTheApp from "../../components/DownloadTheApp";

import Layout from "../../components/layout";

import Menu from "../../components/Menu";
import CommunityPartnerModal from "./CommunityPartnerModal";

const Providers: React.FC = () => {
  return (
    <Layout>
      <Menu />
      <Hero />
      <Content />
      <FillDetails />
      <FAQS />
      <DownloadTheApp />
      <CommunityPartnerModal />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport="offset-top: true; offset-bottom: 20"
    >
      <div id="hero" className="uk-margin-auto uk-padding-small uk-flex-1">
        <div className="uk-container uk-container-large">
          <div className="uk-text-center">
            <h1 className="uk-heading-medium">
              Be part of a huge and ever-growing community
            </h1>
            <h3 className="uk-margin-remove">
              Expose your business to the industry and reach customers from all
              over the world.
            </h3>
            <div className="uk-margin-large">
              <div
                className="uk-flex uk-flex-center uk-flex-middle uk-grid-margin-small"
                data-uk-grid
              >
                <div className="uk-width-auto">
                  <a
                    className="uk-button uk-button-primary uk-button-large uk-border-pill"
                    data-uk-toggle="target: #modal-apply-partner"
                  >
                    Apply to be a Community Partner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  return (
    <div id="maincontent" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-3@l" data-uk-grid>
          <div>
            <h3>Why are we building a community?</h3>
            <div className="uk-text-muted">
              <p>
                We are all part of the solution in response to the trending and
                fast-growing demand for sustainable travel experiences.
              </p>
              <p>
                To decrease a stay's environmental impact, we are educating and
                incentivizing guests towards sustainable practices and rewarding
                them through a gamified experience based on their behavior.
              </p>
              <p>
                Guests can then use those rewards throughout our community
                providers.
              </p>
            </div>
          </div>

          <div>
            <h3>Why should I be a community provider?</h3>
            <div className="uk-text-muted">
              <p>
                We believe in a sustainable way of life. By being part of a
                responsible and caring community you will be connected to
                millions of consumers who share the same values as you. As such,
                they seek products and services you may offer and thus you have
                the potential to boost sales.
              </p>
              <p>
                Increasing your visibility to the community and knowing your
                customers share the same views as yours it's a major plus.
              </p>
            </div>
          </div>

          <div>
            <h3>How can I take part of the community?</h3>
            <div className="uk-text-muted">
              <p>
                It's as easy as providing some information about your business.
                You can
                <a href="#providers-form" data-uk-scroll="offset: 150">
                  find the form below
                </a>
                .
              </p>
              <p>
                We require that you represent a sustainable-based organization,
                and you must be able to offer guests some gratification, for
                example, a discount.
              </p>
              <p>
                We will get in touch and validate you as our partner, so you
                will be visible to the community as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FillDetails: React.FC = () => {
  return (
    <Fragment>
      <a id="providers-form"></a>
      <div id="" className="uk-section uk-section-muted">
        <div className="uk-container uk-container-large">
          <div className="uk-text-center">
            <h3>Fill in some details in the form below.</h3>
            <p className="uk-text-muted">
              In order to be part of a sustainable community and partnering with
              us, you must tell us a little about your business.
            </p>
            <a
              className="uk-button uk-button-primary uk-button-large uk-border-pill"
              uk-toggle="target: #modal-apply-partner"
            >
              Apply to be a community partner
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const FAQS: React.FC = () => {
  return (
    <div id="faqs" className="uk-section uk-section-default">
      <div className="uk-container uk-container-small">
        <div className="uk-margin-large">
          <div className="uk-text-center">
            <h1 className="uk-heading-small">Frequently asked questions.</h1>
            <p className="uk-text-large">You ask. We answer.</p>
          </div>
          <div className="uk-width-1-1@m uk-align-center">
            <ul uk-accordion="multiple: true">
              <li>
                <a className="uk-accordion-title" href="#">
                  There are no noytrall-enabled hotels near my location. Can I
                  still become a partner?
                </a>
                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    Yes, of course. All noytrall community can shop at every
                    partner without any restrictions. Geographic or otherwise.
                    Your customers may be from another city or region.
                  </p>
                </div>
              </li>
              <li>
                <a className="uk-accordion-title" href="#">
                  Can I manage my offers over time?
                </a>
                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    As a noytrall community provider, you will have access to a
                    dedicated area in our platform, with no costs. From there
                    you can manage your offers and other business information.
                  </p>
                </div>
              </li>
              <li>
                <a className="uk-accordion-title" href="#">
                  Is it free to join the community?
                </a>
                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    Yes it is. Absolutly free. And by joining you get instant
                    access to our sustainable-driven network.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p>
          You can find more helpful topics on Community Partner support in our
          <a href="/help"> help and support</a> page.
        </p>
      </div>
    </div>
  );
};

export default Providers;
