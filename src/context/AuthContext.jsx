import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // load user from localStorage on refresh
  const [user, setUser] = useState(() => {
    const savedInfo = localStorage.getItem("userInfo");
    return savedInfo ? JSON.parse(savedInfo) : null;
  });

  useEffect(() => {
    if (user) {
        localStorage.setItem("userInfo", JSON.stringify(user));
    } else {
        localStorage.removeItem("userInfo");
    }
  }, [user]);

  

  const login = (email) => {
    setUser({
      name: "Interview User",
      email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
