import { useState } from "react";
import { createUserDocFromAuth, signUpWithPassword } from "../../firebase/firebase";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields = {
  displayName: "",
  signUpEmail: "",
  signUpPassword: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, signUpEmail, signUpPassword, confirmPassword } = formFields;

  const handleSignUpWithPassword = async e => {
    e.preventDefault();
    if (signUpPassword !== confirmPassword) return;

    try {
      const result = await signUpWithPassword(signUpEmail, signUpPassword);
      if (result.user) {
        createUserDocFromAuth(result.user, { displayName });
      }

      setFormFields(defaultFormFields);
      console.log(result);
    } catch (err) {
      switch (err.code) {
        case "auth/invalid-email":
          alert("invalid email");
          break;
        case "auth/wrong-passwor":
          alert("wrong password");
          break;
        default:
          console.log(err);
      }
    }
  };

  const handleChange = e => {
    const { id, value } = e.target;

    setFormFields({ ...formFields, [id]: value });
  };

  return (
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSignUpWithPassword}>
        <FormInput
          label="Display Name"
          id="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          id="signUpEmail"
          type="email"
          onChange={handleChange}
          value={signUpEmail}
        />

        <FormInput
          label="Password"
          id="signUpPassword"
          type="password"
          onChange={handleChange}
          value={signUpPassword}
        />

        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          required
          type="password"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
