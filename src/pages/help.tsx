import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import HELP_LIST, { tHelpContent } from "../data/helpQuestions";

const Help: React.FC = () => {
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
            <h1 className="uk-heading-medium">You ask. We answer.</h1>
            <h2 className="uk-margin-remove">How can we help you?</h2>
            <div className="uk-margin-large">
              <form className="uk-form-stacked">
                <div className="uk-margin">
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-search"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-large uk-border-pill"
                      type="text"
                      placeholder="search for answers..."
                    />
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
        <div>
          <div>
            <h3 className="uk-card-title">{title}</h3>
            <ul className="uk-list uk-list-collapse">
              {qAndA &&
                qAndA.map(({ question }) => {
                  return (
                    <li>
                      <a href={link}>{question}</a>
                    </li>
                  );
                })}
              {topics && (
                <div>
                  {topics.map(({ topic }) => {
                    return (
                      <li>
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
          {renderItems()}
        </div>
      </div>
    </div>
  );
};

export default Help;
