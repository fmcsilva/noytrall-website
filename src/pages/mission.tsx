import React from "react";
import MainLayout from "../components/layout";

const Mission: React.FC = () => {
  return (
    <MainLayout>
      <Content />
    </MainLayout>
  );
};

const Content: React.FC = () => {
  return (
    <div id="" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-2@l" data-uk-grid>
          <div className="uk-margin-medium">
            <h1>Misson, core values and vision</h1>

            <div>
              <p>
                noytrall was born with the mission to transform how hotels
                manage utilities and revolutionize guest sustainable tourism
                experience. We envision a tourism where both hotels and guests
                are responsible for their actions and contribute to
                progressively build a sustainable tourism.
              </p>
              <p>
                We are monitoring water and energy consumption to analyze the
                environmental impact of hotels and guests, informing them of
                their carbon footprint of each stay.
              </p>
              <p>
                Building a gamification system on top of the consumption and
                carbon footprint, we are incentivizing guests to adopt more
                sustainable practices.
              </p>
              <p>
                The digitalization of this sustainability component and its
                effect on raising awareness of the environmental behavior of
                users will lead to reducing consumption and the hotel's
                environmental impact.
              </p>
              <p>
                We transform how hotels manage utilities and revolutionize
                guests' sustainable tourism experience.
              </p>
              <p>
                Tech-empowering hotels [and guests] to move forward into
                sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
