import React from "react";
import CalcuHeading from "./CalcuHeading";
import Screen from "./Screen";
import Keypad from "./Keypad";

export default function Calculator() {
  return (
    <div className="calculator_body min-w-96 min-h-[35em] rounded">
      <CalcuHeading />
      <Screen />
      <Keypad />
    </div>
  );
}
