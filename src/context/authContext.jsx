import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  let token = null;
  if (userDetails) {
    token = userDetails.token;
  }
  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <AuthContext.Provider value={{userDetails, token}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
