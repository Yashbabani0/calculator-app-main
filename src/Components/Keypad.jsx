import React, { useEffect } from "react";

export default function Keypad({ value, setValue }) {
  const handleButtonClick = (e) => {
    setValue((prevValue) => prevValue + e.target.value);
  };

  const handleEqualClick = () => {
    setValue((prevValue) => {
      try {
        return eval(prevValue.replace(/x/g, "*")).toString();
      } catch (error) {
        return "Error";
      }
    });
  };

  const handleDeleteClick = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleKeyPress = (e) => {
    const allowedKeys = "0123456789+-*/.=";
    if (allowedKeys.includes(e.key)) {
      if (e.key === "=") {
        handleEqualClick();
      } else if (e.key === "Backspace") {
        handleDeleteClick();
      } else {
        setValue((prevValue) => prevValue + e.key);
      }
    } else if (e.key === "Enter") {
      handleEqualClick();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="theme1_keypad w-[95%] h-[26em] rounded-lg p-4">
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="7"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="8"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="9"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_deletebtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="DEL"
            onClick={handleDeleteClick}
          />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="4"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="5"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="6"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="+"
            onClick={handleButtonClick}
          />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="1"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="2"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="3"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="-"
            onClick={handleButtonClick}
          />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="."
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="0"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="/"
            onClick={handleButtonClick}
          />
          <input
            className="theme1_generalbtn w-1/4 h-[70%] rounded-lg"
            type="button"
            value="x"
            onClick={handleButtonClick}
          />
        </div>
        <div className="line h-1/5 flex items-center justify-center gap-2">
          <input
            className="theme1_resetbtn w-1/2 h-[70%] rounded-lg"
            type="button"
            value="RESET"
            onClick={() => setValue("")} // Add reset functionality
          />
          <input
            className="theme1_equalbtn w-1/2 h-[70%] rounded-lg"
            type="button"
            value="="
            onClick={handleEqualClick} // Evaluate the expression
          />
        </div>
      </div>
    </div>
  );
}
