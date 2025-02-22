
import React, { createContext, useEffect, useState } from "react";
import {auth} from '../Firebase/firebase.init'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // google login
  const googleSignInUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // *updating user
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // *log out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    googleSignInUser,
    logOutUser,
    updateUser,
    setLoading,
    loading,
    setUser,
    user,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        console.log("Current User ------> ", currentUser);
        // get token and storing in the local storage
        const userInfo = { email: currentUser.email };
        setLoading(false)
      } else {
        setLoading(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
