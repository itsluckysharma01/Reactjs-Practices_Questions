import { getAllByPlaceholderText } from "@testing-library/dom";
import React from "react";

let greet = "Hello World";
const HelloConsole = () => {
  console.log("hello");
  console.log(greet);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default HelloConsole;
