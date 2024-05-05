import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  
  createUserWithEmailAndPassword,
  
  onAuthStateChanged,
  
  signInWithEmailAndPassword,
  
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


  // google login
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  // signup
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


//   sign out
const logOut = () =>{
    return signOut(auth)
}

    // using observer
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user)
        setLoading(false)
      });

      return () =>{
        unSubscribe()
      }
  },[])



  const info = {
    googleLogin,
    createUser,
    signIn,
    logOut,
    user,
    loading
  };

  return <AuthContext.Provider value={info}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
