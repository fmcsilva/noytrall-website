import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { GUESTS } from "../data/helpQuestions";

import Menu from "../components/Menu";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Menu/>
      <HelpPageWrapper data={GUESTS} />
    </Layout>
  );
};

export default HelpDetailsAbout;
