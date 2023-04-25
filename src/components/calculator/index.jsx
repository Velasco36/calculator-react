import { useState } from "react";

import { Display } from "./display";
import { InputDisplay, InputKeyboard } from "./inputs";

import "./style.css";

export function Calculator() {
  const [display, setDisplay] = useState(0);

  function operation(input) {
    switch (input) {
      case "AC":
      case "Delete":
        setDisplay(0);
        break;

      case "Backspace":
        setDisplay(display.substring(0, display.length - 1));
        break;

      case "=":
      case "Enter":
        try {
          // eslint-disable-next-line no-eval
          setDisplay(eval(display));
        } catch (e) {
          setDisplay("ERROR");
        }
        break;

      default:
        setDisplay(`${display !== 0 ? display : ""}${input}`);
        break;
    }
  }

  return (
    <div id="calculator" className="box">
      <div id="body">
        <Display value={display} />
        <InputDisplay handleInput={(input) => operation(input)} />
        <InputKeyboard handleKeydown={(input) => operation(input)} />
      </div>
    </div>
  );
}
