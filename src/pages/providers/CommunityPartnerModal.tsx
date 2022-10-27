import axios from "axios";
import { isString } from "lodash";
import React, { Fragment, useEffect, useRef, useState } from "react";
import UIkit from "uikit";
import useJustValidate from "../../hooks/useJustValidate";
import { COUNTRIES } from "../../utils/countries";
import { urlRegex } from "../../utils/regex";

const CommunityPartnerModal: React.FC = () => {
  return (
    <Fragment>
      <ApplyModal />
      <SuccessModal />
    </Fragment>
  );
};

const BUSSINESS_CATEGORIES = [
  { category: "Option 01" },
  { category: "Option 02" },
];
const PRODUCTS_SERVICES = [{ service: "Option 01" }, { service: "Option 02" }];

const ApplyModal: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const businessRef = useRef<HTMLSelectElement>(null);
  const productsRef = useRef<HTMLSelectElement>(null);
  const { revalidate, validateField } = useJustValidate(
    "modal-apply-partner-form",
    [
      {
        ref: nameRef,
        field: "#partner-name",
        rules: [{ rule: "required" }, { rule: "minLength", value: 3 }],
        config: { errorsContainer: ".error-container-partner-name" },
      },
      {
        ref: emailRef,
        field: "#partner-email",
        rules: [{ rule: "required" }, { rule: "email" }],
        config: { errorsContainer: ".error-container-partner-email" },
      },
      {
        ref: countryRef,
        field: "#partner-country",
        rules: [
          { rule: "required" },
          {
            validator: (value) =>
              value
                ? isString(value)
                  ? COUNTRIES.map(({ code }) => code).includes(value)
                  : false
                : true,
            errorMessage: "Invalid country",
          },
        ],
        config: { errorsContainer: ".error-container-partner-country" },
      },
      {
        ref: websiteRef,
        field: "#partner-website",
        rules: [
          { rule: "required" },
          {
            rule: "customRegexp",
            value: urlRegex,
            errorMessage: "Invalid URL",
          },
        ],
        config: { errorsContainer: ".error-container-partner-website" },
      },
      {
        ref: bioRef,
        field: "#partner-bio",
        rules: [{ rule: "required" }, { rule: "minLength", value: 10 }],
        config: { errorsContainer: ".error-container-partner-bio" },
      },
      {
        ref: businessRef,
        field: "#partner-business_category",
        rules: [
          { rule: "required" },
          {
            validator: (value) =>
              value
                ? isString(value)
                  ? BUSSINESS_CATEGORIES.map(
                      ({ category }) => category
                    ).includes(value)
                  : false
                : true,
            errorMessage: "Invalid business category",
          },
        ],
        config: { errorsContainer: ".error-container-partner-business" },
      },
      {
        ref: productsRef,
        field: "#partner-products_services",
        rules: [
          { rule: "required" },
          {
            validator: (value) =>
              value
                ? isString(value)
                  ? PRODUCTS_SERVICES.map(({ service }) => service).includes(
                      value
                    )
                  : false
                : true,
            errorMessage: "Invalid product or service",
          },
        ],
        config: {
          errorsContainer: ".error-container-partner-products_services",
        },
      },
    ]
  );

  useEffect(() => {
    const listener = async () => {
      setLoading(true);
      if (!(await revalidate())) {
        setLoading(false);
        return;
      }

      const name = nameRef.current?.value;
      const email = emailRef.current?.value;
      const country = countryRef.current?.value;
      const website = websiteRef.current?.value;
      const bio = bioRef.current?.value;
      const business = businessRef.current?.value;
      const product = productsRef.current?.value;

      axios
        .post("/website/partner-application", {
          companyName: name,
          email,
          country,
          website,
          shortCompanyBio: bio,
          businessCategory: business,
          productsServices: product,
        })
        .then((res) => {
          setLoading(false);
          console.log("res", res);
          const nextIdModal = "modal-apply-partner-success";
          const modal = document.getElementById(nextIdModal);
          if (modal) {
            UIkit.modal(modal).show();
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", err);
        });
    };

    const submitButton = document.getElementById(
      "modal-apply-partner-form-submit"
    );

    submitButton?.addEventListener("click", listener);

    return () => {
      submitButton?.removeEventListener("click", listener);
    };
  }, [revalidate]);

  return (
    <div
      id="modal-apply-partner"
      uk-modal="esc-close: false; bg-close: false;  stack: false;"
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <form
          action="#"
          id="modal-apply-partner-form"
          className="uk-form-stacked"
          ref={formRef}
        >
          {!loading && (
            <button
              className="uk-modal-close-default"
              type="button"
              data-uk-close
            ></button>
          )}
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Apply to be a community partner</h2>
          </div>
          <div className="uk-modal-body">
            <div className="uk-margin-medium">
              <div className="uk-margin">
                <h3>
                  <span>Contact Information</span>
                </h3>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Company Name</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-briefcase"></i>
                  </span>
                  <input
                    ref={nameRef}
                    className="uk-input uk-form-width-large"
                    id="partner-name"
                    type="text"
                    placeholder="Company name"
                  />
                </div>
                <div className="error-container-partner-name"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Email</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-envelope-open"></i>
                  </span>
                  <input
                    ref={emailRef}
                    className="uk-input uk-form-width-large"
                    id="partner-email"
                    type="text"
                    placeholder="email"
                  />
                </div>
                <div className="error-container-partner-email"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Country</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={countryRef}
                    className="uk-select uk-form-width-large"
                    id="partner-country"
                    placeholder="Country"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select your country
                    </option>
                    {COUNTRIES.map(({ code, name }) => {
                      return (
                        <option key={code} value={code}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="error-container-partner-country"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Website</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-globe"></i>
                  </span>
                  <input
                    ref={websiteRef}
                    className="uk-input uk-form-width-large"
                    id="partner-website"
                    type="text"
                    placeholder="website"
                  />
                </div>
                <div className="error-container-partner-website"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Short Company Bio</label>
                <div className="uk-form-controls uk-inline">
                  <textarea
                    ref={bioRef}
                    className="uk-textarea uk-form-width-large heigh uk-resize-vertical"
                    style={{ minHeight: "90px" }}
                    rows={3}
                    placeholder="Short company bio"
                    id="partner-bio"
                  ></textarea>
                </div>
                <div className="error-container-partner-bio"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Business Category</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={businessRef}
                    className="uk-select uk-form-width-large"
                    id="partner-business_category"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select your business category
                    </option>
                    {BUSSINESS_CATEGORIES.map(({ category }) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-partner-business"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Products and Services</label>
                <div className="uk-form-controls">
                  <select
                    ref={productsRef}
                    className="uk-select uk-form-width-large"
                    id="partner-products_services"
                    defaultValue=""
                  >
                    <option disabled value="">
                      Select your business product and services
                    </option>
                    {PRODUCTS_SERVICES.map(({ service }) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-partner-products_services"></div>
              </div>
            </div>
          </div>

          <div className="uk-modal-footer uk-text-right">
            {!loading && (
              <a className="uk-button uk-button-link uk-modal-close uk-margin-right">
                close
              </a>
            )}
            <button
              disabled={loading}
              id="modal-apply-partner-form-submit"
              className="uk-button uk-button-primary uk-border-pill"
            >
              Apply now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SuccessModal: React.FC = () => {
  return (
    <div
      id="modal-apply-partner-success"
      uk-modal="esc-close: false; bg-close: false; stack: false;"
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
        ></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">You successfully applied</h2>
        </div>
        <div className="uk-modal-body">
          <div className="uk-margin">
            <h2>
              <i className="las la-lg la-check uk-text-primary uk-margin-small-right"></i>
              Thank you.
            </h2>
            <p>
              You have successfully applied to become a community partner with
              noytrall.
            </p>
            <p>
              You'll be receiveing an email with all the information regarding
              this process.
            </p>
          </div>
        </div>
        <div className="uk-modal-footer uk-text-right">
          <a className="uk-button uk-button-link uk-modal-close uk-margin-right">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartnerModal;
