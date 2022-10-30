import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useJustValidate from "../../../hooks/useJustValidate";
import { notification } from "../../../utils/notification";
import useHelpState from "../context/HelpContext/hooks/useHelpState";

interface iProps {
  questionId: string | null;
}

const DropALine: React.FC<iProps> = ({ questionId }) => {
  const { getQuestionInfo } = useHelpState();
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { formIsValid } = useJustValidate("dropaline-form", [
    {
      ref: nameRef,
      field: "#dropaline-form-name",
      rules: [{ rule: "required" }, { rule: "minLength", value: 3 }],
      config: { errorsContainer: ".error-container-name" },
    },
    {
      ref: emailRef,
      field: "#dropaline-form-email",
      rules: [{ rule: "required" }, { rule: "email" }],
      config: { errorsContainer: ".error-container-name" },
    },
    {
      ref: descriptionRef,
      field: "#dropaline-form-description",
      rules: [{ rule: "required" }, { rule: "minLength", value: 20 }],
      config: { errorsContainer: ".error-container-dropaline_description" },
    },
  ]);

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

        const emailInput = document.getElementById(
          "dropaline-form-email"
        ) as HTMLInputElement;
        const email = emailInput.value;

        const descriptionInput = document.getElementById(
          "dropaline-form-description"
        ) as HTMLInputElement;
        const description = descriptionInput.value;
        const questionInfo = getQuestionInfo(questionId);
        if (questionInfo) {
          const { question } = questionInfo;
          axios
            .post(`/website/support-question/${questionId}/not-helpful`, {
              question,
              name,
              email,
              description,
            })
            .then((res) => {
              notification("Noytrall appreciates your feedback.");
            })
            .catch((err) => {
              notification(
                "We couldn't process your feedback. Please try again."
              );
            })
            .finally(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      }
    };

    if (questionId) {
      formRef.current?.addEventListener("submit", listener);
      buttonRef.current?.addEventListener("click", listener);
      return () => {
        formRef.current?.removeEventListener("submit", listener);
        buttonRef.current?.removeEventListener("click", listener);
      };
    }
  }, [questionId]);

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
              <label className="uk-form-label">Email</label>
              <div className="uk-form-controls uk-inline">
                <span className="uk-form-icon">
                  <i className="las la-lg la-envelope-open"></i>
                </span>
                <input
                  ref={emailRef}
                  className="uk-input uk-form-width-large"
                  id="dropaline-form-email"
                  type="text"
                  placeholder="john@domain.com"
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
