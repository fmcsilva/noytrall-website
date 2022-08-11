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

export default HelpDetailsAbout;
