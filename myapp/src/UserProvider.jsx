import { useState, createContext }from 'react'
import React from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getUserData } from './firebaseUtils';

const auth = getAuth();
export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(auth.currentUser);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    
    return (
        <UserContext.Provider value={{user , setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
