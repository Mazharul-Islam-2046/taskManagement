
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
      console.log(user);

      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);




  

  const [toDoData, setTodoData] = useState([]);
  const [todoRefetch, settodoRefetch] = useState(true)
  const [inprogessRefetch, setInprogressRefetch] = useState(true)
  const [completeRefetch, setCompleteRefetch] = useState(true)
  const [inProgressData, setInProgressData] = useState([]);
  const [completeData, setCompleteData] = useState([]);


  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/todo`)
    .then(res=> res.json())
    .then((data) => {
      setTodoData(data)
      setLoading(false)
  })}, [todoRefetch, user])
  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/inprogress`)
    .then(res=> res.json())
    .then((data) => {
      setInProgressData(data)
      setLoading(false)
  })}, [inprogessRefetch, user])
  useEffect(()=> {
    setLoading(true)
    fetch (`https://task-management-server-topaz.vercel.app/tasks/${user?.email}/complete`)
    .then(res=> res.json())
    .then((data) => {
      setCompleteData(data)
      setLoading(false)
  })}, [completeRefetch, user])






  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    toDoData,
    settodoRefetch,
    setInprogressRefetch,
    setCompleteRefetch,
    todoRefetch,
    completeRefetch,
    inprogessRefetch,
    inProgressData,
    completeData
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