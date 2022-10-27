import React, { useReducer, useEffect } from "react";
import BookADemo1 from "../../BookADemo1";
import { nBookDemoData } from "./interfaces";

const BookDemoDataDispatchContext = React.createContext<
  nBookDemoData.tDispatchContext | undefined
>(undefined);
BookDemoDataDispatchContext.displayName = "BookDemoDataDispatchContext";
const BookDemoDataStateContext = React.createContext<
  nBookDemoData.tStateContext | undefined
>(undefined);
BookDemoDataStateContext.displayName = "BookDemoDataStateContext";

const LS_DATA = "__book-demo__";

const initialState: nBookDemoData.iState = {
  data: {
    bookDemoData: {
      name: "",
      email: "",
      hotelName: "",
      jobTitle: "",
      website: "",
      phoneNumber: { country: "", number: "" },
      country: "",
      businessType: "",
      accommodationType: "",
      managementType: "",
    },
    book1Confirmed: false,
    book2Confirmed: false,
  },
  status: "idle",
  error: null,
};

const reducer = (
  state: nBookDemoData.iState,
  action: nBookDemoData.tAction
): nBookDemoData.iState => {
  switch (action.type) {
    case "set data": {
      const data = { ...state.data, ...action.data };
      localStorage.setItem(LS_DATA, JSON.stringify(data));
      return { ...state, data, status: "resolved", error: null };
    }
    case "set book 1": {
      const data = {
        ...state.data,
        book1Confirmed: true,
        bookDemoData: { ...state.data.bookDemoData, ...action.data },
      };
      return { ...state, data, status: "resolved", error: null };
    }
    case "set book 2": {
      const data = {
        ...state.data,
        book2Confirmed: true,
        bookDemoData: { ...state.data.bookDemoData, ...action.data },
      };
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

const BookDemoDataContextProvider: React.FC<nBookDemoData.iContextProps> = ({
  children,
}) => {
  const [state, dispatch]: [
    nBookDemoData.iState,
    React.Dispatch<nBookDemoData.tAction>
  ] = useReducer(reducer, initialState);
  useEffect(() => {
    const stored = localStorage.getItem(LS_DATA);

    if (!stored) return dispatch({ type: "resolved" });

    const data = JSON.parse(stored);

    dispatch({ type: "set data", data });
  }, []);

  return (
    <BookDemoDataStateContext.Provider value={state}>
      <BookDemoDataDispatchContext.Provider value={dispatch}>
        {children}
      </BookDemoDataDispatchContext.Provider>
    </BookDemoDataStateContext.Provider>
  );
};

export {
  BookDemoDataContextProvider,
  BookDemoDataDispatchContext,
  BookDemoDataStateContext,
};
