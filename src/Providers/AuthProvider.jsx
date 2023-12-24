
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {


  





  











  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  










  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);




  

  const [toDoData, setTodoData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [completeData, setCompleteData] = useState([]);
  const [reFetch, setReFetch] = useState(true)


  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/todo`)
    .then(res=> res.json())
    .then((data) => {
      setTodoData(data)
      setLoading(false)
  })}, [user, reFetch])
  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/inprogress`)
    .then(res=> res.json())
    .then((data) => {
      setInProgressData(data)
      setLoading(false)
  })}, [user, reFetch])
  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/complete`)
    .then(res=> res.json())
    .then((data) => {
      setCompleteData(data)
      setLoading(false)
  })}, [user, reFetch])






  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    toDoData,
    inProgressData,
    completeData,
    setCompleteData,
    setInProgressData,
    setTodoData,
    reFetch,
    setReFetch
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;