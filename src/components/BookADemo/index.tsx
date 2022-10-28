import React from "react";
import BookADemoCalendar from "./BookADemoCalendar";

const BookADemoWrapped: React.FC = () => {
  return <BookADemoCalendar />;
};

const BookADemo: React.FC = () => {
  return <BookADemoWrapped />;
};

export default BookADemo;
