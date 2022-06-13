const InputText = ({
  inputClass = '',
  label,
  placeholder,
  name,
  value,
  onChange,
  error = '',
}) => {
  const checkInputClass = () => {
    if (!value) return '';
    if (value && error) return 'inputText--error';
    if (value && !error) return 'inputText--valid';
  };

  return (
    <div className={`inputText ${inputClass} ${checkInputClass()}`}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p>{error}</p>
    </div>
  );
};

export default InputText;
