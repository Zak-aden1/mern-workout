import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  console.log('aa', action.payload);
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      }
    case 'LOGOUT':
      return {
        user: null
      }
    default:
      return null
  }
}

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })
  console.log('authContext state:', state);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}