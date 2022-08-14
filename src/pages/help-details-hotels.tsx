import React from "react";
import HelpPageWrapper from "../components/HelpPageWrapper";

import Layout from "../components/layout";
import { ACCOMODATIONS } from "../data/helpQuestions";

const HelpDetailsAbout: React.FC = () => {
  return (
    <Layout>
      <HelpPageWrapper data={ACCOMODATIONS} />
    </Layout>
  );
};

export default HelpDetailsAbout;
