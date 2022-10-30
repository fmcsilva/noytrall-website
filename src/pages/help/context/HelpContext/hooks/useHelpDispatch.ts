import React from "react";
import { HelpDispatchContext } from "../";
import { iQuestion } from "../../../../../models/question";
import { nHelp } from "../interfaces";
import useHelpState from "./useHelpState";

const useHelpDispatch = () => {
  const dispatch = React.useContext(HelpDispatchContext);

  if (!dispatch)
    throw Error("useHelpDispatch must be used within HelpStateContext");
  const { state } = useHelpState();

  const updateQuestionsInfo = (questions: iQuestion[]) => {
    dispatch({ type: "pending" });
    const data: nHelp.tQuestions = {};
    questions.forEach((d: iQuestion) => {
      data[d._id] = d;
    });
    dispatch({ type: "set questions", questions: data });
  };

  return { updateQuestionsInfo };
};

export default useHelpDispatch;
