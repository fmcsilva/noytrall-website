import { round } from "lodash";
import React, { Fragment, useEffect, useMemo, useRef, useState } from "react";
import UIkit from "uikit";
import useJustValidate from "../../../hooks/useJustValidate";

const FORM_ID = "estimate-form";
const ROOM_ID = "estimate-rooms";
const OCCUPANCY_ID = "estimate-occupancy";
const WATER_CONSUMPTION_ID = "estimate-water-consumption";
const WATER_BILL_ID = "estimate-water-bill";
const ENERGY_CONSUMPTION_ID = "estimate-energy-consumption";
const ENERGY_BILL_ID = "estimate-energy-bill";
const CALCULATE_ID = "estimate-button-calculate";

const MAIN_MODAL_ID = "modal-simulator-stack";
const MAIN_MODAL_CLOSE_ID = "modal-simulator-stack-close";
const MAIN_MODAL_CLOSE2_ID = "modal-simulator-stack-close2";

const SUCCESS_MODAL_ID = "modal-simulator-success";
const SUCCESS_MODAL_CLOSE_ID = "modal-simulator-success-close";
const SUCCESS_MODAL_CLOSE2_ID = "modal-simulator-success-close2";

const LS_DATA = "__estimate__";

const errorContainer = (id: string) => {
  return `error-container-${id}`;
};

const ROOM_KEY = "room";
const OCCUPANCY_KEY = "occupancy";
const WATER_CONSUMPTION_KEY = "waterConsumption";
const WATER_BILL_KEY = "waterBill";
const ENERGY_CONSUMPTION_KEY = "energyConsumption";
const ENERGY_BILL_KEY = "energyBill";

const EstimateSavingsModal: React.FC = () => {
  const [state, setState] = useState<Record<string, string>>({});
  const roomRef = useRef<HTMLInputElement>(null);
  const occupationRef = useRef<HTMLInputElement>(null);
  const waterConsumptionRef = useRef<HTMLInputElement>(null);
  const waterBillRef = useRef<HTMLInputElement>(null);
  const energyConsumptionRef = useRef<HTMLInputElement>(null);
  const energyBillRef = useRef<HTMLInputElement>(null);
  const { formIsValid, refresh } = useJustValidate(FORM_ID, [
    {
      ref: roomRef,
      field: `#${ROOM_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(ROOM_ID)}` },
    },
    {
      ref: occupationRef,
      field: `#${OCCUPANCY_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(OCCUPANCY_ID)}` },
    },
    {
      ref: waterConsumptionRef,
      field: `#${WATER_CONSUMPTION_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(WATER_CONSUMPTION_ID)}` },
    },
    {
      ref: waterBillRef,
      field: `#${WATER_BILL_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(WATER_BILL_ID)}` },
    },
    {
      ref: energyConsumptionRef,
      field: `#${ENERGY_CONSUMPTION_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: {
        errorsContainer: `.${errorContainer(ENERGY_CONSUMPTION_ID)}`,
      },
    },
    {
      ref: energyBillRef,
      field: `#${ENERGY_BILL_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(ENERGY_BILL_ID)}` },
    },
  ]);

  useEffect(() => {
    const listener = async (e: SubmitEvent | MouseEvent) => {
      e.preventDefault();
      if (!(await formIsValid())) return;

      const obj: Record<string, string> = {};

      [
        { id: ROOM_ID, key: "room" },
        { id: OCCUPANCY_ID, key: "occupancy" },
        { id: WATER_CONSUMPTION_ID, key: "waterConsumption" },
        { id: WATER_BILL_ID, key: "waterBill" },
        { id: ENERGY_CONSUMPTION_ID, key: "energyConsumption" },
        { id: ENERGY_BILL_ID, key: "energyBill" },
      ].forEach(({ key, id }) => {
        const elem = document.getElementById(id) as
          | HTMLSelectElement
          | HTMLInputElement;
        const value = elem.value;

        obj[key] = value;
      });

      setState(obj);
      localStorage.setItem(LS_DATA, JSON.stringify(obj));
      if (roomRef.current) roomRef.current.value = "";
      if (occupationRef.current) occupationRef.current.value = "";
      if (waterConsumptionRef.current) waterConsumptionRef.current.value = "";
      if (waterBillRef.current) waterBillRef.current.value = "";
      if (energyConsumptionRef.current) energyConsumptionRef.current.value = "";
      if (energyBillRef.current) energyBillRef.current.value = "";
      refresh();
      const nextIdModal = SUCCESS_MODAL_ID;
      const modal = document.getElementById(nextIdModal);
      if (modal) {
        UIkit.modal(modal).show();
      }
    };

    const b = document.getElementById(CALCULATE_ID);
    b?.addEventListener("click", listener);

    const form = document.getElementById(FORM_ID);
    form?.addEventListener("submit", listener);

    return () => {
      b?.removeEventListener("click", listener);
      form?.removeEventListener("submit", listener);
    };
  }, [formIsValid, refresh]);

  useEffect(() => {
    const listener = async () => {
      if (roomRef.current) roomRef.current.value = "";
      if (occupationRef.current) occupationRef.current.value = "";
      if (waterConsumptionRef.current) waterConsumptionRef.current.value = "";
      if (waterBillRef.current) waterBillRef.current.value = "";
      if (energyConsumptionRef.current) energyConsumptionRef.current.value = "";
      if (energyBillRef.current) energyBillRef.current.value = "";
      refresh();
      const modal = document.getElementById(SUCCESS_MODAL_ID);
      if (modal) UIkit.modal(modal).hide();
    };

    const closeButton = document.getElementById(MAIN_MODAL_CLOSE_ID);
    closeButton?.addEventListener("click", listener);
    const close2Button = document.getElementById(MAIN_MODAL_CLOSE2_ID);
    close2Button?.addEventListener("click", listener);

    return () => {
      closeButton?.removeEventListener("click", listener);
      close2Button?.removeEventListener("click", listener);
    };
  }, [refresh]);

  const mainModal = () => {
    const errorDiv = (id: string) => {
      return <div className={errorContainer(id)}></div>;
    };

    const formInputs: {
      title: string;
      inputs: {
        label: string;
        tooltip: string;
        icon: string;
        placeholder: any;
        outOfBoundsHTML: string;
        id: string;
        ref: React.RefObject<HTMLInputElement>;
      }[];
    }[] = [
      {
        title: "Generic Information",
        inputs: [
          {
            label: "Number of rooms",
            tooltip: "Enter the number of rooms of your accommodation.",
            icon: "la-bed",
            placeholder: 0,
            outOfBoundsHTML: "",
            id: ROOM_ID,
            ref: roomRef,
          },
          {
            label: "Average annual occupancy rate",
            tooltip: "Enter your average monthly occupancy rate.",
            icon: "la-user-friends",
            placeholder: 0,
            outOfBoundsHTML: "%",
            id: OCCUPANCY_ID,
            ref: occupationRef,
          },
        ],
      },
      {
        title: "Water consumption Information",
        inputs: [
          {
            label: "Average annual water consumption",
            tooltip: "Enter your average annual water consumption.",
            icon: "la-tint",
            placeholder: 0,
            outOfBoundsHTML: "m<sup>3</sup>",
            id: WATER_CONSUMPTION_ID,
            ref: waterConsumptionRef,
          },
          {
            label: "Average annual water bill value",
            tooltip: "Enter average annual water bill value",
            icon: "la-file-invoice",
            placeholder: 0,
            outOfBoundsHTML: "€",
            id: WATER_BILL_ID,
            ref: waterBillRef,
          },
        ],
      },
      {
        title: "Energy consumption Information",
        inputs: [
          {
            label: "Average annual energy consumption",
            tooltip: "Enter average annual energy consumption",
            icon: "la-bolt",
            placeholder: 0,
            outOfBoundsHTML: "kWh",
            id: ENERGY_CONSUMPTION_ID,
            ref: energyConsumptionRef,
          },
          {
            label: "Average annual energy bill value",
            tooltip: "Enter average annual energy bill value",
            icon: "la-file-invoice",
            placeholder: 0,
            outOfBoundsHTML: "€",
            id: ENERGY_BILL_ID,
            ref: energyBillRef,
          },
        ],
      },
    ];

    return (
      <div
        id={MAIN_MODAL_ID}
        uk-modal="esc-close: false; bg-close: false; stack: false;"
      >
        <div className="uk-modal-dialog">
          <form id="estimate-form" className="uk-form-stacked">
            <button
              id={MAIN_MODAL_CLOSE_ID}
              className="uk-modal-close-default"
              type="button"
              data-uk-close
            ></button>

            <div className="uk-modal-header">
              <h2 className="uk-modal-title">
                Accommodation Savings Calculator
              </h2>
            </div>

            <div className="uk-modal-body">
              {formInputs.map(({ title, inputs }) => (
                <div key={title} className="uk-margin-medium">
                  <div className="uk-margin">
                    <h3>
                      <span>{title}</span>
                    </h3>
                  </div>

                  {inputs.map(
                    ({
                      icon,
                      tooltip,
                      placeholder,
                      outOfBoundsHTML,
                      label,
                      id,
                      ref,
                    }) => (
                      <div key={id} className="uk-margin">
                        <label className="uk-form-label">
                          {label}{" "}
                          <i
                            className="las la-lg la-info-circle uk-text-primary"
                            uk-tooltip={`title: ${tooltip}; pos: right`}
                          ></i>
                        </label>
                        <div>
                          <div className="uk-form-controls uk-inline">
                            <span className="uk-form-icon">
                              <i className={`las la-lg ${icon}`}></i>
                            </span>
                            <input
                              className="uk-input uk-form-width-small uk-text-right"
                              id={id}
                              type="text"
                              {...{ ref, placeholder }}
                            />

                            <span
                              dangerouslySetInnerHTML={{
                                __html: ` ${outOfBoundsHTML}`,
                              }}
                            />
                          </div>
                        </div>
                        {errorDiv(id)}
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="uk-modal-footer uk-text-right">
              <button
                id={MAIN_MODAL_CLOSE2_ID}
                className="uk-button uk-button-link uk-modal-close uk-margin-right"
              >
                Close
              </button>

              <button
                className="uk-button uk-button-primary uk-border-pill"
                id={CALCULATE_ID}
              >
                Estimate now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const successModal = useMemo(() => {
    const numberOfDaysInYear = () => {
      let year = new Date().getFullYear();
      if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) return 366;
      return 365;
    };

    const numberOfDays = numberOfDaysInYear();

    let numberOfRooms: number = eval(state[ROOM_KEY]);
    let averageMonthly_occupancyRate: number = eval(state[OCCUPANCY_KEY]) / 100;
    let averageMonthly_waterConsumption: number = eval(
      state[WATER_CONSUMPTION_KEY]
    );
    let averageMonthly_waterBill: number = eval(state[WATER_BILL_KEY]);
    let averageMonthly_energyConsumption: number = eval(
      state[ENERGY_CONSUMPTION_KEY]
    );
    let averageMonthly_energyBill: number = eval(state[ENERGY_BILL_KEY]);

    let numberOfNights =
      numberOfDays * numberOfRooms * averageMonthly_occupancyRate;
    let averageMonthly_waterPrice =
      averageMonthly_waterBill / averageMonthly_waterConsumption;
    let averageMonthly_energyPrice =
      averageMonthly_energyBill / averageMonthly_energyConsumption;
    let nwc = averageMonthly_waterConsumption / numberOfNights;
    let nec = averageMonthly_energyConsumption / numberOfNights;

    let gwc = eval("0.1");
    let gec = eval("22");

    let dwc = nwc - gwc;
    let dec = nec - gec;

    let saved_waterConsumption = dwc * averageMonthly_waterPrice;
    let saved_energyConsumption = dec * averageMonthly_energyPrice;

    let ts = (saved_waterConsumption + saved_energyConsumption) * 30;

    const savePerRoom = ts;
    const saveAllRooms = savePerRoom * numberOfRooms * 12;

    return (
      <div
        id={SUCCESS_MODAL_ID}
        uk-modal="esc-close: false; bg-close: false; stack: false;"
      >
        <div className="uk-modal-dialog">
          <button className="uk-modal-close-default" type="button"></button>

          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Estimate results</h2>
          </div>

          <div className="uk-modal-body">
            <div className="uk-margin">
              <h2>
                <i className="las la-lg la-check uk-text-primary uk-margin-small-right"></i>
                Thank you.
              </h2>

              <p className="uk-h4 uk-text-muted uk-margin-remove-top">
                Based on the information you provided, by using the noytrall
                technology, we estimate you can save up to:
              </p>

              <h1 className="uk-margin-remove-vertical">
                {round(savePerRoom)} €
              </h1>

              <p className="uk-margin-remove-top uk-text-muted">
                per month, per room
              </p>

              <p>for the {state.room || 0} number of rooms you entered</p>

              <h1 className="uk-margin-remove-vertical">
                {round(saveAllRooms)} €
              </h1>

              <p className="uk-margin-remove-top uk-text-muted">per month</p>
            </div>
          </div>

          <div className="uk-modal-footer uk-text-right">
            <button
              id={SUCCESS_MODAL_CLOSE2_ID}
              className="uk-button uk-button-link uk-margin-right uk-modal-close"
            >
              Close
            </button>

            <a
              className="uk-button uk-button-primary uk-border-pill"
              data-uk-toggle="target: #modal-book-demo-calendar"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    );
  }, [state]);

  return (
    <Fragment>
      {mainModal()}
      {successModal}
    </Fragment>
  );
};

export default EstimateSavingsModal;
