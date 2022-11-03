import { StaticQueryDocument } from "gatsby";
import { useCallback, useEffect, useReducer, useState } from "react";
import { tQuestionId } from "../models/question";

const LS_DATA = "__help-qa__";

type tHelpful = "NICE";
type tNotHelpful = "BOOO";
export const QUESTION_IS_HELPFUL: tHelpful = "NICE";
export const QUESTION_NOT_HELPFUL: tNotHelpful = "BOOO";

type tEvalquestion = tHelpful | tNotHelpful;

type tHelpQA = {
  questionId: tQuestionId;
  evaluation: tEvalquestion;
};
type tLSData = Record<tQuestionId, tHelpQA>;

interface iStateData {
  questionsEvaluation: tLSData;
}

interface iState {
  error: string | null;
  status: "idle" | "pending" | "resolved" | "rejected";
  data: iStateData;
}

type tAction =
  | { type: "set data"; data: iStateData }
  | { type: "pending" }
  | { type: "resolved" }
  | { type: "rejected"; error: string };

const initialState: iState = {
  error: null,
  status: "idle",
  data: { questionsEvaluation: {} },
};

const reducer = (state: iState, action: tAction): iState => {
  switch (action.type) {
    case "set data": {
      const { data } = action;
      return { ...state, status: "resolved", data, error: null };
    }
    case "pending":
      return { ...state, status: "pending", error: null };
    case "resolved":
      return { ...state, status: "resolved", error: null };
    case "rejected": {
      const { error } = action;
      return { ...state, status: "rejected", error };
    }
    default:
      return { ...state };
  }
};

const useHelpQuestions = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    data: { questionsEvaluation },
  } = state;

  const setQuestionsEvaluation = (data: tLSData) => {
    dispatch({ type: "set data", data: { questionsEvaluation: data } });
  };

  useEffect(() => {
    if (window) {
      if (Object.keys(questionsEvaluation).length) return;
      const unparsed = localStorage.getItem(LS_DATA);
      if (unparsed) setQuestionsEvaluation(JSON.parse(unparsed));
    }
  }, []);

  const setItem = (data: tLSData) => {
    setQuestionsEvaluation(data);
    if (window) {
      localStorage.setItem(LS_DATA, JSON.stringify(data));
    }
  };

  const getItem = (): tLSData => {
    if (window) {
      const unparsed = localStorage.getItem(LS_DATA);

      if (unparsed) {
        return JSON.parse(unparsed);
      }
    }
    return {};
  };

  const saveEvalQuesiton = (
    questionId: tQuestionId,
    evaluation: tEvalquestion
  ) => {
    let lsData: tLSData = questionsEvaluation;

    lsData[questionId] = { questionId, evaluation };
    setItem(lsData);
  };
  const saveHelpfulQuestion = (questionId: tQuestionId) =>
    saveEvalQuesiton(questionId, QUESTION_IS_HELPFUL);
  const saveNotHelpfulQuestion = (questionId: tQuestionId) => {
    saveEvalQuesiton(questionId, QUESTION_NOT_HELPFUL);
  };

  const questionIsHelpful = (questionId: tQuestionId) => {
    return questionsEvaluation[questionId]
      ? questionsEvaluation[questionId].evaluation === QUESTION_IS_HELPFUL
      : null;
  };

  const setLoading = (loading: boolean) =>
    dispatch({ type: loading ? "pending" : "resolved" });

  return {
    saveEvalQuesiton,
    saveHelpfulQuestion,
    saveNotHelpfulQuestion,
    questionsEvaluation,
    questionIsHelpful,
    setLoading,
    dispatch,
    isLoading: state.status === "pending",
  };
};

export default useHelpQuestions;
