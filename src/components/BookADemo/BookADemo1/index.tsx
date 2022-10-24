import { isString } from "lodash";
import React, { useEffect } from "react";
import UIkit from "uikit";
import useJustValidate from "../../../hooks/useJustValidate";
import { urlRegex } from "../../../utils/regex";

const JOB_TITLES: string[] = [
  "Owner",
  "Chief Executive Officer",
  "Chief Operations Officer",
  "Chief Financial Officer",
  "Board Advisor",
  "General Manager",
  "Marketing Director",
  "Sales Director",
  "Sustainability Manager",
  "Technical and Maintenance Manager",
  "Sustainability Consultant",
  "Hospitality Consultant",
  "Project Manager",
  "Architect",
  "Interior Designer",
  "Other",
];

const BookADemo1: React.FC = () => {
  const { formIsValid } = useJustValidate("book-demo-step-1-form", [
    {
      field: "#book-demo-step-1-form-name",
      rules: [
        {
          rule: "required",
          errorMessage: "Name is required",
        },
        {
          rule: "minLength",
          value: 3,
        },
      ],

      config: {
        errorsContainer: ".error-container-name",
      },
    },
    {
      field: "#book-demo-step-1-form-email",
      rules: [
        {
          rule: "required",
          errorMessage: "Email is required",
        },
        {
          rule: "email",
          errorMessage: "Email is invalid",
        },
      ],
      config: {
        errorsContainer: ".error-container-email",
      },
    },
    {
      field: "#book-demo-step-1-form-jobtitle",
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? JOB_TITLES.includes(value)
                : false
              : true,
          errorMessage: "Invalid job title",
        },
      ],
      config: { errorsContainer: ".error-container-jobtitle" },
    },
    {
      field: "#book-demo-step-1-form-hotelname",
      rules: [{ rule: "minLength", value: 5 }],
      config: { errorsContainer: ".error-container-hotelname" },
    },
    {
      field: "#book-demo-step-1-form-website",
      rules: [
        { rule: "customRegexp", value: urlRegex, errorMessage: "Invalid URL" },
      ],
      config: {
        errorsContainer: ".error-container-website",
      },
    },
  ]);

  useEffect(() => {
    const func = () => {
      if (!formIsValid()) return;
      const nextIdModal = "modal-book-demo-step-2";
      const modal = document.getElementById(nextIdModal);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const b = document.getElementById("goto-book-demo-2");
    b?.addEventListener("click", func);

    const form = document.getElementById("book-demo-step-1-form");
    form?.addEventListener("submit", func);

    return () => {
      b?.removeEventListener("click", func);
      form?.removeEventListener("submit", func);
    };
  }, [formIsValid]);

  return (
    <div
      id="modal-book-demo-step-1"
      uk-modal="esc-close: false; bg-close: false;  stack: true;"
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <form action="#" id="book-demo-step-1-form" className="uk-form-stacked">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Book a demo</h2>
          </div>
          <div className="uk-modal-body">
            <div className="uk-margin-medium">
              <div className="uk-margin">
                <h3>
                  <span>Contact Information</span>
                </h3>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Name</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-user"></i>
                  </span>
                  <input
                    className="uk-input uk-form-width-large"
                    type="text"
                    placeholder="Name"
                    id="book-demo-step-1-form-name"
                  />
                </div>
                <div className="error-container-name"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Email</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-envelope-open"></i>
                  </span>
                  <input
                    className="uk-input uk-form-width-large"
                    id="book-demo-step-1-form-email"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="error-container-email"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Job Title (optional)</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    className="uk-select uk-form-width-large"
                    id="book-demo-step-1-form-jobtitle"
                    placeholder="Job Title"
                    value={""}
                    onChange={(e) => {
                      console.log("e", e);
                    }}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {JOB_TITLES.map((title) => (
                      <option key={title}>{title}</option>
                    ))}
                  </select>
                </div>
                <div className="error-container-jobtitle"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Hotel name (optional)</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-hotel"></i>
                  </span>
                  <input
                    className="uk-input uk-form-width-large"
                    id="book-demo-step-1-form-hotelname"
                    type="text"
                    placeholder="Hotel Name"
                  />
                </div>
                <div className="error-container-hotelname"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Website (optional)</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-globe"></i>
                  </span>
                  <input
                    className="uk-input uk-form-width-large"
                    id="book-demo-step-1-form-website"
                    type="text"
                    placeholder="Website"
                  />
                </div>
                <div className="error-container-website"></div>
              </div>
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            <a className="uk-button uk-button-link uk-modal-close uk-margin-right">
              close
            </a>
            <button
              id="goto-book-demo-2"
              className="uk-button uk-button-primary uk-border-pill"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookADemo1;
