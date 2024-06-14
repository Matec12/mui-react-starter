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
    try {
      console.log(user);
    } catch (error) {
      console.log({ error });
    }
    //  verify user's authentication here
  };

  useEffect(() => {
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (payload, successCallback, errorCallback) => {
    try {
      const response = await axios.post(authConfig.loginEndpoint, payload);
      if (successCallback) successCallback(response);
      // set authorization token and update user details here
    } catch (error) {
      if (error) {
        if (errorCallback) errorCallback(error);
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.sessionStorage.removeItem(authConfig.token);
    window.location.pathname = '/';
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
