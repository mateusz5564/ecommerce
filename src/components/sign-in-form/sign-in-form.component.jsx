import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInWithPassword,
} from "../../firebase/firebase";
import Button from "../button/button.component";
import { ButtonsContainer, SignInContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  signInEmail: "",
  signInPassword: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { signInEmail, signInPassword } = formFields;

  const handleSignInWithGoogle = async e => {
    try {
      const result = await signInWithGooglePopup();
      createUserDocFromAuth(result.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignInWithPassword = async e => {
    e.preventDefault();

    try {
      const result = await signInWithPassword(signInEmail, signInPassword);
      setFormFields(defaultFormFields);
      console.log(result);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("user not found");
          break;
        case "auth/weak-password":
          alert("your password is too weak");
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
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignInWithPassword}>
        <FormInput
          id="signInEmail"
          label="Email"
          value={signInEmail}
          onChange={handleChange}
          type="email"
        />
        <FormInput
          id="signInPassword"
          label="Password"
          value={signInPassword}
          onChange={handleChange}
          type="password"
        />
        <ButtonsContainer>
          <Button>Sign In</Button>
          <Button type="button" onClick={handleSignInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
