import { isBoolean, isString } from "lodash";
import React, { useEffect, useRef } from "react";
import UIkit from "uikit";
import useJustValidate from "../../../hooks/useJustValidate";
import { urlRegex } from "../../../utils/regex";
import { normalizeString } from "../../../utils/strings";
import useBookDemoDataDispatch from "../context/BookDemoData/hooks/useBookDemoDataDispatch";

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

const FORM_ID = "book-demo-step-1-form";
const NAME_ID = "book-demo-step-1-form-name";
const EMAIL_ID = "book-demo-step-1-form-email";
const JOB_TITLE_ID = "book-demo-step-1-form-jobtitle";
const HOTEL_NAME_ID = "book-demo-step-1-form-hotelname";
const WEBSITE_ID = "book-demo-step-1-form-website";

const BookADemo1: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const jobTitleRef = useRef<HTMLSelectElement>(null);
  const hotelNameRef = useRef<HTMLInputElement>(null);
  const websiteRef = useRef<HTMLInputElement>(null);
  const { formIsValid } = useJustValidate(FORM_ID, [
    {
      field: `#${NAME_ID}`,
      rules: [
        {
          rule: "required",
        },
        {
          validator: (value) => {
            if (isBoolean(value)) return value;
            const l = value.split("").filter((c) => {
              return !"abcdefghijklmnopqrstucwxyz -ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                .split("")
                .includes(normalizeString(c));
            });
            return l.length === 0;
          },
          errorMessage: "Invalid character",
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
      field: `#${EMAIL_ID}`,
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
      field: `#${JOB_TITLE_ID}`,
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
      field: `#${HOTEL_NAME_ID}`,
      rules: [{ rule: "minLength", value: 3 }],
      config: { errorsContainer: ".error-container-hotelname" },
    },
    {
      field: `#${WEBSITE_ID}`,
      rules: [
        { rule: "customRegexp", value: urlRegex, errorMessage: "Invalid URL" },
      ],
      config: {
        errorsContainer: ".error-container-website",
      },
    },
  ]);
  const { updateData } = useBookDemoDataDispatch();

  useEffect(() => {
    const func = async () => {
      if (!(await formIsValid())) return;

      const obj: Record<string, any> = {};

      [
        { key: "name", id: NAME_ID },
        { id: EMAIL_ID, key: "email" },
        { id: HOTEL_NAME_ID, key: "hotelName" },
        { id: JOB_TITLE_ID, key: "jobTitle" },
        { id: WEBSITE_ID, key: "website" },
      ].forEach(({ key, id }) => {
        const elem = document.getElementById(id) as
          | HTMLSelectElement
          | HTMLInputElement;
        const value = elem.value;

        obj[key] = value;
      });

      updateData(obj);

      const nextIdModal = "modal-book-demo-step-2";
      const modal = document.getElementById(nextIdModal);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const b = document.getElementById("goto-book-demo-2");
    b?.addEventListener("click", func);

    const form = document.getElementById(FORM_ID);
    form?.addEventListener("submit", func);

    return () => {
      b?.removeEventListener("click", func);
      form?.removeEventListener("submit", func);
    };
  }, [formIsValid]);

  return (
    <div
      id="modal-book-demo-step-1"
      uk-modal="esc-close: false; bg-close: false;  stack: false;"
      style={{ zIndex: 10000 }}
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <form action="#" id={FORM_ID} className="uk-form-stacked">
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
                    ref={nameRef}
                    className="uk-input uk-form-width-large"
                    type="text"
                    placeholder="Name"
                    id={NAME_ID}
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
                    ref={emailRef}
                    className="uk-input uk-form-width-large"
                    id={EMAIL_ID}
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="error-container-email"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Job Title{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={jobTitleRef}
                    className="uk-select uk-form-width-large"
                    id={JOB_TITLE_ID}
                    placeholder="Job Title"
                    defaultValue={""}
                  >
                    <option value="" disabled>
                      Select your job title
                    </option>
                    {JOB_TITLES.map((title) => (
                      <option key={title}>{title}</option>
                    ))}
                  </select>
                </div>
                <div className="error-container-jobtitle"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Hotel name{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-hotel"></i>
                  </span>
                  <input
                    ref={hotelNameRef}
                    className="uk-input uk-form-width-large"
                    id={HOTEL_NAME_ID}
                    type="text"
                    placeholder="Hotel Name"
                  />
                </div>
                <div className="error-container-hotelname"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Website{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-globe"></i>
                  </span>
                  <input
                    ref={websiteRef}
                    className="uk-input uk-form-width-large"
                    id={WEBSITE_ID}
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
              Optional Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookADemo1;
