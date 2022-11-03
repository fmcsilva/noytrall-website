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

const SUCCESS_MODAL_ID = "modal-simulator-success";

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
  const { formIsValid } = useJustValidate(FORM_ID, [
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
      config: { errorsContainer: `.${errorContainer(ENERGY_CONSUMPTION_ID)}` },
    },
    {
      ref: energyBillRef,
      field: `#${ENERGY_BILL_ID}`,
      rules: [{ rule: "required" }, { rule: "number" }],
      config: { errorsContainer: `.${errorContainer(ENERGY_BILL_ID)}` },
    },
  ]);

  useEffect(() => {
    const listener = async () => {
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
  }, [formIsValid]);

  const mainModal = () => {
    const errorDiv = (id: string) => {
      return <div className={errorContainer(id)}></div>;
    };
    return (
      <div
        id="modal-simulator-stack"
        uk-modal="esc-close: false; bg-close: false; stack: false;"
      >
        <div className="uk-modal-dialog">
          <form id="estimate-form" className="uk-form-stacked">
            <button
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
              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3>
                    <span>Generic Information</span>
                  </h3>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">Number of rooms</label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter the number of rooms of your accommodation.
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-bed"></i>
                    </span>

                    <input
                      ref={roomRef}
                      className="uk-input uk-form-width-small uk-text-right"
                      id={ROOM_ID}
                      type="text"
                      placeholder="0"
                    />
                  </div>
                  {errorDiv(ROOM_ID)}
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average monthly occupancy rate
                  </label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter your average monthly occupancy rate.
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-user-friends"></i>
                    </span>
                    <input
                      className="uk-input uk-form-width-small uk-text-right"
                      id={OCCUPANCY_ID}
                      type="text"
                      placeholder="0"
                      ref={occupationRef}
                    />{" "}
                    %
                  </div>
                  {errorDiv(OCCUPANCY_ID)}
                </div>
              </div>

              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3>
                    <span>Water consumption Information</span>
                  </h3>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual water consumption{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Enter your average monyhly water consumption.
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-tint"></i>
                    </span>
                    <input
                      ref={waterConsumptionRef}
                      className="uk-input uk-form-width-small uk-text-right"
                      id={WATER_CONSUMPTION_ID}
                      type="text"
                      placeholder="0"
                    />{" "}
                    m<sup>3</sup>
                  </div>
                  {errorDiv(WATER_CONSUMPTION_ID)}
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual water bill value{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual water bill value description
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-file-invoice"></i>
                    </span>
                    <input
                      ref={waterBillRef}
                      className="uk-input uk-form-width-small uk-text-right"
                      id={WATER_BILL_ID}
                      type="text"
                      placeholder="0"
                    />{" "}
                    €
                  </div>
                  {errorDiv(WATER_BILL_ID)}
                </div>
              </div>

              <div className="uk-margin-medium">
                <div className="uk-margin">
                  <h3>
                    <span>Energy consumption Information</span>
                  </h3>
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual energy consumption{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual energy consumption description
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-bolt"></i>
                    </span>
                    <input
                      ref={energyConsumptionRef}
                      className="uk-input uk-form-width-small uk-text-right"
                      id={ENERGY_CONSUMPTION_ID}
                      type="text"
                      placeholder="0"
                    />{" "}
                    kWh
                  </div>
                  {errorDiv(ENERGY_CONSUMPTION_ID)}
                </div>

                <div className="uk-margin">
                  <label className="uk-form-label">
                    Average annual energy bill value{" "}
                    <i
                      className="las la-lg la-info-circle uk-text-primary"
                      uk-tooltip="title: Hello World; pos: right"
                    ></i>
                  </label>

                  <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                    Average annual energy bill value description
                  </div>

                  <div className="uk-form-controls uk-inline">
                    <span className="uk-form-icon">
                      <i className="las la-lg la-file-invoice"></i>
                    </span>
                    <input
                      ref={energyBillRef}
                      className="uk-input uk-form-width-small uk-text-right"
                      id={ENERGY_BILL_ID}
                      type="text"
                      placeholder="0"
                    />{" "}
                    €
                  </div>
                  {errorDiv(ENERGY_BILL_ID)}
                </div>
              </div>
            </div>

            <div className="uk-modal-footer uk-text-right">
              <a
                href="#modal-simulator-stack"
                className="uk-button uk-button-link uk-modal-close uk-margin-right"
                data-uk-toggle
              >
                Close
              </a>

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
    let numberOfRooms: number = eval(state[ROOM_KEY]);
    let averageMonthly_occupancyRate: number = eval(state[OCCUPANCY_KEY]);
    let averageMonthly_waterConsumption: number = eval(
      state[WATER_CONSUMPTION_KEY]
    );
    let averageMonthly_waterBill: number = eval(state[WATER_BILL_KEY]);
    let averageMonthly_energyConsumption: number = eval(
      state[ENERGY_CONSUMPTION_KEY]
    );
    let averageMonthly_energyBill: number = eval(state[ENERGY_BILL_KEY]);

    let non = 30 * numberOfRooms * averageMonthly_occupancyRate;
    let averageMonthly_waterPrice =
      averageMonthly_waterBill / averageMonthly_waterConsumption;
    let averageMonthly_energyPrice =
      averageMonthly_energyBill / averageMonthly_energyConsumption;
    let nwc = averageMonthly_waterConsumption / non;
    let nec = averageMonthly_energyConsumption / non;

    let gwc = eval("0.1");
    let gec = eval("22");

    let dwc = nwc - gwc;
    let dec = nec - gec;

    let saved_waterConsumption = dwc * averageMonthly_waterPrice;
    let saved_energyConsumption = dec * averageMonthly_energyPrice;

    let ts = (saved_waterConsumption + saved_energyConsumption) * 30;

    const savePerRoom = ts * 12;
    const saveAllRooms = savePerRoom * numberOfRooms;

    return (
      <div
        id={SUCCESS_MODAL_ID}
        uk-modal="esc-close: false; bg-close: false; stack: false;"
      >
        <div className="uk-modal-dialog">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>

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

              <h1 className="uk-margin-remove-vertical">{savePerRoom} €</h1>

              <p className="uk-margin-remove-top uk-text-muted">
                per year, per room
              </p>

              <p>for the {state.room || 0} number of rooms you entered</p>

              <h1 className="uk-margin-remove-vertical">{saveAllRooms} €</h1>

              <p className="uk-margin-remove-top uk-text-muted">per year</p>
            </div>
          </div>

          <div className="uk-modal-footer uk-text-right">
            <a
              href="#modal-simulator-success"
              className="uk-button uk-button-link uk-margin-right uk-modal-close"
              data-uk-toggle
            >
              Close
            </a>

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
