/*
import { useEffect, useContext } from "react";
import { useUser } from "./useUser";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    const user = getItem("user");
    console.log("User", user);
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user) => {
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
    addUser(user);
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', false);
    localStorage.removeItem('selectedCourse');
    removeUser();
  };

  return { user, login, logout, setUser, isAuth, setIsAuth };
};
*/



/*
import { useEffect, useContext } from "react";
import { useUser } from "./useUser";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem } = useLocalStorage();

  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      addUser(parsedUser);
      setIsAuth(true);
    }
  }, []);

  const login = (user) => {
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
    addUser(user);
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem('isAuth', false);
    localStorage.removeItem('selectedCourse');
    removeUser();
  };

  return { user, login, logout, setUser, isAuth, setIsAuth };
};
*/




/*
import { useEffect, useContext } from "react";
import { useUser } from "./useUser";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem, setItem } = useLocalStorage();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      addUser(parsedUser);
      setIsAuth(true);
    }
  }, [getItem, addUser, setIsAuth]);

  const login = (user) => {
    setIsAuth(true);
    setItem('isAuth', true);
    addUser(user);
    setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setIsAuth(false);
    setItem('isAuth', false);
    removeUser();
    localStorage.removeItem('user');
    localStorage.removeItem('selectedCourse');
  };

  return { user, login, logout, setUser, isAuth, setIsAuth };
};
*/



import { useEffect, useContext } from "react";
import { useUser } from "./useUser";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { user, addUser, removeUser, setUser } = useUser();
  const { getItem, setItem } = useLocalStorage();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    const storedUser = getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      addUser(parsedUser);
      setIsAuth(true);
    }
  }, []); // Only run once on mount

  /*
  const login = (user) => {
    setIsAuth(true);
    setItem('isAuth', true);
    addUser(user);
    setItem("user", JSON.stringify(user));
  };
*/

  
  const login = (user) => {
    setIsAuth(true); // Update authentication state in the application
    localStorage.setItem('isAuth', 'true'); // Store authentication state in localStorage
    addUser(user); // Update user data in the application state
    localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuth');
    localStorage.removeItem('pinecone_index_name');
  };

  return { user, login, logout, setUser, isAuth, setIsAuth };
};














