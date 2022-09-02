import React, { useState } from "react";
import HELP_LIST, {
  tHelpContent,
  tHelpQuestion,
} from "../../data/helpQuestions";

import { useLocation } from "@reach/router";
import { iQuestion } from "../../models/question";
import axios from "axios";
import UIkit from "uikit";
import { notification } from "../../utils/notification";
import DropLineModal from "./DropLineModal";

type tProps = {
  data: tHelpContent;
  children?: any;
};

const HelpPageWrapper: React.FC<tProps> = ({ data }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<null | string>(null);
  const { title, qAndA, topics, relatedArticles } = data;

  console.log("selectedQuestion", selectedQuestion);
  const onClickQuestion = (question: string) => () => {
    setSelectedQuestion((prev) => (prev === question ? null : question));
  };

  const renderQAndA = () => {
    if (!qAndA) return null;
    return qAndA.map(({ question, answer }) => {
      return (
        <li key={question}>
          <a
            className="uk-accordion-title"
            href="#"
            onClick={onClickQuestion(question)}
          >
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
            <DidYouFindWhatYouWereLookingFor {...{ question }} />
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
                  <a
                    className="uk-accordion-title"
                    onClick={onClickQuestion(question)}
                    href="#"
                  >
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
                    <DidYouFindWhatYouWereLookingFor question={question} />
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
            <li key={title}>
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
      <DropLineModal question={selectedQuestion} />
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

type tDidYouFindWhatYouWereLookingForProps = {
  question: iQuestion;
};
const DidYouFindWhatYouWereLookingFor: React.FC<
  tDidYouFindWhatYouWereLookingForProps
> = ({ question }) => {
  const handleQuestionHasHelpful = () => {
    axios
      .post(`website/support-question/helpful`, { question })
      .then((res) => {
        console.log("res", res);
        notification("Noytrall appreciates your feedback.", {
          status: "success",
        });
      })
      .catch((err) => {
        console.log("err", err);
        notification("We couldn't save your feedback. Please try again.", {
          status: "danger",
        });
      });
  };

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
              <button
                className="uk-button uk-button-default"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleQuestionHasHelpful();
                }}
              >
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

export default HelpPageWrapper;
