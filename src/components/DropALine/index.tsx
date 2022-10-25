import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useJustValidate from "../../hooks/useJustValidate";
import { notification } from "../../utils/notification";

interface iProps {
  question: string | null;
}

const DropALine: React.FC<iProps> = ({ question }) => {
  const [loading, setLoading] = useState(false);
  const { formIsValid, validateField } = useJustValidate("dropaline-form", [
    {
      field: "#dropaline-form-name",
      rules: [{ rule: "required" }, { rule: "minLength", value: 3 }],
      config: { errorsContainer: ".error-container-name" },
    },
    {
      field: "#dropaline-form-description",
      rules: [{ rule: "required" }, { rule: "minLength", value: 20 }],
      config: { errorsContainer: ".error-container-dropaline_description" },
    },
  ]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const sendQuestion = () => {
    console.log("handleSendQuestion");
  };

  useEffect(() => {
    const listener = async (e: any) => {
      setLoading(true);
      if (!(await formIsValid())) {
        setLoading(false);
        return;
      } else {
        const nameInput = document.getElementById(
          "dropaline-form-name"
        ) as HTMLInputElement;
        const name = nameInput.value;

        const descriptionInput = document.getElementById(
          "dropaline-form-description"
        ) as HTMLInputElement;
        const description = descriptionInput.value;
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
            notification(
              "We couldn't process your feedback. Please try again."
            );
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };

    formRef.current?.addEventListener("submit", listener);
    buttonRef.current?.addEventListener("click", listener);
    return () => {
      formRef.current?.removeEventListener("submit", listener);
      buttonRef.current?.removeEventListener("click", listener);
    };
  }, [question]);

  useEffect(() => {
    const listener = (id: string) => async (e: any) => {
      console.log("id", id);
      validateField(`#${id}`);
    };

    nameRef.current?.addEventListener("keyup", listener("dropaline-form-name"));
    nameRef.current?.addEventListener("", listener("dropaline-form-name"));
    descriptionRef.current?.addEventListener(
      "keyup",
      listener("dropaline-form-description")
    );
    return () => {
      nameRef.current?.removeEventListener(
        "keyup",
        listener("dropaline-form-name")
      );
      descriptionRef.current?.removeEventListener(
        "keyup",
        listener("dropaline-form-description")
      );
    };
  }, [validateField]);

  return (
    <div id="dropaline" uk-modal="esc-close: false; bg-close: false">
      <div className="uk-modal-dialog">
        <button
          className="uk-modal-close-default"
          type="button"
          data-uk-close
          disabled={loading}
        ></button>
        <div className="uk-modal-header">
          <h2 className="uk-modal-title">Get support</h2>
        </div>
        <div className="uk-modal-body">
          <form
            ref={formRef}
            action="#"
            className="uk-form-stacked"
            id="dropaline-form"
          >
            <div className="uk-margin">
              <label className="uk-form-label">Name</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                description
              </div>
              <div className="uk-form-controls">
                <input
                  ref={nameRef}
                  className="uk-input"
                  type="text"
                  placeholder="Input"
                  id="dropaline-form-name"
                />
              </div>
              <div className="error-container-name"></div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label">What can we do for you?</label>
              <div className="uk-text-small uk-text-muted uk-margin-small-bottom">
                Please describe your question as thoroughly as possible.
              </div>
              <div className="uk-form-controls">
                <textarea
                  ref={descriptionRef}
                  className="uk-textarea uk-resize-vertical"
                  rows={10}
                  placeholder="Describe your problem."
                  id="dropaline-form-description"
                ></textarea>
              </div>
              <div className="error-container-dropaline_description"></div>
            </div>
          </form>
        </div>
        <div className="uk-modal-footer uk-text-right">
          <a
            href="#modal-simulator-1-4"
            className="uk-button uk-button-link uk-modal-close uk-margin-right"
          >
            Cancel
          </a>
          <button
            disabled={loading}
            ref={buttonRef}
            type="submit"
            className="uk-button uk-button-primary uk-border-pill"
          >
            Send your question
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropALine;
