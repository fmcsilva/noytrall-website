import React, { Fragment, useState } from "react";
import DropALine from "../../components/Help/DropALine";
import Layout from "../../components/layout";

import Menu from "../../components/Menu";
import { HelpContextProvider } from "../../context/HelpContext";
import useHelpState from "../../context/HelpContext/hooks/useHelpState";
import axios from "axios";
import useHelpDispatch from "../../context/HelpContext/hooks/useHelpDispatch";
import { notification } from "../../utils/notification";

const Help: React.FC = () => {
  return (
    <Layout title="Help and Support. noytrall. Stay Smart.">
      <HelpContextProvider>
        <Menu />
        <Hero />
        <Content />
      </HelpContextProvider>
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

type tViewContentQuestion = {
  _id: string;
  question: string;
  answer: string[];
};

type tViewContent = {
  title?: string;
  questions: tViewContentQuestion[];
};

type tView = {
  view: string;
  content: tViewContent[];
};

const views: tView[] = [
  {
    view: "Guests",
    content: [
      {
        title: "Reservations",
        questions: [
          {
            _id: "1",
            question: "How can I start to use noytrall?",
            answer: [
              `To get started, sign-up through our app. It's free and easy to use. Of course, we will need to know more about you, but we will ask you for your data safely along the way.`,
            ],
          },
          {
            _id: "2",
            question: "Can I book from noytrall?",
            answer: [
              "Not yet, but we are working to help guests find the best sustainable travel options",
            ],
          },
          {
            _id: "3",
            question: "How can I access my reservation?",
            answer: [
              "As a guest, making a reservation with an accommodation, you should receive a confirmation e-mail. In addition, you will find an access code that will enable you to monitor your consumption and accompany your stay.",
            ],
          },
          {
            _id: "4",
            question: "I can't find my access code. What should I do?",
            answer: [
              "If you can't find your access code, you can ask your accommodation to resend it directly to you.",
            ],
          },
          {
            _id: "5",
            question:
              "How do I get more information about accommodation amenities",
            answer: [
              "On the accommodation page, you can find all the information about it. However, if you feel some information is missing, incomplete or wrong, please let us know.",
            ],
          },
        ],
      },
      {
        title: "Gamification & Rewards",
        questions: [
          {
            _id: "6",
            question: "How does the reward system work?",
            answer: [
              "We measure energy and water consumption and correspond them to greenhouse gas emissions. Then, we compare the consumptions and resulting emissions with the accommodation average values, tourism reference data, and the values required to achieve tourism sustainable goals. The results evaluate the impact of a stay. According to your impact, we will give you points. The more sustainable a stay is, the more points you will get. Then you can exchange your points for rewards.",
            ],
          },
          {
            _id: "7",
            question: "How can I exchange rewards using points?",
            answer: [
              `You can access sustainable products and services from
          selected partners from our marketplace. You can then
          exchange the points you have accumulated for those
          rewards.`,
            ],
          },
          {
            _id: "8",
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
          challenge guests to achieve sustainable goals, Nudges to
          guide guests towards sustainable behaviour, and
          Leaderboards where guests can see how they fare against
          others.`,
              ` Quests are an upcoming feature where accommodations and
          sustainable partners will challenge guests to perform
          specific tasks, like participating in a local event such
          as cleaning a beach or going for a bicycle tour.`,
              `In Competitions, a group of guests in an accommodation
          face the challenge of being the most sustainable. The
          winner will receive extra points and may also get direct
          rewards.`,
              `Nudges are an upcoming feature, where guests will receive
          tips and suggestions to improve their behaviour and
          actions to reduce consumption and environmental impact.`,
              `In Leaderboards, guests can compare their impact with
          friends and other guests locally and globally. Top guests
          every month are awarded extra points.`,
            ],
          },
        ],
      },
    ],
  },
  {
    view: "Accommodations",
    content: [
      {
        questions: [
          {
            _id: "9",
            question: "How does noytrall rate accommodations?",
            answer: [
              `The behaviour of each guest will contribute to changing an
  accommodation's average energy and water consumption and
  corresponding environmental impact, which will be used as
  a direct score to compare between accommodations. Adding
  to this score, we also evaluate the sustainability
  practices and equipment.`,
            ],
          },
        ],
      },
      {
        title: "About the service",
        questions: [
          {
            _id: "10",
            question: "Why we are creating a sustainable community?",
            answer: [
              `Sustainability is a balance between environmental,
economic and social concerns. In our mission to achieve a
more sustainable tourism, we increase transparency and
responsibility between guests and accommodations, but
tourism isn't just about guests and accommodations.
Therefore, we must expand these relationships to encompass
a sustainable community to achieve our goal. Local and
global partners can interact to create opportunities to
improve all pillars of tourism sustainability.`,
            ],
          },
          {
            _id: "11",
            question: "Is my accommodation suitable for noytrall services?",
            answer: [
              `Our mission is to help tourism transition towards
          sustainable tourism. Therefore we are looking for
          accommodations that are sustainable or that want to make
          this transition. Accommodations need to assume
          responsibility for nature and the surrounding environment,
          support the well-being of local people and favour a
          circular and proximity economy.`,
            ],
          },
          {
            _id: "12",
            question: "What services does noytrall provide to accommodations?",
            answer: [
              `Monitorização de energia, água, (resíduos e biomassa),
          Histórico de consumos e análise de dados, Perfil do
          consumidor, Gestão das operações de manutenção e recursos
          humanos, Consciencialização para o impacto ambiental e
          sustentabilidade, Novos modelos tarifários - green room.`,
            ],
          },
          {
            _id: "13",
            question: "Can noytrall develop specific solutions?",
            answer: [
              `noytrall develops carbon monitoring, tracking and
          offsetting solutions for tourism, travel and hospitality
          industries. The development of custom or specific
          solutions must be evaluated between the customer and
          noytrall, and it must fit within our sustainable vision of
          tourism.`,
            ],
          },
          {
            _id: "14",
            question: `Can noytrall services be integrated with third-party services?`,
            answer: [
              `Yes, you can find services we are integrated with
          <a href="#">here</a>. Customers can request new
          integrations directly with the support team.`,
            ],
          },
          {
            _id: "15",
            question: "How much will noytrall services cost?",
            answer: [
              `Dependendo das instalações do hotel. Visita técnica para
          aferir as necessidades específicas das instalações.
          Contact us.`,
            ],
          },
        ],
      },
      {
        title: "About the Sustainability Platform",
        questions: [
          {
            _id: "16",
            question: "What type of information does noytrall provide?",
            answer: [``],
          },
          {
            _id: `17`,
            question: `What type of information can be managed in the
          sustainability platform?`,
            answer: [],
          },
        ],
      },
      {
        title: "bout the gamification system",
        questions: [
          {
            _id: "18",
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
      challenge guests to achieve sustainable goals, Nudges to
      guide guests towards sustainable behaviour, and
      Leaderboards where guests can see how they fare against
      others.`,
              `Quests are an upcoming feature where accommodations and
      sustainable partners will challenge guests to perform
      specific tasks, like participating in a local event such
      as cleaning a beach or going for a bicycle tour.`,
              `In Competitions, a group of guests in an accommodation
      face the challenge of being the most sustainable. The
      winner will receive extra points and may also get direct
      rewards.`,
            ],
          },
          {
            _id: "19",
            question: "What type of rewards can be made available?",
            answer: [
              `As long as it's sustainable, any product or service from a
          partner is valid. Please contact us if you would like to
          include offers from your network.`,
            ],
          },
        ],
      },
    ],
  },
  {
    view: "Community Providers",
    content: [
      {
        questions: [
          {
            _id: "20",
            question: "Why we are creating a sustainable community?",
            answer: [
              `Sustainability is a balance between environmental,
    economic and social concerns. In our mission to achieve a
    more sustainable tourism, we increase transparency and
    responsibility between guests and accommodations, but
    tourism isn't just about guests and accommodations.
    Therefore, we must expand these relationships to encompass
    a sustainable community to achieve our goal. Local and
    global partners can interact to create opportunities to
    improve all pillars of tourism sustainability.`,
            ],
          },
          {
            _id: "21",
            question: "What is needed to become a sustainable partner?",
            answer: [
              `Anyone offering sustainable products or services can
          become a sustainable partner. Our team will work closely
          with partners to validate their sustainability. If you
          would like to transition to make your offer sustainable,
          our community will guide you in that process.`,
            ],
          },
          {
            _id: "22",
            question: "Can I bring my network to the community?",
            answer: [
              `Yes. Expanding the community is a great way to increase
          opportunities to be more sustainable. Please contact us
          through the email
          <a href="help@noytrall.com">help@noytrall.com</a>.`,
            ],
          },
        ],
      },
      {
        title: "About the gamification system",
        questions: [
          {
            _id: "23",
            question: "How does the gamification system work?",
            answer: [
              `The gamification system has Quests and Competitions to
      challenge guests to achieve sustainable goals, Nudges to
      guide guests towards sustainable behaviour, and
      Leaderboards where guests can see how they fare against
      others.`,
              `Quests are an upcoming feature where accommodations and
      sustainable partners will challenge guests to perform
      specific tasks, like participating in a local event such
      as cleaning a beach or going for a bicycle tour.`,
            ],
          },
          {
            _id: "24",
            question: "What type of rewards can be made available?",
            answer: [
              `As long as it's sustainable, any product or service from a
          partner is valid. Please contact us through
          <a href="help@noytrall.com">help@noytrall.com</a> if you
          would like to include offers from your network.`,
            ],
          },
        ],
      },
    ],
  },
];

const Content: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [activeView, setActiveView] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const { getQuestionInfo } = useHelpState();
  const { updateQuestionsInfo } = useHelpDispatch();

  const renderView = () => {
    const handleQuestionWasHelpful =
      (questionId: string, question: string) => () => {
        setLoading(true);
        axios
          .post(`website/support-question/${questionId}/helpful`, { question })
          .then((res) => {
            updateQuestionsInfo(res.data.data);
            notification("Noytrall appreciates your feedback.");
          })
          .catch((err) => {
            notification(
              "We couldn't process your feedback. Please try again."
            );
          })
          .finally(() => setLoading(false));
      };

    return views[activeView].content?.map(({ title, questions }, i) => {
      return (
        <div
          key={title}
          className={i === views.length ? "" : "uk-margin-medium-top"}
        >
          <h4>{title}</h4>
          <ul data-uk-accordion>
            {questions.map(({ _id, question, answer }) => {
              const info = getQuestionInfo(_id);
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
                                onClick={() => setSelectedQuestion(_id)}
                              >
                                drop us a line
                              </a>
                              . We'll try to help you.
                            </div>
                          </div>
                          <div>
                            <div className="uk-text-right@m">
                              <button
                                onClick={handleQuestionWasHelpful(
                                  _id,
                                  question
                                )}
                                className="uk-button uk-button-default uk-button-small uk-border-pill"
                                type="button"
                              >
                                Yes
                              </button>
                              <button
                                className="uk-button uk-button-default uk-button-small uk-border-pill"
                                type="button"
                                uk-toggle="target: #dropaline"
                                onClick={() => setSelectedQuestion(_id)}
                              >
                                No
                              </button>
                            </div>
                            <div className="uk-text-right@m uk-margin-small">
                              <span className="uk-text-muted uk-text-small">
                                {info ? info.helpful.total : "0"} found this
                                helpful
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
          <a
            className="uk-visible uk-hidden@s"
            style={{ paddingLeft: "5px", paddingRight: "5px" }}
            href="#"
            onClick={() => setActiveView(i)}
          >
            {view}
          </a>
          <a className="uk-visible@s" href="#" onClick={() => setActiveView(i)}>
            {view}
          </a>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <DropALine questionId={selectedQuestion} />
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
