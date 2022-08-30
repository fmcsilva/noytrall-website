import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";
import Layout from "../components/layout";

import { ABOUT_NOYTRALL } from "../data/helpQuestions";

import Menu from "../components/Menu";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Menu/>
      <HelpPageWrapper data={ABOUT_NOYTRALL} />
    </Layout>
  );
};

export default HelpDetailsAbout;
