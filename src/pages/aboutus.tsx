import * as React from "react";
import type { HeadFC } from "gatsby";

import Layout from "../components/layout";
import Menu from "../components/Menu";

import faceMiguel from "../images/face-miguel.png";
import faceMike from "../images/face-mike.png";
import faceDiana from "../images/face-diana.png";
import faceDavid from "../images/face-david.png";
import faceFrancisco from "../images/face-francisco.png";
import facePedro from "../images/face-pedro.png";
import faceMarco from "../images/face-marco.png";

const AboutUsPage = () => {
  return (
    <Layout>
      <Menu/>
      <Content/>
      <MeetTheTeam/>
    </Layout>
  );
};

const Content: React.FC = () => {
    return (
        <div id="" className="uk-section uk-section-default">
        <div className="uk-container uk-container-large">
        
          <div className="uk-child-width-1-2@l" data-uk-grid>
            <div>
              <h1>About us</h1>
              <h1>Mission</h1>
              <h1>Core Values</h1>
              <h1>Vision</h1>
            </div>
          </div>
        </div>
        </div>
    );
  };

  const MeetTheTeam: React.FC = () => {
    return (
        <div id="team" className="uk-section uk-section-muted">
    <div className="uk-container uk-container-large">
      <h1 className="uk-heading-small uk-text-bold uk-text-center uk-margin-large">Meet the team</h1>
      <div className="uk-child-width-1-2@s uk-child-width-1-3@l uk-grid-match" data-uk-grid>
        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img 
              className="uk-border-circle" 
              data-src={faceMiguel} 
              width="100" 
              height="100" 
              alt="" 
              data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Miguel Clemente</h3>
                <span className="uk-display-block uk-text-muted">Co-Founder & CEO</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/miguelrolinhoclemente/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={faceMike}
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Miguel Onofre</h3>
                <span className="uk-display-block uk-text-muted">Co-Founder & CFO</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/miguel-onofre/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={faceDiana} 
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Diana Ferreira</h3>
                <span className="uk-display-block uk-text-muted">Co-Founder & COO</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/ferreira-diana/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={faceDavid} 
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">David Clemente</h3>
                <span className="uk-display-block uk-text-muted">FullStack Developer</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/davidrolinhoclemente/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={faceFrancisco} 
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Francisco Silva</h3>
                <span className="uk-display-block uk-text-muted">Software Engineer</span>
              </div>
              <div className="">
                <a href="https://www.linkedin.com/in/francisco-silva-a74634184/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={facePedro} 
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Pedro Coutinho</h3>
                <span className="uk-display-block uk-text-muted">Head of Design</span>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/pcout" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div data-uk-grid>
            <div className="uk-width-auto@s">
              <img
               className="uk-border-circle" 
               data-src={faceMarco} 
               width="100" 
               height="100" 
               alt="" 
               data-uk-img/>
            </div>
            <div className="uk-width-expand@s">
              <div className="uk-text-left">
                <h3 className="uk-text-top uk-margin-remove">Marco Alves</h3>
                <span className="uk-display-block uk-text-muted">Senior Business Development Manager</span>
              </div>
              <div className="">
                <a href="https://www.linkedin.com/in/marcoalves1/" target="_blank"><i className="lab la-lg la-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  };

export default AboutUsPage;

export const Head: HeadFC = () => <title>About Us</title>;