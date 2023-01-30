import { signInWithGooglePopup, createUserDocFromAuth } from "../../firebase/firebase";

const SignIn = () => {
  const handleClick = async () => {
    const result = await signInWithGooglePopup();
    createUserDocFromAuth(result.user);
  };

  return (
    <div>
      <h2>Sign In Page</h2>
      <button onClick={handleClick}>Sign In With Google</button>
    </div>
  );
};

export default SignIn;
