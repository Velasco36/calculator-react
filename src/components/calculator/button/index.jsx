import './style.css';

export function Button({
  value,
  color = '',
  handleClick,
  zeroOptional = false,
}) {
  const classButton = `cal-button ${color} ${zeroOptional ? 'zero' : ''}`;
  return (
    <input
      type="button"
      value={value}
      className={classButton.trim()}
      onKeyDown={(e) => e.target.blur()}
      onClick={() => handleClick(value)}
    />
  );
}
