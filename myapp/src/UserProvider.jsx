import { useState, createContext }from 'react'
import React from 'react'

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getUserData } from './firebaseUtils';

const auth = getAuth();
export const UserContext = createContext();

const UserProvider = () => {

    const [user, setUser] = useState(auth.currentUser);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        let data = getUserData(user);
        setUser(data);
      } else {
        setUser(null);
      }
    });
    
    return (
        <UserContext.Provider value={user}/>
    )
}

export default UserProvider
