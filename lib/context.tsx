/* eslint-disable react/prop-types */

import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

// axios.defaults.baseURL = "https://event-backend-mauve.vercel.app/api/v1";
axios.defaults.baseURL = 'http://localhost:5000/api/v1';

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [userRefetch, setUserRefetch] = useState(false);
  const [usersRefetch, setusersRefetch] = useState(false);

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getAllUsers = async () => {
  //     const response = await axios.get(`/users`);

  //     setUsers(response?.data?.data);
  //   };
  //   getAllUsers();
  // }, [user?.role, usersRefetch]);

  // const token = localStorage.getItem('accessToken');
  // useEffect(() => {
  //   const getProfile = async () => {
  //     setIsLoading(true);

  //     try {
  //       const promise = await axios.get(`/users/profile`, {
  //         headers: {
  //           authorization: `${token}`,
  //         },
  //       });

  //       setUser(promise.data.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //       if (error.response.data.message === 'Invalid Token!') {
  //         localStorage.removeItem('accessToken');
  //       }
  //     }
  //   };

  //   getProfile();
  // }, [token, userRefetch]);

  const authInfo = {
    isLoading,
    userRefetch,
    setUserRefetch,
    setIsLoading,

    user,
    loading,
    setLoading,
    users,
    usersRefetch,
    setusersRefetch,
  };
  return (
    <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
