import React from "react";

import metrics from "../../images/Metrics-bro.png";
import stats from "../../images/Site Stats-bro.png";
import awards from "../../images/Awards-bro.png";
import socialMedia from "../../images/Social media-bro.png";
import happyEarth from "../../images/Happy Earth-bro.png";
import pipeline from "../../images/Pipeline maintenance-bro.png";
import riotc5 from "../../images/rio-do-prado-tc-5.jpg";
import riotc6 from "../../images/rio-do-prado-tc-6.jpg";
import riotc4 from "../../images/rio-do-prado-tc-4.jpg";

import {
  Chart,
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
  registerables,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import Menu from "../../components/Menu";
import EstimateSavingsModal from "../../components/Hotel/EstimateSavingsModal";
import MainLayout from "../../components/layout";

Chart.register(...registerables);

const Hotels: React.FC = () => {
  return (
    <MainLayout title="For Accommodations. noytrall. Stay Smart.">
      <Menu />
      <EstimateSavingsModal />
      <Hero />
      <Content />
      <TrustContent />
      <Interaction />
      <FAQS />
      <GetStarted />
    </MainLayout>
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
            <h1 className="uk-heading-medium">Reduce hotel costs.</h1>

            <h3 className="uk-margin-remove">
              Accurate measure room water and energy consumption.
            </h3>

            <div className="uk-margin-large">
              <div
                className="uk-flex uk-flex-center uk-flex-middle uk-grid-margin-small"
                data-uk-grid
              >
                <div className="uk-width-auto">
                  <a
                    className="uk-button uk-button-primary uk-button-large uk-border-pill"
                    data-uk-toggle="target: #modal-book-demo-calendar"
                  >
                    Book a demo
                  </a>
                </div>

                <div className="uk-width-auto">
                  <a
                    className="uk-button uk-button-default uk-button-large uk-border-pill"
                    data-uk-toggle="target: #modal-simulator-stack"
                  >
                    Estimate savings
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
        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Measure</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Measure room water and energy consumption.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Precise, remote and automated monitoring.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                Monitor <strong>water</strong> and <strong>energy</strong>{" "}
                consumption 24/7, whether the room is free or occupied. See what
                is happening in<strong> real-time</strong> and operate on
                cloud-based IoT-connected room data.
              </h4>
            </div>
          </div>

          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={metrics}
              width="500"
              height=""
              alt="Precise, remote and automated monitoring."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={stats}
              width="500"
              height=""
              alt="Improve hotel operation efficiency."
              data-uk-img
            />
          </div>

          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Manage</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Improve hotel operation efficiency.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Ensure effective resource management.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                Build personalized reusable reports within any time frame.
                Reduce water and energy consumption and lower operating costs.
              </h4>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Interact</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Interact on guests consumption behavior.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Establish strong and durable relationships.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                Interact with guests based on their behavior and award them for
                being sustainable. Challenge your guests and create group events
                to boost engagement.
              </h4>
            </div>
          </div>

          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={awards}
              width="500"
              height=""
              alt="Gamify guests' impact."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={socialMedia}
              width="500"
              height=""
              alt="Revolutionize guests' sustainable experience."
              data-uk-img
            />
          </div>

          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Transform</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Enhance guests' sustainable experience.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Access an ever-growing sustainable community.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                Build trust and loyalty with guests that identify with your
                vision. Access a vast community of sustainable business offers
                and grant your guests a truly sustainable experience from our
                partners.
              </h4>
            </div>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Improve</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Achieve sustainability goals.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Match sustainability labels certifications. Reduce your
                footprint.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                We help you accomplish environmental criteria results. Assess
                stays impact as you reduce carbon emissions.
              </h4>
            </div>
          </div>

          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={happyEarth}
              width="500"
              height=""
              alt="Achieve sustainability goals."
              data-uk-img
            />
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={pipeline}
              width="500"
              height=""
              alt="Preventive maintenance."
              data-uk-img
            />
          </div>

          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Prevent</span>
            </div>

            <h1 className="uk-heading-small uk-margin-remove-top">
              Preventive maintenance.
            </h1>

            <div>
              <h2 className="uk-text-muted">
                Evaluate asset performance to prevent future damages.
              </h2>

              <h4 className="uk-text-muted uk-margin-remove">
                Preventive maintenance is designed to help determine the
                condition of in-service equipment in order to assess when
                maintenance should be performed. This approach promises cost
                savings over routine or time-based preventive maintenance.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrustContent: React.FC = () => {
  return (
    <div id="trustcontent" className="uk-section uk-section-muted">
      <div className="uk-container uk-container-large">
        <h1 className="uk-heading-medium uk-text-center uk-margin-large">
          The sustainability platform to reduce hotel water and energy costs.
        </h1>

        <div className="uk-width-1-2@m uk-width-1-3@l uk-align-center">
          <div className="uk-margin-medium">
            <i className="las la-8x la-network-wired"></i>

            <h2 className="uk-margin-remove-top">Smart rooms IoT solution</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              <strong>noytrall</strong> smart room solution for hotels is an IoT
              system to monitor rooms' water and energy consumption with SaaS
              access to a cloud-based management platform.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-file-invoice-dollar"></i>

            <h2 className="uk-margin-remove-top">Improve cost-effectiveness</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              <strong>noytrall</strong> provides real-time water and energy
              consumption monitoring and a real-time web-based interaction
              channel with guests, ensuring lower operating costs and increased
              profitability.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-chart-pie"></i>

            <h2 className="uk-margin-remove-top">Powerful data analytics</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              <strong>noytrall</strong> supplies business intelligence,
              collecting and accessing all room water and energy data,
              generating reports and allowing to act upon meaningful
              information.
            </h4>
          </div>
        </div>
      </div>

      <div
        className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-center-center uk-background-fixed uk-margin-large"
        data-src={riotc5}
        uk-img="loading: eager"
      ></div>

      <div className="uk-container uk-container-large">
        <div className="uk-width-1-2@m uk-width-1-3@l uk-align-center">
          <div className="uk-margin-medium">
            <i className="las la-8x la-stopwatch"></i>

            <h2 className="uk-margin-remove-top">In-house installation</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              Install each room in less than 60 minutes using your maintenance
              staff without holding service. You can still have the assistance
              of our installation booklet, video tutorials, technical support
              team or even online live learning sessions.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-hands-helping"></i>

            <h2 className="uk-margin-remove-top">On-site supervision</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              Request our technical support team and we will provide fully
              comprehensive installation assistance on-site.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-magic"></i>

            <h2 className="uk-margin-remove-top">Fully automated</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              After installation, the room is now a smart room and fully
              automated, operating without any hotel staff involvement.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-concierge-bell"></i>

            <h2 className="uk-margin-remove-top">PMS integration</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              Manage your stays and allow your guests to monitor their
              consumptions by having your smart rooms integrated with your PMS.
              <i
                className="las la-lx la-info-circle uk-text-primary"
                uk-tooltip="title: see availibitity; pos: top-left"
              ></i>
            </h4>
          </div>
        </div>
      </div>

      <div
        className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-center-center uk-background-fixed uk-margin-large"
        data-src={riotc6}
        uk-img="loading: eager"
      ></div>

      <div className="uk-container uk-container-large">
        <div className="uk-width-1-2@m uk-width-1-3@l uk-align-center">
          <div className="uk-margin-medium">
            <i className="las la-8x la-boxes"></i>

            <h2 className="uk-margin-remove-top">At your own pace</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              Deploy <strong>noytrall</strong> smart room technology to any
              number of rooms, from small hotels to large hotel groups. Decide
              how many rooms you will start with.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-crown"></i>

            <h2 className="uk-margin-remove-top">Lifetime warranty</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              During the subscription period, <strong>noytrall</strong> offers
              lifetime warranty for all monitoring devices. In addiction, all
              the software structural updates are also fully included and
              covered.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-hand-holding-usd"></i>

            <h2 className="uk-margin-remove-top">Fast return on investment</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              <strong>noytrall</strong> smart room technology pays itself in 9
              to 12 months, or less. The more rooms are converted the less time
              you take .
            </h4>
          </div>
        </div>
      </div>

      <div
        className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-center-center uk-background-fixed uk-margin-large"
        data-src={riotc4}
        uk-img="loading: eager"
      ></div>

      <div className="uk-container uk-container-large">
        <div className="uk-width-1-2@m uk-width-1-3@l uk-align-center">
          <div className="uk-margin-medium">
            <i className="las la-8x la-user-cog"></i>

            <h2 className="uk-margin-remove-top">
              Performance Success Assistance
            </h2>

            <h4 className="uk-margin-remove uk-text-muted">
              From onboarding, <strong>noytrall</strong> will assign you a
              Performance Success Specialist to assess and assist you in
              optimizing your business performance, ensuring you use the system
              features thoroughly and achieve the best result.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-headset"></i>

            <h2 className="uk-margin-remove-top">Technical support</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              <strong>noytrall</strong>'s technical team is always available
              assuring your system is always up and running smoothly.
            </h4>
          </div>

          <div className="uk-margin-medium">
            <i className="las la-8x la-users"></i>

            <h2 className="uk-margin-remove-top">Human-centered technology</h2>

            <h4 className="uk-margin-remove uk-text-muted">
              Connecting hospitality and sustainability is not only about
              technology but mainly about the human side of things. Alongside
              our partners, <strong>noytrall</strong> is pushing forward into a
              new way of tourism, bringing forth alternatives to ever-growing
              conscious guests with increasing demand for action.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const Interaction: React.FC = () => {
  const data = {
    datasets: [
      {
        data: [50],

        label: "Without noytrall",

        backgroundColor: ["rgba(128, 130, 133, 0.2)"],
      },

      {
        data: [22],

        label: "With noytrall",

        //backgroundColor: ["rgba(0, 0, 0, 0.2)"]

        backgroundColor: ["rgba(64, 191, 180, 0.5)"],
      },
    ],

    labels: [""],
  };

  const config:
    | ChartConfiguration<"bar", number[], string>
    | ChartConfigurationCustomTypesPerDataset<"bar", number[], string> = {
    type: "bar",

    data,

    options: {
      indexAxis: "y",

      maintainAspectRatio: true,

      responsive: true,

      aspectRatio: 2,

      plugins: {
        title: {
          display: true,

          text: "Consumption Estimate",
        },

        subtitle: {
          display: true,

          text: "Chart Subtitle",

          padding: {
            bottom: 40,
          },
        },

        legend: {
          display: true,

          position: "bottom",
        },
      },

      scales: {
        y: {
          title: {
            display: false,

            text: "kWh",
          },

          grid: {
            display: true,

            drawBorder: true,

            drawOnChartArea: true,

            drawTicks: true,

            color: "rgba(200, 200, 200, 0.3)",

            borderColor: "rgba(200, 200, 200, 0.1)",

            borderDash: [3],

            borderWidth: 1,
          },
        },

        x: {
          min: 0,

          max: 50,

          title: {
            display: true,

            text: "kWh",
          },

          grid: {
            display: true,

            drawBorder: true,

            drawOnChartArea: true,

            drawTicks: true,

            color: "rgba(200, 200, 200, 0.3)",

            borderColor: "rgba(200, 200, 200, 0.1)",

            borderDash: [3],

            borderWidth: 1,
          },
        },
      },
    },
  };

  return (
    <div id="interaction" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-margin-large">
          <div className="uk-text-center">
            <h1 className="uk-heading-small">
              Control your costs. Save money.
            </h1>

            <p className="uk-text-large">
              Compare the performance you can achieve with noytrall
              technologies.
            </p>
          </div>

          <div className="uk-container uk-container-xsmall">
            <div
              className="uk-align-center uk-height-"
              style={{ position: "relative" }}
            >
              <Bar options={config.options} data={config.data} />
            </div>
          </div>

          <div className="uk-margin-large uk-text-center">
            <a
              className="uk-button uk-button-primary uk-button-large uk-border-pill"
              data-uk-toggle="target: #modal-simulator-stack"
            >
              Estimate savings now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQS: React.FC = () => {
  return (
    <div id="faqs" className="uk-section uk-section-muted">
      <div className="uk-container uk-container-small">
        <div className="uk-margin-large">
          <div className="uk-text-center">
            <h1 className="uk-heading-small">Frequently asked questions.</h1>

            <p className="uk-text-large">You ask. We answer.</p>
          </div>

          <div className="uk-align-center">
            <ul uk-accordion="multiple: true">
              <li>
                <a className="uk-accordion-title" href="#">
                  I have a local accommodation. Can I install noytrall?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    Yes you can. noytrall-enabled smart rooms are for all. Be it
                    a big hotel or small apartment. Even a trailer or a boat.
                    You name it.
                  </p>
                </div>
              </li>

              <li>
                <a className="uk-accordion-title" href="#">
                  I want to use it at my students' residence units. Is it
                  suitable?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    Yes it is. You can measure the residence's room consumption
                    without having any surprises at the end of the month.
                    Students can also control their water and energy usage.
                  </p>
                </div>
              </li>

              <li>
                <a className="uk-accordion-title" href="#">
                  Do I have to manage my reservations manually?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    You don't have to. We can integrate with your PMS and
                    automate the process so you don't waste any time. In case
                    you don't have a PMS our platform enables you to do it.
                  </p>
                </div>
              </li>

              <li>
                <a className="uk-accordion-title" href="#">
                  Will I have my own dashboard?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    Yes you will. We provide you with a powerful analytics
                    dashboard from where you can view all your custom data,
                    generate seamless reports and take full control of your
                    property water and energy consumption.
                  </p>
                </div>
              </li>

              <li>
                <a className="uk-accordion-title" href="#">
                  How much does it cost?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    For us to make a financial estimate we must know the number
                    of rooms you pretend to install noytrall into. You can
                    either{" "}
                    <a href="#modal-book-demo-calendar" data-uk-toggle>
                      book a demo
                    </a>{" "}
                    and have our sales team contact you for an online meeting,
                    or you can contact us directly by email to{" "}
                    <a href="mailto:sales@noytrall.com">sales@noytrall.com</a>.
                  </p>
                </div>
              </li>

              <li>
                <a className="uk-accordion-title" href="#">
                  How much will I save?
                </a>

                <div className="uk-accordion-content uk-margin-left uk-margin-xlarge-right uk-text-muted">
                  <p>
                    The amount you will save is variable. It depends on some
                    factors like your water and energy consumption information
                    or your average occupancy. We believe you can save 2€ per
                    person, per room, per night, but this number can go higher.
                    That's why we built a
                    <a href="#modal-simulator-stack" data-uk-toggle>
                      savings calculator
                    </a>
                    for you to have some clues about the potential final figure.
                    See it now.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p>
          You can find more helpful topics on Accommodations support in our
          <a href="/help"> help and support</a> page.
        </p>
      </div>
    </div>
  );
};

const GetStarted: React.FC = () => {
  return (
    <div
      id="comparison-table"
      className="uk-section uk-section-large uk-section-primary"
    >
      <div className="uk-container uk-container-large">
        <div>
          <div className="uk-text-center">
            <h1 className="uk-heading-small">
              Ready to get started with noytrall ?
            </h1>

            <p className="uk-text-large">
              Request a demo for your accommodation now and start to save water
              and energy right away.
            </p>

            <div className="uk-margin-large">
              <a
                className="uk-button uk-button-primary uk-button-large uk-border-pill"
                data-uk-toggle="target: #modal-book-demo-calendar"
              >
                Book your demo now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal: React.FC = () => {
  return (
    <div>
      <div
        id="modal-simulator-stack"
        data-uk-modal="esc-close: false; bg-close: false"
      >
        <div className="uk-modal-dialog">
          <form action="#" id="simulation-form" className="uk-form-stacked">
            <button
              className="uk-modal-close-default"
              type="button"
              data-uk-close
            ></button>
            <div className="uk-modal-header">
              <h2 className="uk-modal-title">
                Accommodation Savings Calculator
              </h2>
            </div>
            <div className="uk-modal-body">
              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3 className="uk-heading-bullet">
                    <span>Generic Information</span>
                  </h3>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">Number of rooms</label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter the number of rooms of your accommodation.
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-bed"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="rooms"
                      type="text"
                      placeholder="0"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average monthly occupancy rate
                  </label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter your average monthly occupancy rate.
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-percent"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="occupancy"
                      type="text"
                      placeholder="0"
                    />
                    %
                  </div>
                </div>
              </div>
              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3 className="uk-heading-bullet">
                    <span>Water consumption Information</span>
                  </h3>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual water consumption{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      data-uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter your average monyhly water consumption.
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-tint"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="water-consumption"
                      type="text"
                      placeholder="0"
                    />
                    m<sup>3</sup>
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual water bill value{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      data-uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual water bill value description
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-file-invoice"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="water-value"
                      type="text"
                      placeholder="0"
                    />
                    €
                  </div>
                </div>
              </div>
              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3 className="uk-heading-bullet">
                    <span>Energy consumption Information</span>
                  </h3>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual energy consumption{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      data-uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual energy consumption description
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-bolt"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="energy-consumption"
                      type="text"
                      placeholder="0"
                    />
                    kWh
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual energy bill value{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      data-uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>
                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual energy bill value description
                  </div>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-file-invoice"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id="energy-value"
                      type="text"
                      placeholder="0"
                    />
                    €
                  </div>
                </div>
              </div>
              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3 className="uk-heading-bullet">
                    <span>Contact Information</span>
                  </h3>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">Name or Organization</label>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-user"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-large"
                      id="name"
                      type="text"
                      placeholder="Name or Organization"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">Email</label>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-envelope-open"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-large"
                      id="email"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="uk-margin">
                  <label className="uk-form-label">Phone Number</label>
                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-mobile"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-medium"
                      id="phone"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="uk-modal-footer uk-text-right">
              <a
                className="uk-button uk-button-link uk-modal-close uk-margin-right"
                data-uk-toggle="target: #modal-simulator-stack"
              >
                Cancel
              </a>
              <a
                className="uk-button uk-button-primary uk-border-pill"
                data-uk-toggle="target: #modal-simulator-success"
              >
                Estimate now
              </a>
            </div>
          </form>
        </div>
      </div>
      <div
        id="modal-simulator-success"
        data-uk-modal="esc-close: false; bg-close: false"
      >
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Success</h2>
          </div>
          <div className="uk-modal-body">
            <div data-uk-grid>
              <div className="uk-width-1-1">
                <h3 className="uk-heading-bullet">Report</h3>
                <div className="uk-margin">
                  <p>
                    Based on the information you provided, we estimate you can
                    save up to:
                  </p>
                  <div className="uk-section uk-section-muted uk-section-xsmall">
                    <h1 className="uk-heading-large">256 €</h1>
                    <span className="uk-h3">per year, per room</span>
                  </div>
                  <div className="uk-margin">Book a demo information</div>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <a
              className="uk-button uk-button-link uk-margin-right uk-modal-close"
              data-uk-toggle="target: #"
            >
              Close
            </a>
            <a
              className="uk-button uk-button-primary uk-border-pill"
              data-uk-toggle="target: #"
            >
              Book a demo and send Report by email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
