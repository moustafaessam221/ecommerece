import { createContext, useContext, useEffect, useState } from "react";
import { observeAuthState } from "../firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      setUser(user);
      if(user.uid === process.env.REACT_APP_ADMIN_UID){
        setRole("admin");
      } else {
        setRole("user");
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
