import { GoogleAuthProvider } from "firebase/auth/web-extension";
import React, { createContext, useState } from "react";
import {auth} from '../Firebase/firebase.init'

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

// google login
const googleSignInUser=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}


  const authInfo = { googleSignInUser};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
