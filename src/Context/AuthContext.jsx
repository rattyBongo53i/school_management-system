import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState([""]);
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("Isaac Z. Schlueter");
  console.log(" outside authProvider")


  useEffect(() => {
    // const token = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem('user'));
    console.log("inside authProvider useEffect")
    console.log('current user')
  
    if ( savedUser.length > 0){
      setCurrentUser(savedUser)
    }
  }, []);

  const login = async (email, password) => {
    try {
      const url = `${import.meta.env.VITE_App_API_URL}/login`;
      let response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let result = await response.json();

      const { user, token } = result;
        
      if (user.id) {
        console.log("login successful")
        setAuth(true);
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setCurrentUser(user);
        console.log(user.name);
         return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setToken(null);
    setAuth(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // useEffect(() => {
  //   const localToken = localStorage.getItem("token");
  //   if (localToken && localToken.length > 0) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //     console.log("user not authenticated");
  //   }
  // }, [currentUser, setToken]);

  const data = {
    auth,
    setAuth,
    setCurrentUser,
    currentUser,
    token,
    setToken,
    login,
    logout,
    name,
    setName,
  };

  return (
    <>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </>
  );
};
