import React, { Fragment } from "react";
import BookADemo1 from "./BookADemo1";
import BookADemo2 from "./BookADemo2";
import BookADemoCalendar from "./BookADemoCalendar";
import BookADemoSuccess from "./BookADemoSuccess";
import { BookDemoDataContextProvider } from "./context/BookDemoData";

const BookADemo: React.FC = () => {
  return (
    <BookDemoDataContextProvider>
      <BookADemo1 />
      <BookADemo2 />
      <BookADemoCalendar />
      <BookADemoSuccess />
    </BookDemoDataContextProvider>
  );
};

export default BookADemo;
