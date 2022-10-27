import React, { Fragment } from "react";
import BookADemo1 from "./BookADemo1";
import BookADemo2 from "./BookADemo2";
import BookADemoCalendar from "./BookADemoCalendar";
import BookADemoSuccess from "./BookADemoSuccess";
import { BookDemoDataContextProvider } from "./context/BookDemoData";
import useBookDemoDataState from "./context/BookDemoData/hooks/useBookDemoDataState";

const BookADemoWrapped: React.FC = () => {
  const { book1Confirmed } = useBookDemoDataState();

  return (
    <Fragment>
      <BookADemo1 />
      <BookADemo2 />
      {<BookADemoCalendar />}
      <BookADemoSuccess />
    </Fragment>
  );
};

const BookADemo: React.FC = () => {
  return (
    <BookDemoDataContextProvider>
      <BookADemoWrapped />
    </BookDemoDataContextProvider>
  );
};

export default BookADemo;
