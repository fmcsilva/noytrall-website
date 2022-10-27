import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useBookDemoDataState from "../context/BookDemoData/hooks/useBookDemoDataState";

const BookADemoCalendar: React.FC = () => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [loading, setLoading] = useState(false);
  const { bookDemoData: data } = useBookDemoDataState();

  console.log("CALENDAR data", data);

  useEffect(() => {
    function isCalendlyEvent(e: any) {
      return (
        e.origin === "https://calendly.com" &&
        e.data.event &&
        e.data.event.indexOf("calendly.") === 0
      );
    }

    window.addEventListener("message", function (e) {
      if (isCalendlyEvent(e)) {
        const {
          data: { event, payload },
        } = e;

        /* Example to get the name of the event */
        console.log("Event name:", event);
        console.log("data", data);

        if (event === "date_and_time_selected") {
          // @ts-ignore
          if (document.getElementById("full_name_input"))
            // @ts-ignore
            document.getElementById("full_name_input").value = data.name;
          // @ts-ignore
          if (document.getElementById("email_input"))
            // @ts-ignore
            document.getElementById("email_input").value = data.email;
        } else if (event === "calendly.event_scheduled") {
          setLoading(true);
          axios
            .post("/website/schedule-meeting", {
              ...data,
              calendly: payload,
            })
            .then((res) => {
              setLoading(false);
              console.log("res", res);
            })
            .catch((err) => {
              setLoading(false);
            });
        }
      }
    });
  }, [data]);

  useEffect(() => {
    if (!closeRef) return;

    const listener = () => {
      window.location.reload();
    };

    closeRef.current?.addEventListener("click", listener);

    return () => {
      closeRef.current?.removeEventListener("click", listener);
    };
  }, []);

  const calendlyAccount = "marco-noytrall";
  // const calendlyAccount = "francisco__silva";

  const dataUrl = `https://calendly.com/${calendlyAccount}/30min?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=40bfb4${
    data.name ? `&name=${data.name.replace(" ", "%20")}` : ""
  }${data.email ? `&email=${data.email}` : ""}`;
  console.log("dataUrl", dataUrl);

  return (
    <div
      id="modal-book-demo-calendar"
      uk-modal="esc-close: false; bg-close: false; stack: false;"
      style={{ zIndex: 10002 }}
    >
      <div className="uk-modal-dialog">
        <form id="modal-book-demo-calendar-form" className="uk-form-stacked">
          <button
            ref={closeRef}
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
                data-url={`https://calendly.com/${calendlyAccount}/30min?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=40bfb4`}
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
