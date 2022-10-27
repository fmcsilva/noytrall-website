import React from "react";
import { BookDemoDataDispatchContext } from "../";
import { nBookDemoData } from "../interfaces";

const useBookDemoDataDispatch = () => {
  const dispatch = React.useContext(BookDemoDataDispatchContext);

  if (!dispatch)
    throw Error(
      "useBookDemoDataDispatch must be used within BookDemoDataStateContext"
    );

  const updateData = (data: Partial<nBookDemoData.iStateData>) => {
    dispatch({ type: "set data", data });
  };

  return { updateData };
};

export default useBookDemoDataDispatch;
