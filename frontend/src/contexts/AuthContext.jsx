import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();
  const cachedValue = useMemo(() => ({ token, setToken }), [token]);

  return (
    <AuthContext.Provider value={cachedValue}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export const useAuth = () => useContext(AuthContext);
