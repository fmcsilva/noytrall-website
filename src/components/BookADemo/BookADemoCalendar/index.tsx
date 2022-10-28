import React from "react";

const BookADemoCalendar: React.FC = () => {
  const calendly =
    "https://calendly.com/marco-noytrall/30min-demo?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=40bfb4";
  // const calendly = "https://calendly.com/francisco__silva/30min";

  return (
    <div
      id="modal-book-demo-calendar"
      uk-modal="esc-close: false; bg-close: false; stack: false;"
      style={{ zIndex: 10002 }}
    >
      <div className="uk-modal-dialog">
        <form id="modal-book-demo-calendar-form" className="uk-form-stacked">
          <button
            className="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>

          <div className="uk-modal-header">
            <h2 className="uk-modal-title">Pick a Date</h2>
          </div>

          <div className="uk-modal-body">
            <div className="uk-margin">
              <div
                id="book-a-demo-calendly"
                className="calendly-inline-widget"
                data-url={calendly}
                style={{ minWidth: "320px", height: "630px" }}
              ></div>
              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookADemoCalendar;
