const Button = ({ buttonClass, title, style, onClick, type, disabled }) => {
  return (
    <button
      className={`buttonClass ${buttonClass}`}
      style={{
        ...style,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
