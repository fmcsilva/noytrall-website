import React, { useEffect } from "react";
import useBookDemoDataState from "../context/BookDemoData/hooks/useBookDemoDataState";

const BookADemoCalendar: React.FC = () => {
  const { name, email } = useBookDemoDataState();

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
        console.log("e", e);

        /* Example to get the name of the event */
        console.log("Event name:", e.data.event);

        /* Example to get the payload of the event */
        console.log("Event details:", e.data.payload);

        if (event === "calendly.date_and_time_selected") {
          const calendlyDiv = document.getElementById("book-a-demo-calendly");
          console.log("calendlyDiv", calendlyDiv);
          const iframes = calendlyDiv?.getElementsByTagName("iframe");
          console.log("iframes", iframes);
          if (!iframes || iframes.length === 0) return;
          const iframe = iframes[0];
          console.log("iframe", iframe);
          // @ts-ignore
          console.log(
            "ownerDocument",
            iframe.ownerDocument.children[0].children[1]
          );

          const html = iframe.ownerDocument.children[0];
          const body = html.children[1];
          console.log("body", body);
          const pageRegion = document.getElementById("page-region");
          if (!pageRegion) {
            console.log("PAGE REGION");
            return;
          }
          console.log("pageRegion", pageRegion);
          const pageRegionChild = pageRegion.children[0];
          const pageRegionGrandChild = pageRegionChild.children[0];
          const pageRegionGreatGrandChild = pageRegionGrandChild.children[0];

          const dateTimeDiv = pageRegionGreatGrandChild.children[1];
          const detailsDiv = pageRegionGreatGrandChild.children[2];
          console.log(
            "pageRegionGreatGrandChild.children",
            pageRegionGreatGrandChild.children
          );
          // @ts-ignore
          // @ts-ignore
          detailsDiv.style.visibility = "hidden";
          // @ts-ignore
          detailsDiv.style.display = "none";
          // @ts-ignore
          console.log("detailsDiv.style", detailsDiv.style);
          // @ts-ignore
          detailsDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  console.log("name, email", name, email);

  // const calendlyAccount = "marco-noytrall"
  const calendlyAccount = "francisco__silva";

  const dataUrl = `https://calendly.com/${calendlyAccount}/30min?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=40bfb4${
    name ? `&name=${name.replace(" ", "%20")}` : ""
  }${email ? `&email=${email}` : ""}`;
  console.log("dataUrl", dataUrl);

  return (
    <div
      id="modal-book-demo-calendar"
      uk-modal="esc-close: false; bg-close: false; stack: true;"
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
                data-url={dataUrl}
                style={{ minWidth: "320px", height: "630px" }}
              ></div>

              <script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></script>
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
              type="button"
              uk-toggle="target: #modal-book-demo-success"
              className="uk-button uk-button-primary uk-border-pill"
            >
              Book your demo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookADemoCalendar;
