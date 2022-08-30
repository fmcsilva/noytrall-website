import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import HELP_LIST, { tHelpContent } from "../data/helpQuestions";

import Menu from "../components/Menu";

const Help: React.FC = () => {
  return (
    <Layout>
      <Menu/>
      <Hero />
      <Content />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle"
      data-uk-height-viewport="offset-top: true; offset-bottom: 20"
    >
      <div id="hero" className="uk-margin-auto uk-padding-large uk-flex-1">
        <div className="uk-container uk-container-large">
          <div className="">
            <h1 className="uk-heading-medium">You ask. We answer.</h1>
            <h2 className="uk-margin-remove">How can we help you?</h2>
            <div className="uk-width-1-1@s uk-width-1-1@m uk-width-2-3@l uk-margin-large">
              <form
                action="#"
                id="search-help-form"
                className="uk-form-stacked"
              >
                <div className="uk-grid-small" data-uk-grid>
                  <div className="uk-width-expand@s uk-first-column">
                    <div className="uk-inline uk-width-1-1">
                      <span className="uk-form-icon">
                        <i className="las la-lg la-search"></i>
                      </span>
                      <input
                        id="search-help"
                        type="text"
                        className="uk-input uk-form-large uk-width-1-1 uk-border-pill"
                        placeholder="search for answers..."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  const [list, setList] = useState<tHelpContent[]>([]);

  useEffect(() => {
    setList(HELP_LIST);
  }, []);

  const renderItems = () => {
    return list.map(({ title, qAndA, link, topics }) => {
      return (
        <div key={title}>
          <div>
            <h3 className="">{title}</h3>
            <ul className="uk-list">
              {qAndA &&
                qAndA.map(({ question }) => {
                  return (
                    <li key={question}>
                      <a href={link}>{question}</a>
                    </li>
                  );
                })}
              {topics && (
                <div>
                  {topics.map(({ topic }) => {
                    return (
                      <li key={topic}>
                        <a href={link}>{topic}</a>
                      </li>
                    );
                  })}
                </div>
              )}
            </ul>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-2@m" data-uk-grid="masonry: true">
          {/* {renderItems()} */}
          <div>
            <div>
              <h3 className="">Guests</h3>
              <ul className="uk-list">
                <li>
                  <a href="/help-details-guests">Reservations</a>
                </li>
                <li>
                  <a href="/help-details-guests">Rewards</a>
                </li>
                <li>
                  <a href="/help-details-guests">Tariffs</a>
                </li>
                <li>
                  <a href="/help-details-guests">Payments</a>
                </li>
                <li>
                  <a href="/help-details-guests">Security and privacy</a>
                </li>
                <li>
                  <a href="/help-details-guests">Accommodation conditions</a>
                </li>
                <li>
                  <a href="/help-details-guests">Extra amenities</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="">Accomodations</h3>
              <ul className="uk-list">
                <li>
                  <a href="/help-details-hotels">About the service</a>
                </li>
                <li>
                  <a href="/help-details-hotels">
                    About the Sustainability Platform
                  </a>
                </li>
                <li>
                  <a href="/help-details-hotels">
                    About the gamification system
                  </a>
                </li>
                <li>
                  <a href="/help-details-hotels">Green tariffs</a>
                </li>
                <li>
                  <a href="/help-details-hotels">About the data collected</a>
                </li>
                <li>
                  <a href="/help-details-hotels">About the price</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="">Community Providers</h3>
              <ul className="uk-list">
                <li>
                  <a href="/help-details-partners">
                    What is a sustainable partner?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    What is needed to become a sustainability partner?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    What is a sustainable community?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    Why is it essential to create a sustainable community?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    How does the reward system work?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    What are the benefits of the reward system?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    What type of rewards can I propose as a sustainability
                    partner?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    Can I propose hotels for partnerships?
                  </a>
                </li>
                <li>
                  <a href="/help-details-partners">
                    Can I propose sustainability partners?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="uk-card-title">About noytrall</h3>
              <ul className="uk-list">
                <li>
                  <a href="/help-details-about">What does noytrall do?</a>
                </li>
                <li>
                  <a href="/help-details-about">How does it work?</a>
                </li>
                <li>
                  <a href="/help-details-about">What are the benefits?</a>
                </li>
                <li>
                  <a href="/help-details-about">Who works with noytrall?</a>
                </li>
                <li>
                  <a href="/help-details-about">
                    How does noytrall rate hotels?
                  </a>
                </li>
                <li>
                  <a href="/help-details-about">
                    How does noytrall rate sustainable partners?
                  </a>
                </li>
                <li>
                  <a href="/help-details-about">
                    How does noytrall makes money?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h3 className="">Privacy</h3>
              <ul className="uk-list">
                <li>
                  <a href="/help-details-privacy">
                    What type of data does noytrall collect?
                  </a>
                </li>
                <li>
                  <a href="/help-details-privacy">
                    Why does noytrall need data from guests?
                  </a>
                </li>
                <li>
                  <a href="/help-details-privacy">
                    How does noytrall guarantee guest privacy?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
