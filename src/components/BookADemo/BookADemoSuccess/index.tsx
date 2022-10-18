import React from "react";

const BookADemoSuccess: React.FC = () => {
  return (
    <div
      id="modal-book-demo-success"
      uk-modal="esc-close: false; bg-close: false; stack: false;"
    >
      <div className="uk-modal-dialog uk-margin-auto-vertical">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
        ></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">You successfully booked a demo</h2>
        </div>
        <div className="uk-modal-body">
          <div className="uk-margin">
            <h2>
              <i className="las la-lg la-check uk-text-primary uk-margin-small-right"></i>
              Thank you.
            </h2>
            <p>You have successfully scheduled a demo with noytrall.</p>
            <p>The demo is scheduled for the DD of MM/YYYY.</p>
            <p>
              You'll be receiveing an email with all the information regarding
              this process.
            </p>
            <p></p>
          </div>
        </div>
        <div className="uk-modal-footer uk-text-right">
          <a className="uk-button uk-button-link uk-modal-close uk-margin-right">
            Close
          </a>
          <a
            href="#"
            className="uk-button uk-button-primary uk-border-pill"
            data-uk-toggle
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookADemoSuccess;
