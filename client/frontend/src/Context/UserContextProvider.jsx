import { createContext, useState, useContext } from "react";

const UserContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  getToken: () => {},
  setNotification: () => {},
});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [notification, _setNotification] = useState('');
  const [token, setToken] = useState(localStorage.getItem('user_token'));

  function setNotification(message) {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('');
    }, 5000);
  }

  function getToken(token) {
    setToken(token);
    if (token) {
      localStorage.setItem('user_token', token);
    } else {
      localStorage.removeItem('user_token');
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      token,
      setUser,
      getToken,
      notification,
      setNotification
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
