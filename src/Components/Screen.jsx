import React from "react";

const value = 444;

export default function Screen() {
  return (
    <div className="screen_div flex justify-center mt-2 mb-4">
      <input
        type="text"
        name="screen"
        id="theme1_screen"
        className="w-[95%] h-20 text-right p-2 text-3xl rounded-lg tracking-widest"
        readOnly value={value}
      />
    </div>
  );
}
