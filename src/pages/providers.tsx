import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Layout from "../components/layout";

const Providers: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Content />
      <Form />
      <Footer />
    </Layout>
  );
};

const Hero: React.FC = () => {
  return (
    <div
      className="uk-section uk-section-primary uk-padding-remove uk-flex uk-flex-center uk-flex-middle"
      data-uk-height-viewport="offset-bottom: 30"
    >
      <div id="hero" className="uk-margin-auto uk-padding-large uk-flex-1">
        <div className="uk-container uk-container-large">
          <div>
            <h1 className="uk-heading-medium">Be part of a huge community</h1>
            <h2 className="uk-margin-remove">
              Expose your business to the industry and reach customers from all
              over the world.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

const Content: React.FC = () => {
  return (
    <div id="" className="uk-section uk-section-default">
      <div className="uk-container uk-container-large">
        <div className="uk-child-width-1-2@s uk-margin-large" data-uk-grid>
          <div>
            <h3>What is a community provider?</h3>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum ac quam ut erat
              gravida pretium vitae non nunc. Vestibulum eget nibh eget lectus
              elementum pellentesque. Sed accumsan, lectus condimentum pulvinar
              luctus, enim magna elementum leo, in vestibulum velit felis non
              odio. Vivamus augue ex, condimentum id mauris ac, sollicitudin
              faucibus arcu.
            </p>
          </div>

          <div>
            <h3>Why should I be a community provider?</h3>
            <p>
              Sed in consequat nisl. Sed tincidunt turpis risus, et fringilla
              eros volutpat in. Proin nunc nunc, scelerisque id malesuada vitae,
              condimentum non metus. Vestibulum iaculis, urna nec vehicula
              blandit, massa urna aliquet leo, a consectetur mauris quam nec
              justo. Proin eget elit non mauris fermentum faucibus quis a nisi.
              Morbi et odio sed eros imperdiet dapibus ac ut ante. Donec in
              mattis leo. Sed elit lacus, condimentum ut sodales vel, varius ut
              arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form: React.FC = () => {
  return (
    <>
      <div id="" className="uk-section uk-section-default">
        <div className="uk-container uk-container-large">
          <h1 className="uk-heading-small uk-text-bold uk-text-center uk-margin-large">
            Apply now to become a community provider
          </h1>
        </div>
      </div>

      <div id="" className="uk-section uk-section-default">
        <div className="uk-container uk-container-large uk-flex uk-flex-center">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label">Name</label>
              <div className="uk-form-controls">
                <input
                  className="uk-input uk-form-width-large"
                  id=""
                  type="text"
                  placeholder="Large"
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">Tex Area</label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea uk-form-width-large heigh uk-resize-vertical"
                  style={{ minHeight: "90px" }}
                  rows={3}
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">Select</label>
              <div className="uk-form-controls">
                <select className="uk-select uk-form-width-medium" id="">
                  <option>Option 01</option>
                  <option>Option 02</option>
                </select>
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-form-label">Radio</div>
              <div className="uk-form-controls">
                <label className="uk-display-block">
                  <input
                    className="uk-radio uk-margin-small-right"
                    type="radio"
                    name="radio1"
                  />
                  Option 01
                </label>
                <label className="uk-display-block">
                  <input
                    className="uk-radio uk-margin-small-right"
                    type="radio"
                    name="radio1"
                  />
                  Option 02
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Providers;