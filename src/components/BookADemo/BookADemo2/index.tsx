import { isString } from "lodash";
import React, { useEffect, useReducer } from "react";
import UIkit from "uikit";
import useJustValidate from "../../../hooks/useJustValidate";
import { COUNTRIES } from "../../../utils/countries";
import { isValidPhoneNumber } from "../../../utils/regex";

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
  const { formIsValid, justValidate } = useJustValidate(
    "book-demo-step-2-form",
    [
      {
        field: "#book-demo-step-2-phone",
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
        field: "#book-demo-step-2-country",
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
        field: "#book-demo-step-2-business",
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
        field: "#book-demo-step-2-accommodation",
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
        field: "#book-demo-step-2-management",
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
    ]
  );

  useEffect(() => {
    // if (!justValidate) return;
    const listener = (key: string, field: string) => (e: any) => {
      // console.log("justValidate", justValidate);
      // if (justValidate) {
      //   justValidate.revalidateField(`#${field}`).then((isSuccess) => {
      //     console.log("isSuccess", isSuccess);
      //     dispatch({ type: "change", key, value: e.target.value });
      // });
      // } else {
      dispatch({ type: "change", key, value: e.target.value });
      // }
    };
    const ids = [
      { id: "book-demo-step-2-phone", key: "phoneNumber" },
      { id: "book-demo-step-2-country", key: "country" },
      { id: "book-demo-step-2-business", key: "businessType" },
      { id: "book-demo-step-2-accommodation", key: "accommodationType" },
      { id: "book-demo-step-2-management", key: "managementType" },
    ];

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
  }, []);

  useEffect(() => {
    const func = () => {
      if (!formIsValid()) return;
      const nextIdModal = "modal-book-demo-calendar";
      const modal = document.getElementById(nextIdModal);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const b = document.getElementById("goto-confirm-book-demo");
    b?.addEventListener("click", func);

    const form = document.getElementById("book-demo-step-2-form");
    form?.addEventListener("submit", func);

    return () => {
      b?.removeEventListener("click", func);
      form?.removeEventListener("submit", func);
    };
  }, [formIsValid]);

  const handleChange = (e: any) => {};

  return (
    <div
      id="modal-book-demo-step-2"
      uk-modal="esc-close: true; bg-close: true; stack: true;"
      style={{ zIndex: 10001 }}
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <form action="#" id="book-demo-step-2-form" className="uk-form-stacked">
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
                <label className="uk-form-label">Phone Number (optional)</label>
                <div className="uk-form-controls uk-inline">
                  <span className="uk-form-icon">
                    <i className="las la-lg la-mobile"></i>
                  </span>
                  <input
                    className="uk-input uk-form-width-medium"
                    id="book-demo-step-2-phone"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="error-container-phone"></div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Country (optional)</label>
                <div className="uk-form-controls uk-inline">
                  <select
                    onChange={handleChange}
                    value={country || ""}
                    className="uk-select uk-form-width-large"
                    id="book-demo-step-2-country"
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
                  Business Type (optional)
                </label>
                <div className="uk-form-controls uk-inline">
                  <select
                    onChange={handleChange}
                    value={businessType || ""}
                    className="uk-select uk-form-width-large"
                    id="book-demo-step-2-business"
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
                    onChange={handleChange}
                    value={accommodationType || ""}
                    disabled={businessType !== "Accommodation Business"}
                    className="uk-select uk-form-width-large"
                    id="book-demo-step-2-accommodation"
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
                    value={managementType || ""}
                    disabled={businessType !== "Accommodation Business"}
                    className="uk-select uk-form-width-large"
                    id="book-demo-step-2-management"
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
            <a
              href="#modal-book-demo-step-1"
              className="uk-button uk-button-default uk-border-pill uk-modal-close uk-margin-right"
            >
              Previous
            </a>
            <button
              id="goto-confirm-book-demo"
              // type="submit"
              // data-uk-toggle="target: #modal-book-demo-success"
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
