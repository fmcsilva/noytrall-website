import React from "react";
import { BookDemoDataDispatchContext } from "../";
import { nBookDemoData } from "../interfaces";

const useBookDemoDataDispatch = () => {
  const dispatch = React.useContext(BookDemoDataDispatchContext);

  if (!dispatch)
    throw Error(
      "useBookDemoDataDispatch must be used within BookDemoDataStateContext"
    );

  const updateData = (data: nBookDemoData.iStateData) => {
    dispatch({ type: "set data", data });
  };

  const updateBook1 = (bookDemoData: Partial<nBookDemoData.iBookDemoData>) => {
    dispatch({ type: "set book 1", data: bookDemoData });
  };
  const updateBook2 = (bookDemoData: Partial<nBookDemoData.iBookDemoData>) => {
    dispatch({ type: "set book 2", data: bookDemoData });
  };

  return { updateData, updateBook1, updateBook2 };
};

export default useBookDemoDataDispatch;
