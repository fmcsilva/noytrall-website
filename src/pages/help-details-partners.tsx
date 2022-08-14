import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { SUSTAINABLE_PARTNERS } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <HelpPageWrapper data={SUSTAINABLE_PARTNERS} />
    </Layout>
  );
};

export default HelpDetailsAbout;
