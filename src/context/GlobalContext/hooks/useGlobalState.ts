import React from "react";
import { GlobalStateContext } from "../";

const useGlobalState = () => {
  const state = React.useContext(GlobalStateContext);

  if (!state)
    throw Error("useGlobalState must be used within GlobalStateContext");

  return { isResolved: state.status === "resolved" };
};

export default useGlobalState;
