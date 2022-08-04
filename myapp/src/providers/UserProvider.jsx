import { createContext, useState, useEffect } from "react";

import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const user_token = JSON.parse(localStorage.getItem("randlyv1_user_token"));
    if (user_token) {
      let result = await axios.post(
        `http://localhost:5500/users/check`,
        {},
        {
          headers: {
            token: user_token,
          },
        }
      );
      let res = result.data;
      setUser(res);
    } else {
      setUser(null);
    }
  };

  const updateUser = async (token) => {
    localStorage.setItem("randlyv1_user_token", JSON.stringify(token));
    await fetchUser();
}

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, fetchUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
