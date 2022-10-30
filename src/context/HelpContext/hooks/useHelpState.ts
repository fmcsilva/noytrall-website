import React from "react";
import { HelpStateContext } from "..";

const useHelpState = () => {
  const state = React.useContext(HelpStateContext);

  if (!state) throw Error("useHelpState must be used within HelpStateContext");

  const {
    data: { questions },
    status,
    error,
  } = state;

  const getQuestionInfo = (questionId: string) => {
    return questions[questionId];
  };

  return { isResolved: status === "resolved", getQuestionInfo, state };
};

export default useHelpState;
