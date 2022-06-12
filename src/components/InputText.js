const InputText = ({
  inputClass,
  label,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={`inputText ${inputClass}`}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputText;
