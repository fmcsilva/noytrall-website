import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useJustValidate from "../../../hooks/useJustValidate";
import { notification } from "../../../utils/notification";
import useHelpState from "../../../context/HelpContext/hooks/useHelpState";
import UIkit from "uikit";
import useHelpQuestions from "../../../hooks/useHelpQuestions";
import { tQuestionId } from "../../../models/question";

const MODAL_ID = "dropaline";
const MODAL_CLOSE_ID = "dropaline-close";
const MODAL_CLOSE2_ID = "dropaline-close2";

interface iProps {
  questionId: string | null;
  onExit(question: tQuestionId): void;
  setLoading(loading: boolean): void;
  loading: boolean;
}

const DropALine: React.FC<iProps> = ({
  questionId,
  onExit,
  loading,
  setLoading,
}) => {
  // const [loading, setLoading] = useState(false);
  const { getQuestionInfo } = useHelpState();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const { formIsValid, refresh } = useJustValidate("dropaline-form", [
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
      config: { errorsContainer: ".error-container-email" },
    },
    {
      ref: descriptionRef,
      field: "#dropaline-form-description",
      rules: [{ rule: "required" }, { rule: "minLength", value: 20 }],
      config: { errorsContainer: ".error-container-dropaline_description" },
    },
  ]);
  const { saveNotHelpfulQuestion } = useHelpQuestions();

  useEffect(() => {
    if (questionId) {
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
                onExit(questionId);
              })
              .catch((err) => {
                notification(
                  "We couldn't process your feedback. Please try again."
                );
                setLoading(false);
              });
          } else {
            setLoading(false);
          }
        }
      };
      formRef.current?.addEventListener("submit", listener);
      buttonRef.current?.addEventListener("click", listener);
      return () => {
        formRef.current?.removeEventListener("submit", listener);
        buttonRef.current?.removeEventListener("click", listener);
      };
    }
  }, [questionId, saveNotHelpfulQuestion]);

  useEffect(() => {
    const listener = () => {
      if (buttonRef.current) buttonRef.current.value = "";
      if (formRef.current) formRef.current.value = "";
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      refresh();
      const modal = document.getElementById(MODAL_ID);
      if (modal) UIkit.modal(modal).hide();
    };

    const closeButton = document.getElementById(MODAL_CLOSE_ID);
    closeButton?.addEventListener("click", listener);
    const close2Button = document.getElementById(MODAL_CLOSE2_ID);
    close2Button?.addEventListener("click", listener);

    return () => {
      closeButton?.removeEventListener("click", listener);
      close2Button?.removeEventListener("click", listener);
    };
  }, [refresh]);

  return (
    <div id={MODAL_ID} uk-modal="esc-close: false; bg-close: false">
      <div className="uk-modal-dialog">
        <button
          id={MODAL_CLOSE_ID}
          className="uk-modal-close-default"
          type="button"
          disabled={loading}
          data-uk-close
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
              <div className="error-container-email"></div>
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
          <button
            id={MODAL_CLOSE2_ID}
            className="uk-button uk-button-link uk-modal-close uk-margin-right"
          >
            Cancel
          </button>
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
