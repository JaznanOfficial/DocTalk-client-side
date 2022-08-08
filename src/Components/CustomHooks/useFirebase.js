import React, { useState } from 'react';
import initializeConfigue from '../../Firebase/Firebase.init';
import { getAuth,GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";



initializeConfigue();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState({});




    const signUpWithEmailAndPasseord = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmailAndPassword = (email, password) => { 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => { 
        return signInWithPopup(auth, googleProvider);
    }

   




    return {
        signUpWithEmailAndPasseord,
        signInWithEmailAndPassword,
        signInWithGoogle,
        user,
    }
};

export default useFirebase;