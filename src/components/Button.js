const Button = ({ buttonClass, title, style, onClick, type }) => {
  return (
    <button
      className={`buttonClass ${buttonClass}`}
      style={style}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
