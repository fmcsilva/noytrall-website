import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { ACCOMODATIONS } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <HelpPageWrapper data={ACCOMODATIONS} />
      <Footer />
    </Layout>
  );
};

export default HelpDetailsAbout;
