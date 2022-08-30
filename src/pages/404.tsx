import * as React from "react"
import { Link, HeadFC } from "gatsby"

import Layout from "../components/layout";
import Menu from "../components/Menu";

import errorPageNotFound from "../images/404 Error Page not Found with people connecting a plug-bro.png" ;

const NotFoundPage = () => {
  return (
    <Layout>
      <Menu/>
      <Main/>
    </Layout>
  )
}

const Main: React.FC = () => {
  return (
    <div className="uk-section uk-section-default">
    <div id="404" className="uk-flex uk-flex-center uk-flex-middle uk-flex-1">
      <div className="uk-container uk-container-small">
        <div className="uk-text-center">
          <div>
            <h1 className="uk-heading-medium">Nothing to see in here.</h1>
            <p className="uk-text-large uk-text-muted">The page you were looking for could not be found.<br/>It might have been removed, renamed, or did not exist in the first place.</p>
          </div>
          <img 
          className="uk-align-center" 
          data-src={errorPageNotFound}
          width="500" 
          height="" 
          alt="404. Page not found." 
          data-uk-img/>
          <div>
            <a href="#" className="uk-button uk-button-default uk-border-pill">Go Back</a>
            <a href="index.htm" className="uk-button uk-button-primary uk-border-pill uk-margin-left">Take me home</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
