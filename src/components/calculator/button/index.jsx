import './style.css';

export function Button({ value, color, zeroOptional = false }) {
  const classZero = zeroOptional ? 'zero' : '';
  return (
    <input
      type="button"
      value={value}
      class={`${color} cal-button ${classZero}`}
    />
  );
}
