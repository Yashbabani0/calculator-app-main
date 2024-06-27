import React from "react";

export default function Keypad() {
  return (
    <div className="flex justify-center items-center">
      <div className="theme1_keypad w-[95%] h-[26em] rounded-lg p-4">
        <div className="line  h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="7"
          />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="8" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="9" />
          <input className="theme1_deletebtn w-1/4 h-[70%] rounded-lg" type="button" value="DEL" />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="4" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="5" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="6" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="+" />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="1" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="2" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="3" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="-" />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="." />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="0" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="/" />
          <input className="theme1_generalbtn w-1/4 h-[70%] rounded-lg" type="button" value="x" />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_resetbtn w-1/2 h-[70%] rounded-lg"
            type="button"
            value="RESET"
          />
          <input className="theme1_equalbtn w-1/2 h-[70%] rounded-lg" type="button" value="=" />
        </div>
      </div>
    </div>
  );
}
