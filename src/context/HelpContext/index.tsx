import axios from "axios";
import React, { useReducer, useEffect } from "react";
import useGlobalState from "../GlobalContext/hooks/useGlobalState";
import { nHelp } from "./interfaces";

const HelpDispatchContext = React.createContext<
  nHelp.tDispatchContext | undefined
>(undefined);
HelpDispatchContext.displayName = "HelpDispatchContext";
const HelpStateContext = React.createContext<nHelp.tStateContext | undefined>(
  undefined
);
HelpStateContext.displayName = "HelpStateContext";

const LS_DATA = "__help__";

const initialState: nHelp.iState = {
  data: {
    questions: {},
  },
  status: "idle",
  error: null,
};

const reducer = (state: nHelp.iState, action: nHelp.tAction): nHelp.iState => {
  switch (action.type) {
    case "set data": {
      const { data } = action;
      localStorage.setItem(LS_DATA, JSON.stringify(data));
      return { ...state, data, status: "resolved", error: null };
    }
    case "set questions": {
      const { questions } = action;
      const data = { ...state.data, questions };
      localStorage.setItem(LS_DATA, JSON.stringify(data));
      return { ...state, data, status: "resolved", error: null };
    }
    case "resolved": {
      return { ...state, status: "resolved", error: null };
    }
    case "rejected": {
      return { ...state, status: "rejected", error: action.error };
    }
    case "pending": {
      return { ...state, status: "pending", error: null };
    }
    default:
      return { ...state };
  }
};

const HelpContextProvider: React.FC<nHelp.iContextProps> = ({ children }) => {
  const [state, dispatch]: [nHelp.iState, React.Dispatch<nHelp.tAction>] =
    useReducer(reducer, initialState);

  const { isResolved } = useGlobalState();

  useEffect(() => {
    function main() {
      dispatch({ type: "pending" });
      console.log("[HELP CONTEXT]");
      axios
        .get("/website/help/questions-votes")
        .then((res) => {
          console.log("res", res);
          const {
            data: { data: array },
          } = res;

          const data: nHelp.iStateData = { questions: {} };
          array.forEach((d: any) => {
            data.questions[d._id] = d;
          });

          dispatch({ type: "set data", data });
        })
        .catch((err) => {
          console.log("err.response", err.response);
          dispatch({ type: "rejected", error: "" });
        });
    }
    if (isResolved) main();
    else dispatch({ type: "resolved" });
  }, [isResolved]);

  return (
    <HelpStateContext.Provider value={state}>
      <HelpDispatchContext.Provider value={dispatch}>
        {children}
      </HelpDispatchContext.Provider>
    </HelpStateContext.Provider>
  );
};

export { HelpContextProvider, HelpDispatchContext, HelpStateContext };
export default HelpContextProvider;
