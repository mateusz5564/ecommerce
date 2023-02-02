import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../firebase/firebase";

export const UserContext = createContext({
  user: null,
  setUser: () => null,
});

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(user => {
      setUser(user)
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
