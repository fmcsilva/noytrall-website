import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/layout";
import Menu from "../components/Menu";

import metrics from "../images/Metrics-bro.png";

const HotelsTrustContentPage = () => {
  return (
    <Layout>
      <Menu/>
      <Content/>
    </Layout>
  );
};

const Content: React.FC = () => {
    return (
      <div id="" className="uk-section uk-section-default">
        <div className="uk-container uk-container-large">
          <div className="uk-margin-large">
            <div className="uk-text-center">
                <h1>{"WIP-> trust-content"}</h1>
            </div>
          </div>
        </div>
  
        <div className="uk-container uk-container-large uk-margin-large">
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">The Easy "Phygital" Solution.</h1>
            <h4 className="uk-text-muted uk-margin-remove ">Noytrall smart room solution for hotels is compounded by a
            resources
            monitoring IoT system to deploy into guest rooms and a SaaS access to a cloud-based management platform.
            </h4>
        </div>
        <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="The Easy Phygital Solution." data-uk-img/>
        </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="Improve hotel operation efficiency." data-uk-img/>
        </div>
        
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Optimal Savings.</h1>
            <h4 className="uk-text-muted uk-margin-remove">Noytrall provides an in-room real-time resources consumption
            monitoring and a real-time web-based interaction channel with guests, ensuring you get the maximum water and
            energy savings possible.</h4>
        </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Self-Installs.</h1>
            <h4 className="uk-text-muted uk-margin-remove">No need to shutdown hotel's operation. No need to put any guest
            rooms on hold or blocked for service. Put your maintenance staff to totally install each room in less than
            60 minutes with the assistance of our a-to-z installation booklet, video-tutorials, technical support team
            or even online live learning sessions.</h4>
            </div>
        <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="The Easy Phygital Solution." data-uk-img/>
        </div>
        </div>
    
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="Improve hotel operation efficiency." data-uk-img/>
          </div>
      
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">On-site Install Supervision.</h1>
            <h4 className="uk-text-muted uk-margin-remove">You would like to have our in-person support? No worries. Just ask
              for this service and we will be on-site to fully supervise your installation.</h4>
          </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Fully Automated.</h1>
            <h4 className="uk-text-muted uk-margin-remove">Once the installation is done noytrall completely automates the
              guest room energy and water consumption monitoring in your property without any involvement from your staff
              to operate it. Only to digitally activate the guest room monitoring at the check-in and if by chance
              noytrall isn't integrated to your PMS.</h4>
            </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="The Easy Phygital Solution." data-uk-img/>
          </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="Improve hotel operation efficiency." data-uk-img/>
          </div>
      
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">At Your Own Pace Of Investment.</h1>
            <h4 className="uk-text-muted uk-margin-remove">
              Deploy noytrall in the number of guest rooms you like. Start with 1, 5, 10, 20, 100, 500 or 1000 guest
              rooms. It's up to you to decide how many guest rooms you will start with to reduce resources, reduce costs,
              improve operational efficiency and of course start moving consistently towards environmental sustainability.
            </h4>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Complete Coverage.</h1>
            <h4 className="uk-text-muted uk-margin-remove">
              Lifetime warranty over all noytrall's IoT system and monitoring devices. And all the software structural
              updates are also fully included and covered during the subscription period.
            </h4>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="The Easy Phygital Solution." data-uk-img/>
          </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="Improve hotel operation efficiency." data-uk-img/>
          </div>
      
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Fast Default Payback</h1>
            <h4 className="uk-text-muted uk-margin-remove">
              Our "phygital" smart room solution typically pays for itself in 9-12 months. And in 2-3 months you can see
              significant savings happening, which can even improve strongly as you work on your guests' resource
              consumption behavior.
            </h4>
          </div>
        </div>
        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Performance Success Assistance.</h1>
            <h4 className="uk-text-muted uk-margin-remove">
              Noytrall walks with you along the way, making sure that you fully use the features of the system and achieve
              the best result from it. As our Partner, we will ensure your success. In addition to onboarding and
              customization support for your property, you will be helped and strengthened along the way with a dedicated
              Performance Success Specialist in your best way to get through noytrall and achieve your specific goals.
            </h4>
          </div>
          <div className="uk-flex uk-flex-bottom uk-flex-center uk-flex-first uk-flex-last@m">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="The Easy Phygital Solution." data-uk-img/>
          </div>
        </div>

        <div className="uk-child-width-1-2@l" data-uk-grid>
        <div className="uk-flex uk-flex-center uk-flex-bottom">
            <img uk-scrollspy="cls:uk-animation-slide-top-medium; repeat: true" 
            data-src={metrics} width="250" height="" 
            alt="Improve hotel operation efficiency." data-uk-img/>
          </div>
      
          <div className="uk-padding">
            <div className="uk-label uk-label-primary uk-background-muted"><span className="uk-text-muted">WIP</span></div>
            <h1 className="uk-heading-small uk-margin-remove-top">Improve hotel operation efficiency.</h1>
            <h4 className="uk-text-muted uk-margin-remove">
              Okay, we may be nerds in IoT systems and innovative technology but above all we think about people and love
              the human side of things. After all, we are talking about hospitality and sustainability here. This is just
              to let you know that we also think about you (the hotelier) and our Technical Team is always interested in
              fully interacting and assisting our Partners.
            </h4>
          </div>
        </div>
        </div>
      </div>
    );
  };

export default HotelsTrustContentPage;

export const Head: HeadFC = () => <title>Hotels Trust Content</title>;