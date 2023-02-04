import "./button.styles.jsx";
import { BaseButton, GoogleButton, InvertedButton } from "./button.styles.jsx";

const BUTTON_TYPE = {
  base: BaseButton,
  inverted: InvertedButton,
  google: GoogleButton,
};

const Button = ({ children, buttonType = "base", ...otherProps }) => {
  const CustomButton = BUTTON_TYPE[buttonType];

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
