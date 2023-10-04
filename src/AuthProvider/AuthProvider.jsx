import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const googleLogin = () => {
  setLoading(true)
    return signInWithPopup(auth, GoogleProvider);
  };
  const LoginWithEmail = (email, password) => {
    setLoading(true)

    return createUserWithEmailAndPassword(auth,email,password)
  };
  const loginEmailandPass =(email,password)=>{
    setLoading(true)

    return signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
   const observer = onAuthStateChanged(auth,(user)=>{
        setUser(user)
        setLoading(false)

    })
    return ()=> {
        observer()
    }
  }, []);
  const Logout =()=>{
    setLoading(true)
    return signOut(auth)
  }

  const AuthInfo = {
    user,
    googleLogin,
    LoginWithEmail,
    Logout,
    loginEmailandPass,
    loading
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
