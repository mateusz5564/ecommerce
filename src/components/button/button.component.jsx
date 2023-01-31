import "./button.styles.scss";

const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE_CLASSES = {
    inverted: "inverted",
    google: "google-sign-in",
  };

  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
