import axios from "axios";
import React, { useReducer, useEffect } from "react";
import { endpoint } from "../../utils/api";
import { nGlobal } from "./interfaces";

const GlobalDispatchContext = React.createContext<
  nGlobal.tDispatchContext | undefined
>(undefined);
GlobalDispatchContext.displayName = "GlobalDispatchContext";
const GlobalStateContext = React.createContext<
  nGlobal.tStateContext | undefined
>(undefined);
GlobalStateContext.displayName = "GlobalStateContext";

const initialState: nGlobal.iState = {
  data: {},
  status: "idle",
  error: null,
};

const reducer = (
  state: nGlobal.iState,
  action: nGlobal.tAction
): nGlobal.iState => {
  switch (action.type) {
    case "set data":
      return { ...state, data: action.data, status: "resolved", error: null };
    case "resolved":
      return { ...state, status: "resolved", error: null };
    case "rejected":
      return { ...state, status: "rejected", error: action.error };
    case "pending":
      return { ...state, status: "pending", error: null };
    default:
      return { ...state };
  }
};

const GlobalContextProvider: React.FC<nGlobal.iContextProps> = ({
  children,
}) => {
  const [state, dispatch]: [nGlobal.iState, React.Dispatch<nGlobal.tAction>] =
    useReducer(reducer, initialState);

  useEffect(() => {
    axios.defaults.baseURL = endpoint();
  }, []);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export { GlobalContextProvider, GlobalDispatchContext, GlobalStateContext };
