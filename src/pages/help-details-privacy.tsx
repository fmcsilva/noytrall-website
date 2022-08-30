import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { PRIVACY } from "../data/helpQuestions";

import Menu from "../components/Menu";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <Menu/>
      <HelpPageWrapper data={PRIVACY} />
    </Layout>
  );
};

export default HelpDetailsAbout;
