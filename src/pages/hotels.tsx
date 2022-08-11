import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Layout from "../components/Layout";

import metrics from "../images/Metrics-bro.png";
import stats from "../images/Site Stats-bro.png";
import awards from "../images/Awards-bro.png";
import socialMedia from "../images/Social media-bro.png";
import happyEarth from "../images/Happy Earth-bro.png";
import pipeline from "../images/Pipeline maintenance-bro.png";

const Hotels: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Content />
      <Footer />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-padding-remove uk-flex uk-flex-center uk-flex-middle"
      data-uk-height-viewport="offset-bottom: 30"
    >
      <div id="hero" className="uk-margin-auto uk-padding-large uk-flex-1">
        <div className="uk-container uk-container-large">
          <div>
            <h1 className="uk-heading-medium">Be smart. Be noytrall.</h1>
            <h2 className="uk-margin-remove">
              Until now there was no accurate to measure guests consumption.
              <br />
              Unknown consumption is unknown costs.
            </h2>
            <div className="uk-margin-large">
              <a
                className="uk-button uk-button-primary uk-button-large uk-border-pill"
                href="#modal-simulator-stack"
                data-toggle
              >
                Estimate your savings now
              </a>
            </div>
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
        <div className="uk-margin-large">
          <h1 className="uk-heading-medium uk-text-center">
            The sustainable platform to reduce hotel costs.
          </h1>
        </div>
      </div>

      <div id="learnMore" data-uk-modal>
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Energy consumption monitoring</h2>
          </div>
          <div className="uk-modal-body">
            <div className="" data-uk-grid>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div>
                <img
                  src="images/undraw_visual_data_re_mxxo.png"
                  width=""
                  height=""
                  data-uk-img
                />
              </div>
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <button
              className="uk-button uk-button-default uk-border-pill uk-modal-close"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="uk-container uk-container-large uk-margin-large">
        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Measure</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Measure room consumption.
            </h1>
            <div>
              <h3>Precise, remote and automated monitoring.</h3>
              <p className="">
                Monitor <strong>water</strong> and <strong>energy</strong>{" "}
                consumption 24/7, whether the room is free or occupied. See what
                is happening in <strong>real-time</strong> and operate on
                cloud-based IoT-connected room data.
              </p>
            </div>
          </div>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={metrics}
              width="500"
              height=""
              alt="Precise, remote and automated monitoring."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={stats}
              width="500"
              height=""
              alt="Improve hotel operation efficiency."
              data-uk-img
            />
          </div>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Manage</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Improve hotel operation efficiency.
            </h1>
            <div>
              <h3>Ensure effective resource management.</h3>
              <p>
                Build personalized reusable reports within any time frame.
                Reduce water and energy consumption and lower operating costs.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Interact</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Gamify guests' impact.
            </h1>
            <div>
              <h3 className="">Establish strong and durable relationships.</h3>
              <p>
                Interact with guests based on their behavior and award them for
                being sustainable. Challenge your guests and create group events
                to boost engagement.
              </p>
            </div>
          </div>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={awards}
              width="500"
              height=""
              alt="Gamify guests' impact."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={socialMedia}
              width="500"
              height=""
              alt="Revolutionize guests' sustainable experience."
              data-uk-img
            />
          </div>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Transform</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Revolutionize guests' sustainable experience.
            </h1>
            <div>
              <h3 className="">Access a network of community partners.</h3>
              <p>
                Build trust and loyalty with guests that identify with your
                vision. Access a vast community of sustainable business offers
                and grant your guests a truly sustainable experience from our
                partners.
              </p>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Improve</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Achieve sustainability goals.
            </h1>
            <div>
              <h3>Implement the hotel's ESG goals. Reduce your footprint.</h3>
              <p>
                We help you accomplish environmental criteria results. Assess
                stays impact as you reduce carbon emissions.
              </p>
            </div>
          </div>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={happyEarth}
              width="500"
              height=""
              alt="Achieve sustainability goals."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div>
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={pipeline}
              width="500"
              height=""
              alt="Preventive maintenance."
              data-uk-img
            />
          </div>
          <div>
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Prevent</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Preventive maintenance.
            </h1>
            <div>
              <h3>Evaluate asset performance to prevent future damages.</h3>
              <p>
                Preventive maintenance is designed to help determine the
                condition of in-service equipment in order to assess when
                maintenance should be performed. This approach promises cost
                savings over routine or time-based preventive maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
