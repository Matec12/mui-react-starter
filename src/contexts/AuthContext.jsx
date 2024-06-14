import { createContext, useEffect, useState } from 'react';
import axios from '@/api';
import { authConfig } from '@/config/auth';

const defaultProvider = {
  user: null,
  loading: true,
  login: () => Promise.resolve()
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(defaultProvider.user);
  const [loading, setLoading] = useState(defaultProvider.loading);

  const initAuth = async () => {
    setLoading(true);
    //  verify user's authentication here
  };

  useEffect(() => {
    initAuth();
  }, []);

  const handleLogin = async (payload, successCallback, errorCallback) => {
    await axios
      .post(authConfig.loginEndpoint, payload)
      .then(async (response) => {
        if (successCallback) successCallback(response);
        // set authorization token and update user details here
      })
      .catch((err) => {
        if (err) {
          if (errorCallback) errorCallback(err);
        }
      });
  };

  const handleLogout = () => {
    setUser(null);
    window.sessionStorage.removeItem(authConfig.token);
    window.location.pathname = '/login';
  };

  const values = {
    user,
    loading,
    login: handleLogin,
    logout: handleLogout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
