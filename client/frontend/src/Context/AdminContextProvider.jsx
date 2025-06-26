import { createContext, useState, useContext } from "react";

const AdminContext = createContext({
  admin: null,
  token: null,
  setAdmin: () => {},
  getToken: () => {},
  setNotification: () => {},
});

export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState({});
  const [notification, _setNotification] = useState('');
  const [token, setToken] = useState(localStorage.getItem('admin_token'));

  function setNotification(message) {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('');
    }, 5000);
  }

  function getToken(token) {
    setToken(token);
    if (token) {
      localStorage.setItem('admin_token', token);
    } else {
      localStorage.removeItem('admin_token');
    }
  }

  return (
    <AdminContext.Provider value={{
      admin,
      token,
      setAdmin,
      getToken,
      notification,
      setNotification
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdminContext = () => useContext(AdminContext);
