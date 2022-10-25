import React, { useEffect } from "react";

const BookADemoCalendar: React.FC = () => {
  return (
    <div
      id="modal-book-demo-calendar"
      uk-modal="esc-close: true; bg-close: true; stack: true;"
      style={{ zIndex: 10002 }}
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        {/* <!-- Calendly inline widget begin --> */}
        <CalendlyCompo />
        {/* <!-- Calendly inline widget end --> */}
      </div>
    </div>
  );
};

const CalendlyCompo: React.FC = () => {
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/marco-noytrall/30min"
      // data-url="https://calendly.com/francisco__silva/30min"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
  );
};

export default BookADemoCalendar;
