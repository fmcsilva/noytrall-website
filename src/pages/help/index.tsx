import React, { Fragment, useEffect, useState } from "react";
import DropALine from "../../components/DropALine";
import DropLineModal from "../../components/DropALine/DropLineModal";
import Layout from "../../components/layout";

import Menu from "../../components/Menu";
import views from "./data";

const Help: React.FC = () => {
  return (
    <Layout>
      <Menu />
      <Hero />
      <Content />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-flex uk-flex-center uk-flex-middle"
      uk-height-viewport="offset-top: true; offset-bottom: 20"
    >
      <div id="hero" className="uk-margin-auto uk-padding-large uk-flex-1">
        <div className="uk-container uk-container-large">
          <div className="uk-text-center">
            <h1 className="uk-heading-medium">You ask. We answer.</h1>
            <h2 className="uk-margin-remove">How can we help you?</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  const [activeView, setActiveView] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const renderView = () => {
    return views[activeView].content?.map(({ title, questions }, i) => {
      return (
        <div
          key={title}
          className={i === views.length ? "" : "uk-margin-medium-top"}
        >
          <h4>{title}</h4>
          <ul data-uk-accordion>
            {questions.map(({ question, answer }) => {
              return (
                <li key={question}>
                  <a
                    className="uk-accordion-title uk-text-default uk-text-primary"
                    href="#"
                  >
                    {question}
                  </a>
                  <div className="uk-accordion-content">
                    {answer.map((paragraph) => (
                      <p
                        key={paragraph}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      ></p>
                    ))}

                    <div>
                      <div data-uk-alert>
                        <div className="uk-child-width-1-2@m" data-uk-grid>
                          <div>
                            <div className="uk-text-left">
                              <span className="uk-text-bold">
                                Did you find what you were looking for?
                              </span>
                              <br />
                              If not{" "}
                              <a
                                data-uk-toggle="target: #dropaline"
                                onClick={() => setSelectedQuestion(question)}
                              >
                                drop us a line
                              </a>
                              . We'll try to help you.
                            </div>
                          </div>
                          <div>
                            <div className="uk-text-right@m">
                              <button
                                className="uk-button uk-button-default uk-button-small uk-border-pill"
                                type="button"
                              >
                                Yes
                              </button>
                              <button
                                className="uk-button uk-button-default uk-button-small uk-border-pill"
                                type="button"
                                uk-toggle="target: #dropaline"
                                onClick={() => setSelectedQuestion(question)}
                              >
                                No
                              </button>
                            </div>
                            <div className="uk-text-right@m uk-margin-small">
                              <span className="uk-text-muted uk-text-small">
                                X found this helpful
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  const renderSegments = () => {
    return views.map(({ view }, i) => {
      return (
        <li
          key={view}
          {...(activeView === i ? { className: "uk-active" } : {})}
        >
          <a href="#" onClick={() => setActiveView(i)}>
            {view}
          </a>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <DropALine question={selectedQuestion} />
      <div id="maincontent" className="uk-section uk-section-default">
        <div className="uk-container uk-container-xsmall">
          <div>
            <ul className="uk-width-expand" data-uk-tab>
              {renderSegments()}
            </ul>
            <ul className="uk-margin">{renderView()}</ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Help;
