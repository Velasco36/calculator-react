import "./style.css";

export function Button({
  value,
  color = "",
  handleClick,
  zeroOptional = false,
}) {
  const className = `cal-button ${color} ${zeroOptional ? "zero" : ""}`;
  return (
    <input
      type="button"
      value={value}
      class={className.trim()}
      onKeyDown={(e) => e.target.blur()}
      onClick={() => handleClick(value)}
    />
  );
}
