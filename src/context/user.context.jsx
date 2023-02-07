import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChangedListener } from "../firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const useUserContext = () => {
  return useContext(UserContext);
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        currentUser: action.payload,
      };
    default:
      throw new Error("Unknown action type in user reducer");
  }
};

const INITIAL_STATE = { currentUser: null };

const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = user => dispatch({ type: "SET_USER", payload: user });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
