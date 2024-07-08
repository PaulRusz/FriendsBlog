import { createContext, useContext, useReducer } from 'react'
import auth from '../utils/auth'

const defaultValue = { isLoggedIn: auth.LoggedIn() };

const authenticationContext = createContext(defaultValue);
const AuthenticationActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};
export const AuthenticationActions = {
  login: () => {
    return {
      type: AuthenticationActionType.LOGIN,
    };
  },
  logout: () => {
    return {
      type: AuthenticationActionType.LOGOUT,
    };
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case AuthenticationActionType.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case AuthenticationActionType.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const AuthenticationProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, defaultValue);
  return (
    <authenticationContext.Provider value={[value, dispatch]}>
      {children}
    </authenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(authenticationContext);

export default AuthenticationProvider;
