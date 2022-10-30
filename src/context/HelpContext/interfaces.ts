import { iQuestion, tQuestionId } from "../../models/question";

export namespace nHelp {
  export type tQuestions = Record<tQuestionId, iQuestion>;

  export interface iStateData {
    questions: tQuestions;
  }

  export interface iState {
    data: iStateData;
    status: "pending" | "resolved" | "idle" | "rejected";
    error: null | string;
  }

  export interface iContextProps {
    children: React.ReactNode;
  }

  export type tAction =
    | { type: "set data"; data: iStateData }
    | { type: "set questions"; questions: tQuestions }
    | { type: "resolved" }
    | { type: "rejected"; error: string }
    | { type: "pending" };

  export type tStateContext = iState;
  export type tDispatchContext = React.Dispatch<tAction>;
}
