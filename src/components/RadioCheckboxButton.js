const RadioCheckboxButton = ({
  radioCheckboxClass,
  title,
  type,
  style,
  handleOnChange,
  name,
  disabled,
  isChecked,
  value,
}) => {
  return (
    <div
      className={`radioCheckboxClass ${radioCheckboxClass}`}
      style={{
        ...style,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <input
        type={type}
        checked={isChecked}
        name={name}
        disabled={disabled}
        value={value}
        onChange={handleOnChange}
      />
      <span />
      <label htmlFor={name}>{title}</label>
    </div>
  );
};

export default RadioCheckboxButton;
