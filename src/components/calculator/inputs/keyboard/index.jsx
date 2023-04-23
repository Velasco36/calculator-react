import { useEffect } from "react";

export function InputKeyboard({ handleKeydown }) {
  useEffect(() => {
    function handleEvent(event) {
      if (
        /^[0-9]$/i.test(event.key) ||
        event.key === "Backspace" ||
        event.key === "Delete" ||
        event.key === "Enter" ||
        event.key === "." ||
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/" ||
        event.key === "%"
      ) {
        handleKeydown(event.key);
      }
      return;
    }

    window.addEventListener("keydown", handleEvent);

    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [handleKeydown]);
}
