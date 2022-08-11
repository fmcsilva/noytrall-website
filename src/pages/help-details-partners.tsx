import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { SUSTAINABLE_PARTNERS } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Header />
      <HelpPageWrapper data={SUSTAINABLE_PARTNERS} />
      <Footer />
    </Layout>
  );
};

export default HelpDetailsAbout;
