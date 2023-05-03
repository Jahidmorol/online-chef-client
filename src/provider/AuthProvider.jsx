import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProbider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(null)

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const singInWithGithub = () => {
    return signInWithPopup(auth, githubProbider);
  };
  
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const updateUser = (name, photoUrl) => {
  //   setLoading(true);
  //   const updateUsers =  {
  //     displayName: name,
  //     photoURL: photoUrl,
  //   }
  //   return updateProfile(auth.currentUser, updateUsers)
  //   .then(() => setUser((preUser) => ({...preUser, ...updateUsers})))
  // };


  const updateUser = (upUser,name, photoUrl) => {
    return updateProfile(upUser, {
      displayName: name,
      photoURL: photoUrl
    })
  }
  
  
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubsCribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubsCribe();
    };
  }, [reload]);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    signInWithGoogle,
    updateUser,
    singInWithGithub,
    setReload,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
