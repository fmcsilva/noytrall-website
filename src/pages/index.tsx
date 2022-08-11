import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/Layout";

import Footer from "../components/Footer";
import Header from "../components/Header";

import heroImg from "../images/photo-1653624831607-d8077a17401b.webp";

import revenue from "../images/Revenue-bro.png";
import summer from "../images/Summer Camp-bro.png";

import datePicker from "../images/Date picker-bro.png";
import hotelLogo7 from "../images/logo-hotel7.png";
import hotelLogo8 from "../images/logo-hotel8.png";
import hotelLogo9 from "../images/logo-hotel9.png";
import hotelLogo10 from "../images/logo-hotel10.png";
import hotelLogo14 from "../images/logo-hotel14.png";

import faceMike from "../images/face-mike.png";
import faceDavid from "../images/face-david.png";
import faceDiana from "../images/face-diana.png";
import faceFrancisco from "../images/face-francisco.png";
import faceMarco from "../images/face-marco.png";
import faceMiguel from "../images/face-miguel.png";
import facePedro from "../images/face-pedro.png";

import DownloadTheApp from "../components/DownloadTheApp";

import type { PageProps } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Reviews />
      <Statistics />
      <HowItWorks />
      <KeyFeatures />
      <AvailableHotels />
      <MeetTheTeam />
      <DownloadTheApp />
      <Footer />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-muted uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-background-fixed uk-background-center-center uk-background-image@s"
      data-uk-height-viewport="offset-top: true;"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div id="hero" className="uk-margin-auto uk-padding-large uk-flex-1">
        <div className="uk-container uk-container-large">
          <div className="">
            <h1 className="uk-heading-medium">Stay smart.</h1>
            <h2 className="uk-margin-remove">IoT for hotels and guests.</h2>
            <div className="uk-width-1-1@s uk-width-1-1@m uk-width-2-3@l uk-margin-large">
              <form action="#" id="notify-form" className="uk-form-stacked">
                <div className="uk-grid-small" data-uk-grid>
                  <div className="uk-width-expand@s uk-first-column">
                    <div className="uk-inline uk-width-1-1">
                      <span
                        className="uk-form-icon"
                        data-uk-icon="icon: mail"
                      ></span>
                      <input
                        id="notify-email"
                        type="email"
                        className="uk-input uk-form-large uk-width-1-1 uk-border-pill"
                        placeholder="youremail@domain.com"
                      />
                    </div>
                  </div>
                  <div className="uk-width-1-1 uk-width-auto@s">
                    <button className="uk-button uk-button-primary uk-button-large uk-border-pill">
                      notify me
                    </button>
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

const Reviews: React.FC = () => {
  return (
    <div id="review" className="uk-section uk-section-default">
      <div className="uk-container uk-container-expand">
        <div data-uk-slider="autoplay: true; sets: true">
          <div className="uk-slider-container uk-slider-container-offset">
            <ul
              className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@xl uk-child-width-1-5@xl uk-grid-match"
              data-uk-grid
            >
              <li>
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small">
                  <div className="uk-card-badge uk-label">NEW</div>
                  <h3 className="uk-card-title">
                    Once you go noytrall you will never go back!
                  </h3>
                  <div>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam laoreet, turpis id volutpat condimentum, lectus nisi
                    dapibus ipsum, ac ultrices est nulla et diam.
                  </p>
                  <p>Miguel Clemente</p>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small">
                  <div className="uk-card-badge uk-label">NEW</div>
                  <h3 className="uk-card-title">
                    No more averege rates. Just pay for what you consume!
                  </h3>
                  <div>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam laoreet, turpis id volutpat condimentum, lectus nisi
                    dapibus ipsum, ac ultrices est nulla et diam.
                  </p>
                  <p>Miguel Onofre</p>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small">
                  <h3 className="uk-card-title">
                    Not paying for others consumption anymore.
                  </h3>
                  <div>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam laoreet, turpis id volutpat condimentum, lectus nisi
                    dapibus ipsum, ac ultrices est nulla et diam.
                  </p>
                  <p>Diana Ferreira</p>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small">
                  <h3 className="uk-card-title">
                    Wow! Saving a lot of money on my stays.
                  </h3>
                  <div>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam laoreet, turpis id volutpat condimentum, lectus nisi
                    dapibus ipsum, ac ultrices est nulla et diam.
                  </p>
                  <p>Marco Alves</p>
                </div>
              </li>
              <li>
                <div className="uk-card uk-card-default uk-card-body uk-border-rounded uk-box-shadow-small">
                  <h3 className="uk-card-title">
                    Thank you! Same hotel, lowest charge ever.
                  </h3>
                  <div>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                    <i className="las la-lg la-star"></i>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam laoreet, turpis id volutpat condimentum, lectus nisi
                    dapibus ipsum, ac ultrices est nulla et diam.
                  </p>
                  <p>Pedro Coutinho</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Statistics: React.FC = () => {
  return (
    <div
      id="stats"
      className="uk-section uk-section-xsmall uk-section-secondary"
    >
      <div className="uk-container uk-container-large">
        <div
          className="uk-position-relative"
          data-uk-slideshow="autoplay: true; animation: pull; autoplay-interval: 3000; max-height: 300"
        >
          <ul className="uk-slideshow-items">
            <li>
              <div className="uk-position-center uk-position-small uk-text-left uk-text-center">
                <div>
                  <h1 className="uk-heading-medium uk-text-primary uk-margin-remove-vertical">
                    <span className="uk-text-bold">41%</span>
                  </h1>
                  <h4 className="uk-text-muted uk-margin-remove-vertical">
                    of travellers
                  </h4>
                </div>
                <div>
                  <h3 className="uk-text-primary">
                    can't find sustainable travel options
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-center uk-position-small uk-text-center uk-light">
                <div>
                  <h1 className="uk-heading-medium uk-text-primary uk-margin-remove-vertical">
                    <span className="uk-text-bold">73%</span>
                  </h1>
                  <h4 className="uk-text-muted uk-margin-remove-vertical">
                    of travellers
                  </h4>
                </div>
                <div>
                  <h3 className="uk-text-primary">
                    would choose hotels with sustainability options implemented
                  </h3>
                </div>
              </div>
            </li>
            <li>
              <div className="uk-position-center uk-position-small uk-text-center uk-light">
                <div>
                  <h1 className="uk-heading-medium uk-text-primary uk-margin-remove-vertical">
                    <span className="uk-text-bold">61%</span>
                  </h1>
                  <h4 className="uk-text-muted uk-margin-remove-vertical">
                    of travellers
                  </h4>
                </div>
                <div>
                  <h3 className="uk-text-primary">
                    state that the pandemic has made them want to travel more
                    sustainably in the future
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div id="how" className="uk-section uk-section-default">
      <div className="uk-container uk-container-small">
        <h1 className="uk-heading-small uk-text-bold uk-text-center uk-margin-large">
          How it works
        </h1>
        <div className="uk-child-width-1-2@m" data-uk-grid>
          <div className="uk-padding">
            <h2>Book an hotel.</h2>
            <h4 className="uk-text-muted uk-margin-remove">
              Choose a noytrall accommodation and reduce the impact of your
              stay. Go sustainable on your next trip and save money.
            </h4>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              data-src={datePicker}
              width="500"
              height=""
              alt="Plan your travel. Go."
              data-uk-img
            />
          </div>
        </div>
        <div className="uk-child-width-1-2@m" data-uk-grid>
          <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              className="uk-align-left"
              data-src={revenue}
              width="500"
              height=""
              alt="Enjoy your stay. Spend less. Pay less."
              data-uk-img
            />
          </div>
          <div className="uk-padding">
            <h2>Keep track of your metrics in real-time and save money.</h2>
            <h4 className="uk-text-muted uk-margin-remove">
              Know precisely what you are consuming and compare it to real-life
              examples. Go sustainable as you save money and resources.
            </h4>
          </div>
        </div>
        <div className="uk-child-width-1-2@m" data-uk-grid>
          <div className="uk-padding">
            <h2>Earn while enjoying your stay.</h2>
            <h4 className="uk-text-muted uk-margin-remove">
              Your experience will be more fun and immersive as you gain access
              to products and experiences from our community partners.
            </h4>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img
              data-uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true"
              className="uk-align-right"
              data-src={summer}
              width="500"
              height=""
              alt="Keep track of your metrics in real time or access them in your phone."
              data-uk-img
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const KeyFeatures: React.FC = () => {
  return (
    <div id="keyfeatures" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large uk-margin-large">
        <h1 className="uk-heading-small uk-text-bold uk-text-center">
          Key features
        </h1>
      </div>

      <div className="uk-section uk-section-muted uk-padding-remove-bottom">
        <div className="uk-container uk-container-small">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div className="uk-flex uk-flex-center uk-flex-top">
              <i
                data-uk-scrollspy="cls:uk-animation-slide-left-medium; repeat: true"
                className="las la-10x la-chart-line"
              ></i>
            </div>
            <div>
              <h2>Stay monitoring and ecolological footprint rating</h2>
              <div className="uk-text-muted uk-h4">
                <p>
                  You will be able to monitor your consumption in real-time. The
                  water and energy you spend and the biomass and waste you
                  produce so you can adjust your routines as you see fit and
                  save you money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-default uk-padding-remove-bottom">
        <div className="uk-container uk-container-small">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div>
              <h2>Improvement tips and suggestions</h2>
              <div className="uk-text-muted uk-h4 uk-margin-remove">
                <p>
                  Through data analysis you will be given tips and suggestions
                  to upgrade your ecological performance and minimize your stay
                  impact and save money.
                </p>
              </div>
            </div>
            <div className="uk-flex uk-flex-center uk-flex-top">
              <i
                data-uk-scrollspy="cls:uk-animation-slide-left-medium; repeat: true"
                className="las la-10x la-tasks"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-muted uk-padding-remove-bottom">
        <div className="uk-container uk-container-small">
          <div className="uk-child-width-1-2@s" data-uk-grid>
            <div className="uk-flex uk-flex-center uk-flex-top">
              <i
                data-uk-scrollspy="cls:uk-animation-slide-left-medium; repeat: true"
                className="las la-10x la-gamepad"
              ></i>
            </div>
            <div>
              <h2>Rewards and community</h2>
              <div className="uk-text-muted uk-h4 uk-margin-remove">
                <p>
                  You earn points by managing sustainability level. As you level
                  up you can make use of our community partners around the world
                  to trade those points with their products, services and
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AvailableHotels: React.FC = () => {
  const renderHotels = () => {
    const list = [
      { img: hotelLogo7 },
      { img: hotelLogo8 },
      { img: hotelLogo9 },
      { img: hotelLogo10 },
      { img: hotelLogo14 },
    ];

    return list.map(({ img }) => {
      return (
        <div key={img}>
          <img data-src={img} width="500" height="500" alt="" data-uk-img />
        </div>
      );
    });
  };

  return (
    <div id="hotels" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <h1 className="uk-heading-small uk-text-bold uk-text-center uk-margin-large">
          Available on the following
        </h1>

        <div
          className="uk-child-width-1-3 uk-child-width-1-4@m uk-child-width-1-6@l"
          data-uk-grid
        >
          {renderHotels()}
        </div>
      </div>
    </div>
  );
};

const MeetTheTeam: React.FC = () => {
  const renderTeam = () => {
    const list = [
      {
        img: faceMiguel,
        name: "Miguel Clemente",
        position: "Co-Founder & CEO",
        linkedin: "https://www.linkedin.com/in/miguelrolinhoclemente/",
      },
      {
        img: faceMike,
        name: "Miguel Onofre",
        position: "Co-Founder & CFO",
        linkedin: "https://www.linkedin.com/in/miguel-onofre/",
      },
      {
        img: faceDiana,
        name: "Diana Ferreira",
        position: "Co-Founder & COO",
        linkedin: "https://www.linkedin.com/in/ferreira-diana/",
      },
      {
        img: faceDavid,
        name: "David Clemente",
        position: "FullStack Developer",
        linkedin: "https://www.linkedin.com/in/davidrolinhoclemente/",
      },
      {
        img: faceFrancisco,
        name: "Francisco Silva",
        position: "Software Engineer",
        linkedin: "https://www.linkedin.com/in/francisco-silva-a74634184/",
      },
      {
        img: facePedro,
        name: "Pedro Coutinho",
        position: "Head of Design",
        linkedin: "https://www.linkedin.com/in/pcout",
      },
      {
        img: faceMarco,
        name: "Marco",
        position: "Senior Business Development Manager",
        linkedin: "https://www.linkedin.com/in/marcoalves1/",
      },
    ];

    return list.map(({ img, name, position, linkedin }) => {
      return (
        <div key={linkedin}>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
                className="uk-border-circle"
                data-src={img}
                width="100"
                height="100"
                alt=""
                data-uk-img
              />
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">{name}</h3>
                <span className="uk-display-block uk-text-muted">
                  {position}
                </span>
              </div>
              <div>
                <a href={linkedin} target="_blank">
                  <i className="lab la-lg la-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div id="team" className="uk-section uk-section-muted">
      <div className="uk-container uk-container-large">
        <h1 className="uk-heading-small uk-text-bold uk-text-center uk-margin-large">
          Meet the team
        </h1>
        <div
          className="uk-child-width-1-2@s uk-child-width-1-3@l uk-grid-match"
          data-uk-grid
        >
          {renderTeam()}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
