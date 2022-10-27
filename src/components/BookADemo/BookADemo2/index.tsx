import { isString } from "lodash";
import React, { useEffect, useMemo, useReducer, useRef } from "react";
import UIkit from "uikit";
import useJustValidate from "../../../hooks/useJustValidate";
import { COUNTRIES } from "../../../utils/countries";
import { isValidPhoneNumber } from "../../../utils/regex";

import intlTelInput from "intl-tel-input";

import "intl-tel-input/build/css/intlTelInput.css";

import "./styles.css";
import useBookDemoDataDispatch from "../context/BookDemoData/hooks/useBookDemoDataDispatch";

const BUSINESS_TYPES = [
  "Accommodation Business",
  "Consulting Company",
  "Architecture Office",
  "Interior Design Firm",
  "Other",
];

const MANAGEMENT_TYPE = [
  "Hotel Group",
  "Hotel Network",
  "Hospitality Management Company",
  "Independent",
  "Other",
];

const ACCOMMODATION_TYPES = [
  "Hotel",
  "Conference Hotel",
  "Resort",
  "Apartments",
  "Vacation Rental",
  "Hostel",
  "Guest House",
  "B&B",
  "Inn or Motel",
  "Ecotourism Lodge",
  "Country Retreat",
  "Other",
];

const FORM_ID = "book-demo-step-2-form";
const PHONE_ID = "book-demo-step-2-phone";
const BUSINESS_ID = "book-demo-step-2-business";
const MANAGEMENT_ID = "book-demo-step-2-management";
const COUNTRY_ID = "book-demo-step-2-country";
const ACCOMMODATION_ID = "book-demo-step-2-accommodation";

interface iState {
  phoneNumber?: string;
  country?: string;
  businessType?: string;
  accommodationType?: string;
  managementType?: string;
}
type tAction = { type: "change"; key: string; value: any };

const initialState: iState = {
  phoneNumber: "",
  country: "",
  businessType: "",
  accommodationType: "",
  managementType: "",
};

const reducer = (state: iState, action: tAction): iState => {
  switch (action.type) {
    case "change": {
      const { key, value } = action;
      return { ...state, [key]: value };
    }
    default: {
      return { ...state };
    }
  }
};

const BookADemo2: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    phoneNumber,
    businessType,
    managementType,
    accommodationType,
    country,
  } = state;

  const phoneRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);
  const businessRef = useRef<HTMLSelectElement>(null);
  const managementRef = useRef<HTMLSelectElement>(null);
  const accommodationRef = useRef<HTMLSelectElement>(null);
  const { formIsValid } = useJustValidate(FORM_ID, [
    {
      ref: phoneRef,
      field: `#${PHONE_ID}`,
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? isValidPhoneNumber(value)
                : false
              : true,
        },
      ],
      config: {
        errorsContainer: ".error-container-phone",
      },
    },
    {
      ref: countryRef,
      field: `#${COUNTRY_ID}`,
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? COUNTRIES.map(({ code }) => code).includes(value)
                : false
              : true,
          errorMessage: "Invalid job title",
        },
      ],
      config: {
        errorsContainer: ".error-container-country",
      },
    },
    {
      ref: businessRef,
      field: `#${BUSINESS_ID}`,
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? BUSINESS_TYPES.includes(value)
                : false
              : true,
          errorMessage: "Invalid job title",
        },
      ],
      config: {
        errorsContainer: ".error-container-business",
      },
    },
    {
      ref: accommodationRef,
      field: `#${ACCOMMODATION_ID}`,
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? ACCOMMODATION_TYPES.includes(value)
                : false
              : true,
          errorMessage: "Invalid accommodation",
        },
      ],
      config: {
        errorsContainer: ".error-container-accommodation",
      },
    },
    {
      ref: managementRef,
      field: `#${MANAGEMENT_ID}`,
      rules: [
        {
          validator: (value) =>
            value
              ? isString(value)
                ? MANAGEMENT_TYPE.includes(value)
                : false
              : true,
          errorMessage: "Invalid management",
        },
      ],
      config: {
        errorsContainer: ".error-container-management",
      },
    },
  ]);
  const { updateBook2: updateData } = useBookDemoDataDispatch();
  useEffect(() => {
    const input = document.querySelector(`#${PHONE_ID}`);
    if (input) intlTelInput(input, {});
  }, []);

  const ids = useMemo(() => {
    return [
      { id: PHONE_ID, key: "phoneNumber" },
      { id: COUNTRY_ID, key: "country" },
      { id: BUSINESS_ID, key: "businessType" },
      { id: ACCOMMODATION_ID, key: "accommodationType" },
      { id: MANAGEMENT_ID, key: "managementType" },
    ];
  }, []);

  useEffect(() => {
    const listener = (key: string, field: string) => (e: any) => {
      dispatch({ type: "change", key, value: e.target.value });
    };

    ids.forEach(({ id, key }) => {
      document
        .getElementById(id)
        ?.addEventListener("change", listener(key, id));
    });

    return () => {
      ids.forEach(({ id, key }) => {
        document
          .getElementById(id)
          ?.removeEventListener("change", listener(key, id));
      });
    };
  }, [ids]);

  useEffect(() => {
    const func = () => {
      if (!formIsValid()) return;

      const obj: Record<string, any> = {};

      ids.forEach(({ key, id }) => {
        const elem = document.getElementById(id) as
          | HTMLSelectElement
          | HTMLInputElement;
        const value = elem.value;

        obj[key] = value;
      });
      updateData(obj);

      const nextModalId = "modal-book-demo-calendar";
      const modal = document.getElementById(nextModalId);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const gotoPrevious = () => {
      console.log("PREVIOUS");
      const previousModalId = "modal-book-demo-step-1";
      const modal = document.getElementById(previousModalId);
      console.log("modal", modal);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const buttonGotoPrevious = document.getElementById(
      "book-demo-setp-2-goto-previous"
    );
    buttonGotoPrevious?.addEventListener("click", gotoPrevious);

    const buttonGotoNext = document.getElementById("goto-confirm-book-demo");
    buttonGotoNext?.addEventListener("click", func);

    const form = document.getElementById(FORM_ID);
    form?.addEventListener("submit", func);

    return () => {
      buttonGotoPrevious?.removeEventListener("click", gotoPrevious);
      buttonGotoNext?.removeEventListener("click", func);
      form?.removeEventListener("submit", func);
    };
  }, [formIsValid, ids]);

  return (
    <div
      id="modal-book-demo-step-2"
      uk-modal="esc-close: false; bg-close: false; stack: true;"
      style={{ zIndex: 10001 }}
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <form action="#" id={FORM_ID} className="uk-form-stacked">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>
          <div className="uk-modal-header">
            <h2 className="uk-modal-title">
              Book a demo (optional information)
            </h2>
          </div>
          <div className="uk-modal-body">
            <div className="uk-margin-medium">
              <div className="uk-margin">
                <h3>
                  <span>Optional Information</span>
                </h3>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Phone Number{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-mobile"></i>
                  </span>
                  <input
                    ref={phoneRef}
                    className="uk-input uk-form-width-medium"
                    id={PHONE_ID}
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="error-container-phone"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Country{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={countryRef}
                    defaultValue={country || ""}
                    className="uk-select uk-form-width-large"
                    id={COUNTRY_ID}
                    placeholder="Country"
                  >
                    <option disabled value="">
                      Select your country
                    </option>
                    {COUNTRIES.map(({ code, name }) => (
                      <option key={code} value={code}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-country"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">
                  Business Type{" "}
                  <span className="uk-badge uk-background-secondary uk-margin-small-left">
                    optional
                  </span>
                </label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={businessRef}
                    defaultValue={businessType || ""}
                    className="uk-select uk-form-width-large"
                    id={BUSINESS_ID}
                    placeholder="Business Type"
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {BUSINESS_TYPES.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-business"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Accommodation Type</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={accommodationRef}
                    defaultValue={accommodationType || ""}
                    disabled={businessType !== "Accommodation Business"}
                    className="uk-select uk-form-width-large"
                    id={ACCOMMODATION_ID}
                    placeholder="Accommodation Category"
                  >
                    <option value="" disabled>
                      Select your accommodation type
                    </option>
                    {ACCOMMODATION_TYPES.map((value) => (
                      <option value={value} key={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-accommodation"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Management Type</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    ref={managementRef}
                    defaultValue={managementType || ""}
                    disabled={businessType !== "Accommodation Business"}
                    className="uk-select uk-form-width-large"
                    id={MANAGEMENT_ID}
                    placeholder="Management Type"
                  >
                    <option value="" disabled>
                      Select your management type
                    </option>
                    {MANAGEMENT_TYPE.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="error-container-management"></div>
              </div>
            </div>
          </div>
          <div className="uk-modal-footer uk-text-right">
            {/* <button
              id="book-demo-setp-2-goto-previous"
              className="uk-button uk-button-default uk-border-pill uk-modal-close uk-margin-right"
              // data-uk-toggle="target: #modal-book-demo-step-1"
            >
              Previous
            </button> */}
            <a
              href="#modal-book-demo-step-1"
              className="uk-button uk-button-default uk-border-pill uk-modal-close uk-margin-right"
              // data-uk-toggle="target: #modal-book-demo-step-1"
            >
              Previous
            </a>
            <button
              id="goto-confirm-book-demo"
              className="uk-button uk-button-primary uk-border-pill"
            >
              Pick a date and time
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookADemo2;
