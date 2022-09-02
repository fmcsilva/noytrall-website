import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { notification } from "../../utils/notification";

interface iStateData {
  name: string;
  description: string;
}

interface iState {
  status: "idle" | "pending" | "resolved" | "rejected";
  error: string | null;
  data: iStateData;
}

type tAction =
  | { type: "change"; key: string; value: string }
  | { type: "resolved" }
  | { type: "pending" }
  | { type: "rejected"; error: string }
  | { type: "set data"; data: iStateData };

const initialState: iState = {
  status: "idle",
  error: null,
  data: { name: "", description: "" },
};

const reducer = (state: iState, action: tAction): iState => {
  switch (action.type) {
    case "change": {
      const { key, value } = action;
      return { ...state, data: { ...state.data, [key]: value } };
    }
    case "resolved": {
      return { ...state, status: "resolved", error: null };
    }
    case "rejected": {
      return { ...state, status: "rejected", error: action.error };
    }
    case "set data": {
      return { ...state, status: "resolved", data: action.data, error: null };
    }
    case "pending": {
      return { ...state, status: "pending", error: null };
    }
    default:
      return { ...state };
  }
};

type tDropLineModalProps = {
  question: string | null;
};

const DropLineModal: React.FC<tDropLineModalProps> = ({ question }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    data: { name, description },
  } = state;

  const handleChange =
    (key: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const {
        target: { value },
      } = e;
      dispatch({ type: "change", key, value });
    };

  const handleSendQuestion = () => {
    console.log("handleSendQuestion");
    axios
      .post("/website/support-question/not-helpful", {
        question,
        name,
        description,
      })
      .then((res) => {
        console.log("res", res);
        notification("Noytrall appreciates your feedback.");
      })
      .catch((err) => {
        console.log("err", err);
        notification("We couldn't process your feedback. Please try again.");
      });
  };

  useEffect(() => {
    const button = document.getElementById("butt");

    console.log("button", button);

    const listener = () => {
      console.log("CLICKED");
    };
    button?.addEventListener("click", listener);

    return button?.removeEventListener("click", listener);
  }, []);

  return (
    <div id="dropaline" data-uk-modal="esc-close: false; bg-close: false">
      <div className="uk-modal-dialog">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
        ></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Get support</h2>
        </div>
        <div className="uk-modal-body">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label">Name</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                description
              </div>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Input"
                  onChange={handleChange("name")}
                  value={name}
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">What can we do for you?</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                Please describe your question as thoroughly as possible.
              </div>
              <div className="uk-form-controls">
                <textarea
                  value={description}
                  onChange={handleChange("description")}
                  className="uk-textarea uk-resize-vertical"
                  rows={10}
                  placeholder="Describe your problem."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="uk-modal-footer uk-text-right">
          <a
            onClick={() => {
              console.log("a");
            }}
            href="#modal-simulator-1-4"
            className="uk-button uk-button-link uk-modal-close uk-margin-right"
          >
            Cancel
          </a>

          <a
            className="uk-button uk-button-default"
            id="butt"
            type="button"
            onClick={(e) => {
              console.log("OnClick");
              e.preventDefault();
              handleSendQuestion();
            }}
          >
            Send your question
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropLineModal;
