/*
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
*/




/* UTILISATION AVEC LOCALSTORAGE
*/
/*
import { createContext, useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const { getItem, setItem, removeItem } = useLocalStorage();
  const initialLoad = useRef(true);

  // Effect to load user from localStorage on initial load
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      const storedUser = getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuth(true);
      }
    }
  }, []); // Empty dependency array to run only on mount

  // Effect to update localStorage when user state changes
  useEffect(() => {
    if (user) {
      setItem("user", JSON.stringify(user));
    } else {
      removeItem("user");
    }
  }, [user, setItem, removeItem]); // Dependencies include user, setItem, and removeItem

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
*/




/*
//UTILISATION SANS LOCAL STORAGE
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './auth/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

*/








/*


import { createContext, useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const { getItem, setItem, removeItem } = useLocalStorage();
  const initialLoad = useRef(true);

  // Effect to load user from localStorage on initial load
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      const storedUser = getItem("user");
      console.log("Initial load: storedUser from localStorage:", storedUser);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuth(true);
      }
    }
  }, []); // Empty dependency array to run only on mount

  // Effect to update localStorage when user state changes
  useEffect(() => {
    console.log("User state changed: user:", user, "isAuth:", isAuth);
    if (user) {
      setItem("user", JSON.stringify(user));
    } else {
      removeItem("user");
    }
  }, [user, isAuth, setItem, removeItem]); // Dependencies include user, isAuth, setItem, and removeItem

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

*/



import { createContext, useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const { getItem, setItem, removeItem } = useLocalStorage();
  const initialLoad = useRef(true);

  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      const storedUser = getItem("user");
      const storedIsAuth = getItem("isAuth") === 'true';

      console.log("AuthProvider initial load: storedUser:", storedUser, "storedIsAuth:", storedIsAuth);

      if (storedUser && storedIsAuth) {
        setUser(JSON.parse(storedUser));
        setIsAuth(true);
      }
    }
  }, [getItem]);

  useEffect(() => {
    console.log("AuthProvider User state changed: user:", user, "isAuth:", isAuth);
    if (user && isAuth) {
      setItem("user", JSON.stringify(user));
      setItem("isAuth", "true");
    } else {
      removeItem("user");
      removeItem("isAuth");
    }
  }, [user, isAuth, setItem, removeItem]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};





/*
// AuthContext.js
// AuthContext.js
import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { storedValue: storedUser, setItem: setUserItem, removeItem: removeUserItem } = useLocalStorage('user', null);
  const { storedValue: storedIsAuth, setItem: setIsAuthItem, removeItem: removeIsAuthItem } = useLocalStorage('isAuth', false);

  const [user, setUser] = useState(storedUser);
  const [isAuth, setIsAuth] = useState(storedIsAuth);

  useEffect(() => {
    console.log("AuthProvider initial load: storedUser:", storedUser, "storedIsAuth:", storedIsAuth);

    if (storedUser && storedIsAuth) {
      setUser(storedUser);
      setIsAuth(true);
    }
  }, [storedUser, storedIsAuth]);

  useEffect(() => {
    console.log("AuthProvider User state changed: user:", user, "isAuth:", isAuth);
    if (user && isAuth) {
      setUserItem(user);
      setIsAuthItem(true);
    } else {
      removeUserItem();
      removeIsAuthItem();
    }
  }, [user, isAuth, setUserItem, setIsAuthItem, removeUserItem, removeIsAuthItem]);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
*/


