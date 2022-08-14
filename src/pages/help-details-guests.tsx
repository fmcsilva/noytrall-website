import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { GUESTS } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <HelpPageWrapper data={GUESTS} />
    </Layout>
  );
};

export default HelpDetailsAbout;
