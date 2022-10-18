import React, { Fragment } from "react";
import BookADemo1 from "./BookADemo1";
import BookADemo2 from "./BookADemo2";
import BookADemoSuccess from "./BookADemoSuccess";

const BookADemo: React.FC = () => {
  return (
    <Fragment>
      <BookADemo1 />
      <BookADemo2 />
      <BookADemoSuccess />
    </Fragment>
  );
};

export default BookADemo;
