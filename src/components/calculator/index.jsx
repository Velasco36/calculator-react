import { Display } from './display';
import { InputDisplay, InputKeyboard } from './inputs';

import './style.css';

export function Calculator() {
  return (
    <div id="appbg">
      <form name="calculator">
        <Display />
        <InputDisplay />
        <InputKeyboard />
      </form>
    </div>
  );
}
