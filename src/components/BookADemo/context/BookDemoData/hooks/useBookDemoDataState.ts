import React from "react";
import { BookDemoDataStateContext } from "..";

const useBookDemoDataState = () => {
  const state = React.useContext(BookDemoDataStateContext);

  if (!state)
    throw Error(
      "useBookDemoDataState must be used within BookDemoDataStateContext"
    );

  const {
    data,
    data: { bookDemoData, book1Confirmed, book2Confirmed },
  } = state;

  return { bookDemoData, book1Confirmed, book2Confirmed };
};

export default useBookDemoDataState;
