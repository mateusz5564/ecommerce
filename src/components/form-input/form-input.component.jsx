import { FormInputLabel, Group, StyledFormInput } from "./form-input.styles";

const FormInput = ({ id, label, type, value, onChange }) => {
  return (
    <Group>
      <StyledFormInput id={id} required type={type} onChange={onChange} value={value} />
      <FormInputLabel
        hasValue={value.length > 0}
        htmlFor={id}
      >
        {label}
      </FormInputLabel>
    </Group>
  );
};

export default FormInput;
