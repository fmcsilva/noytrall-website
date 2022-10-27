import React from "react";
import { BookDemoDataStateContext } from "..";

const useBookDemoDataState = () => {
  const state = React.useContext(BookDemoDataStateContext);

  if (!state)
    throw Error(
      "useBookDemoDataState must be used within BookDemoDataStateContext"
    );

  const {
    data: { name, email },
  } = state;

  console.log("state.data", state.data);

  return { name, email };
};

export default useBookDemoDataState;
