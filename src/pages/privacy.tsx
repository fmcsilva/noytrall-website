import React from "react";

import Layout from "../components/layout";

import Menu from "../components/Menu";

const Privacy: React.FC = () => {
  return (
    <Layout title="Privacy Policy. noytrall. Stay Smart.">
      <Menu />
      <Content />
    </Layout>
  );
};

const Content: React.FC = () => {
  return (
    <div>
      <div id="" className="uk-section uk-section-default">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-1-2@l" data-uk-grid>
            <div>
              <h1>noytrall privacy policy</h1>

              <h3>What information do we collect?</h3>
              <p>
                We collect information from you when you respond to a survey.
              </p>

              <p>
                Google, as a third party vendor, uses cookies to serve ads on
                your site. Google's use of the DART cookie enables it to serve
                ads to your users based on their visit to your sites and other
                sites on the Internet. Users may opt out of the use of the DART
                cookie by visiting the Google ad and content network privacy
                policy.
              </p>

              <h3>What do we use your information for?</h3>
              <p>
                Any of the information we collect from you may be used in one of
                the following ways:
              </p>

              <p>To improve our website</p>

              <p>
                (we continually strive to improve our website offerings based on
                the information and feedback we receive from you)
              </p>

              <h3>Do we use cookies?</h3>
              <p>
                Yes (Cookies are small files that a site or its service provider
                transfers to your computers hard drive through your Web browser
                (if you allow) that enables the sites or service providers
                systems to recognize your browser and capture and remember
                certain information.
              </p>

              <p>
                We use cookies to compile aggregate data about site traffic and
                site interaction so that we can offer better site experiences
                and tools in the future. We may contract with third-party
                service providers to assist us in better understanding our site
                visitors. These service providers are not permitted to use the
                information collected on our behalf except to help us conduct
                and improve our business.
              </p>

              <h3>Do we disclose any information to outside parties?</h3>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information. This does not include
                trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, so long as those
                parties agree to keep this information confidential. We may also
                release your information when we believe release is appropriate
                to comply with the law, enforce our site policies, or protect
                ours or others rights, property, or safety. However,
                non-personally identifiable visitor information may be provided
                to other parties for marketing, advertising, or other uses.
              </p>

              <h3>Third party links</h3>
              <p>
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites.
              </p>

              <h3>California Online Privacy Protection Act Compliance</h3>
              <p>
                Because we value your privacy we have taken the necessary
                precautions to be in compliance with the California Online
                Privacy Protection Act. We therefore will not distribute your
                personal information to outside parties without your consent.
              </p>

              <h3>Childrens Online Privacy Protection Act Compliance</h3>
              <p>
                We are in compliance with the requirements of COPPA (Childrens
                Online Privacy Protection Act), we do not collect any
                information from anyone under 13 years of age. Our website,
                products and services are all directed to people who are at
                least 13 years old or older.
              </p>

              <h3>Online Privacy Policy Only</h3>
              <p>
                This online privacy policy applies only to information collected
                through our website and not to information collected offline.
              </p>

              <h3>Terms and Conditions</h3>
              <p>
                Please also visit our Terms and Conditions section establishing
                the use, disclaimers, and limitations of liability governing the
                use of our website at terms and conditions.
              </p>

              <h3>Your Consent</h3>
              <p>By using our site, you consent to our privacy policy.</p>

              <h3>Changes to our Privacy Policy</h3>
              <p>
                If we decide to change our privacy policy, we will post those
                changes on this page, and/or update the Privacy Policy
                modification date below.
              </p>

              <p>This policy was last modified on 2013-12-16</p>

              <h3>Contacting Us</h3>
              <p>
                If there are any questions regarding this privacy policy you may
                contact us using the information below.
              </p>

              <p>
                126 Electricov St.
                <br />
                Kiev, Kiev 04176
                <br />
                Ukraine
              </p>
              <a href="#">contact@noytrall.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
