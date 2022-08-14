import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { PRIVACY } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <HelpPageWrapper data={PRIVACY} />
    </Layout>
  );
};

export default HelpDetailsAbout;
