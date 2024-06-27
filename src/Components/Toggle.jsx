import React from "react";

export default function Toggle() {
  return (
    <div className="flex items-center gap-5">
      <b className="text-[10px]">THEME</b>
      <div className="toggle_container">
        <div className="toggle_lable flex gap-[10px] mb-1">
          <label htmlFor="1" className="">
            1
          </label>
          <label htmlFor="2" className="">
            2
          </label>
          <label htmlFor="3" className="">
            3
          </label>
        </div>
        <div className="toggle_options flex gap-1">
          <input type="radio" name="theme" id="1" checked />
          <input type="radio" name="theme" id="2" />
          <input type="radio" name="theme" id="3" />
        </div>
      </div>
    </div>
  );
}
