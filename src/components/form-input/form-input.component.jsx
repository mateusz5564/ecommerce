import "./form-input.styles.scss";

const FormInput = ({ id, label, type, value, onChange }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        id={id}
        required
        type={type}
        onChange={onChange}
        value={value}
      />
      <label className={`${value.length > 0 ? "shrink" : ""} form-input-label`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default FormInput;
