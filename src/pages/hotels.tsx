import React, { useEffect, useRef } from "react";
import Layout from "../components/layout";

import metrics from "../images/Metrics-bro.png";
import stats from "../images/Site Stats-bro.png";
import awards from "../images/Awards-bro.png";
import socialMedia from "../images/Social media-bro.png";
import happyEarth from "../images/Happy Earth-bro.png";
import pipeline from "../images/Pipeline maintenance-bro.png";
import undraw_visual_data_re_mxxo from "../images/undraw_visual_data_re_mxxo.png";
import {
  Chart,
  ChartConfiguration,
  ChartConfigurationCustomTypesPerDataset,
  ChartTypeRegistry,
  registerables,
} from "chart.js";

import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

const Hotels: React.FC = () => {
  return (
    <Layout>
      <Modal />
      <Hero />
      <Content />
      <Interaction />
      <Graph />
      <Table />
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
          <div>
            <h1 className="uk-heading-medium">Save money with your guests.</h1>
            <h2 className="uk-margin-remove">
              Accurate measure room consumption.
            </h2>
            <div className="uk-margin-large">
              <a
                className="uk-button uk-button-primary uk-button-large uk-border-pill"
                href="#modal-simulator-stack"
                data-uk-toggle
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

      <div className="uk-container uk-container-large uk-margin-large">
        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted">
              <span className="uk-text-muted">Measure</span>
            </div>
            <h1 className="uk-heading-small uk-margin-remove-top">
              Measure room consumption.
            </h1>
            <div>
              <h3>Precise, remote and automated monitoring.</h3>
              <h4 className="uk-text-muted uk-margin-remove">
                Monitor <strong>water</strong> and <strong>energy</strong>{" "}
                consumption 24/7, whether the room is free or occupied. See what
                is happening in <strong>real-time</strong> and operate on
                cloud-based IoT-connected room data.
              </h4>
            </div>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
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
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
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
              <h3>Ensure effective resource management.</h3>
              <h4 className="uk-text-muted uk-margin-remove">
                Build personalized reusable reports within any time frame.
                Reduce water and energy consumption and lower operating costs.{" "}
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
              Gamify guests' impact.
            </h1>
            <div>
              <h3>Establish strong and durable relationships.</h3>
              <h4 className="uk-text-muted uk-margin-remove">
                Interact with guests based on their behavior and award them for
                being sustainable. Challenge your guests and create group events
                to boost engagement.
              </h4>
            </div>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
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
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
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
              Revolutionize guests' sustainable experience.
            </h1>
            <div>
              <h3>Access a network of community partners.</h3>
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
              <h3>Implement the hotel's ESG goals. Reduce your footprint.</h3>
              <h4 className="uk-text-muted uk-margin-remove">
                We help you accomplish environmental criteria results. Assess
                stays impact as you reduce carbon emissions.
              </h4>
            </div>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
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
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
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
              <h3>Evaluate asset performance to prevent future damages.</h3>
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

const Interaction: React.FC = () => {
  const data = {
    datasets: [
      {
        data: [45],
        label: "Without noytrall",
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
      },
      {
        data: [10],
        label: "With noytrall",
        backgroundColor: ["rgba(0, 0, 0, 0.2)"],
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
      plugins: {
        title: {
          display: true,
          text: "Consumption Estimate",
        },
        subtitle: {
          display: true,
          text: "Chart Subtitle",
          padding: {
            bottom: 20,
          },
        },
        legend: {
          display: true,
        },
      },
      scales: {
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
            color: "rgba(200, 200, 200, 0.5)",
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
          <h1 className="uk-text-center">Estimate your performance savings</h1>

          <div className="uk-container uk-container-xsmall">
            <div
              className="uk-align-center"
              style={{ position: "relative", width: "100%" }}
            >
              <Bar options={config.options} data={config.data} />
            </div>
          </div>

          <div className="uk-flex uk-flex-center uk-margin-large">
            <a
              className="uk-button uk-button-primary uk-button-large uk-border-pill"
              href="#modal-simulator-stack"
              data-uk-toggle
            >
              Calculate Estimate Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Graph: React.FC = () => {
  const config:
    | ChartConfiguration<"bar", number[], string>
    | ChartConfigurationCustomTypesPerDataset<"bar", number[], string> = {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          label: "with noytrall",
          backgroundColor: ["rgba(75, 192, 192, 0.2)"],
          data: [22],
        },
        {
          label: "Without noytrall",
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          data: [50],
        },
      ],
    },
    options: {
      indexAxis: "y",
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Energy Consumption",
        },
        subtitle: {
          display: true,
          text: "Chart Subtitle",
          padding: {
            bottom: 20,
          },
        },
        legend: {
          display: true,
        },
      },
      scales: {
        x: {
          min: 0,
          max: 100,
          title: {
            display: true,
            text: "kWh",
          },
          grid: {
            display: true,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
            color: "rgba(200, 200, 200, 0.5)",
            borderColor: "rgba(200, 200, 200, 0.1)",
            borderDash: [3],
            borderWidth: 1,
          },
        },
      },
    },
  };

  return (
    <div id="graph" className="uk-section uk-section-muted">
      <div className="uk-container uk-container-large">
        <div className="uk-text-center">
          <h1 className="uk-heading-medium">Control your costs. Save money.</h1>
          <p className="uk-text-large">
            Compare the performance you can achieve with noytrall technologies.
          </p>
        </div>

        <div className="uk-container uk-container-xsmall">
          <div
            className="uk-align-center"
            style={{ position: "relative", width: "100%" }}
          >
            <Bar options={config.options} data={config.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Table: React.FC = () => {
  return (
    <div id="comparison-table" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div>
          <div className="uk-text-center">
            <h1 className="uk-heading-medium">
              Ready to get started with noytrall
            </h1>
            <p className="uk-text-large">
              Request a demo for your accommodation now.
            </p>
          </div>

          <div className="uk-flex uk-flex-center uk-text-center">
            <div className="">
              <table className="uk-table uk-table-responsive">
                <thead>
                  <tr>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h2 className="uk-margin-remove-vertical">
                        Professional Tier
                      </h2>
                      <p className="uk-text-muted uk-margin-remove-vertical">
                        decription of this
                      </p>
                      <ul className="uk-list">
                        <li>Unlimited number of rooms</li>
                        <li>Real time energy consumption monitoring</li>
                        <li>Real time water consumption monitoring</li>
                        <li>IoT system hardware installation</li>
                        <li>IoT system software license</li>
                        <li>IoT system software 15 hour training</li>
                        <li>Custom languages availability</li>
                        <li>Full support</li>
                      </ul>
                      <a
                        href="#"
                        className="uk-button uk-button-primary uk-button-large uk-border-pill"
                      >
                        Request demo now
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                href="#modal-simulator-stack"
                className="uk-button uk-button-link uk-modal-close uk-margin-right"
                data-uk-toggle
              >
                Cancel
              </a>
              <button
                type="submit"
                data-uk-toggle="target: #modal-simulator-success"
                className="uk-button uk-button-primary uk-border-pill"
              >
                Estimate now
              </button>
              <a
                href="#modal-simulator-success"
                className="uk-button uk-button-primary uk-border-pill"
                data-uk-toggle
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
              href="#"
              className="uk-button uk-button-link uk-margin-right uk-modal-close"
              data-uk-toggle
            >
              Close
            </a>
            <a
              href="#"
              className="uk-button uk-button-primary uk-border-pill"
              data-uk-toggle
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
