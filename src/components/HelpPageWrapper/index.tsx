import React from "react";
import HELP_LIST, {
  tHelpContent,
  tHelpQuestion,
} from "../../data/helpQuestions";

import { useLocation } from "@reach/router";

type tProps = {
  data: tHelpContent;
  children?: any;
};

const HelpPageWrapper: React.FC<tProps> = ({ children, data }) => {
  const { title, qAndA, topics, relatedArticles } = data;

  const renderQAndA = () => {
    if (!qAndA) return null;
    return qAndA.map(({ question, answer }) => {
      return (
        <li key={question}>
          <a className="uk-accordion-title" href="#">
            {question}
          </a>
          <div className="uk-accordion-content">
            {typeof answer === "string" ? (
              <p>{answer}</p>
            ) : (
              <>
                {answer.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </>
            )}
            <DidYouFindWhatYouWereLookingFor />
          </div>
        </li>
      );
    });
  };

  const renderTopics = () => {
    if (!topics) return null;
    return topics.map(({ topic, qAndA }) => {
      return (
        <div key={topic}>
          <h3 className="uk-heading-bullet">{topic}</h3>
          <ul data-uk-accordion>
            {qAndA.map(({ question, answer }) => {
              return (
                <li key={question}>
                  <a className="uk-accordion-title" href="#">
                    <span className="uk-h4">{question}</span>
                  </a>
                  <div className="uk-accordion-content">
                    {typeof answer === "string" ? (
                      <p>{answer}</p>
                    ) : (
                      <>
                        {answer.map((text) => (
                          <p key={text}>{text}</p>
                        ))}
                      </>
                    )}
                    <DidYouFindWhatYouWereLookingFor />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  };

  const renderRelatedArticles = () => {
    if (!relatedArticles) return null;

    return (
      <div className="uk-margin-large">
        <h2>Related articles</h2>
        <ul className="uk-list">
          {relatedArticles.map(({ title, link }) => (
            <li>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="" className="uk-section uk-section-default uk-padding-small">
      <div className="uk-container uk-container-large">
        <div className="" data-uk-grid>
          <SideNavbar />
          <div className="uk-width-2-3">
            <SearchForm />
            <div>
              <div>
                <h2>{title}</h2>
                <ul data-uk-accordion>{renderQAndA()}</ul>
              </div>
              <div>{renderTopics()}</div>
              {renderRelatedArticles()}
            </div>
          </div>
        </div>
      </div>
      <DropLineModal />
    </div>
  );
};

const SideNavbar: React.FC = () => {
  const { pathname } = useLocation();
  const renderContent = () => {
    return HELP_LIST.map(({ topics, qAndA, title, link }) => (
      <li
        key={title}
        className={`uk-parent ${pathname === link ? "uk-open" : ""}`}
      >
        <a href="#">{title}</a>
        <ul className="uk-nav-sub">
          {qAndA &&
            qAndA.map(({ question }) => (
              <li key={question}>
                <a href={link}>{question}</a>
              </li>
            ))}
          {topics &&
            topics.map(({ topic }) => (
              <li key={topic}>
                <a href={link}>{topic}</a>
              </li>
            ))}
        </ul>
      </li>
    ));
  };

  return (
    <div className="uk-width-1-3">
      <ul
        className="uk-nav-default uk-nav-parent-icon"
        data-uk-nav="multiple: true"
      >
        {renderContent()}
      </ul>
    </div>
  );
};

const DidYouFindWhatYouWereLookingFor: React.FC = () => {
  return (
    <div className="uk-margin">
      <div className="uk-placeholder">
        <div className="uk-child-width-1-2 uk-flex-middle" data-uk-grid>
          <div>
            <div className="uk-text-left">
              <span className="uk-text-bold">
                Did you find what you were looking for?
              </span>
              <br />
              If not{" "}
              <a type="button" uk-toggle="target: #dropaline">
                drop us a line
              </a>
              . We'll try to help you.
            </div>
          </div>
          <div>
            <div className="uk-text-right">
              <button className="uk-button uk-button-default" type="button">
                Yes
              </button>
              <button
                className="uk-button uk-button-default"
                type="button"
                uk-toggle="target: #dropaline"
              >
                No
              </button>
            </div>
            <div className="uk-text-right">
              <span className="uk-text-muted uk-text-small">
                1 out of 4 found this helpful
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchForm: React.FC = () => {
  return (
    <div
      className="uk-alert-primary"
      data-uk-alert
      data-uk-sticky="offset: 90; show-on-up: true"
    >
      <form className="uk-form-stacked">
        <div className="">
          <div className="uk-form-controls">
            <div className="uk-inline uk-width-expand">
              <span className="uk-form-icon">
                <i className="las la-lg la-search"></i>
              </span>
              <input
                className="uk-input uk-width-1-1"
                type="text"
                placeholder="search for answers"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const DropLineModal: React.FC = () => {
  return (
    <div id="dropaline" data-uk-modal="esc-close: false; bg-close: false">
      <div className="uk-modal-dialog">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
        ></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Get support</h2>
        </div>
        <div className="uk-modal-body">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label">Name</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                description
              </div>
              <div className="uk-form-controls">
                <input className="uk-input" type="text" placeholder="Input" />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">What can we do for you?</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                Please describe your question as thoroughly as possible.
              </div>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea uk-resize-vertical"
                  rows={10}
                  placeholder="Describe your problem."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="uk-modal-footer uk-text-right">
          <a
            href="#modal-simulator-1-4"
            className="uk-button uk-button-link uk-modal-close uk-margin-right"
          >
            Cancel
          </a>
          <a className="uk-button uk-button-primary">Send your question</a>
        </div>
      </div>
    </div>
  );
};

export default HelpPageWrapper;
