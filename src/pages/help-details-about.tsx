import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/Layout";
import { ABOUT_NOYTRALL } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <HelpPageWrapper data={ABOUT_NOYTRALL} />
      <Footer />
    </Layout>
  );
};

const Content: React.FC = () => {
  return (
    <>
      <div className="uk-margin-large">
        <h2>Related articles</h2>
        <ul className="uk-list">
          <li>
            <a href="#">Can I book from noytrall?</a>
          </li>
          <li>
            <a href="#">How can I access my reservation?</a>
          </li>
          <li>
            <a href="#">May I change my reservation?</a>
          </li>
          <li>
            <a href="#">
              How do I get more information about room or accommodation
              amenities?
            </a>
          </li>
          <li>
            <a href="#">
              I can't find my confirmation email. What should I do?
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HelpDetailsAbout;
