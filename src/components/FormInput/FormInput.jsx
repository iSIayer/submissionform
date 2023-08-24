import "./FormInput.css";

export const FormInput = (props) => {
  const { label, errorMessage, onChange, id, type, options, ...inputProps } =
    props;

  return (
    <div className="formInput">
      <label>{label}</label>
      {type === "select" ? (
        <select
          style={{ padding: "15px 0", borderRadius: "5px", margin: "10px 0" }}
          {...inputProps}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input type="file" {...inputProps} onChange={onChange} />
      ) : (
        <input {...inputProps} onChange={onChange} />
      )}
      <span>{errorMessage}</span>
    </div>
  );
};
