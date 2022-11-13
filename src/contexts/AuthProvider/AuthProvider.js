
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);


const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}

const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const logOut = () =>{
    localStorage.removeItem('Genius-Token');
    return signOut(auth);
}

useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    })

    return () =>{
        unsubscribe();
    }
},[]);

const authInfo = {user, loading, createUser, signIn, logOut, googleSignIn }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;