import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile } from 'firebase/auth';
import { auth } from './../firebase/firebase.init';
import axios from 'axios';

export const AuthContext = createContext()
 const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    } 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(name, image)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log("dsfd", currentUser);
            
            if(currentUser?.email){
                const userr = {email: currentUser.email}
                axios.post('http://localhost:5000/jwt', userr, {withCredentials: true})
                .then(res=> {
                    console.log(res.data)
                    setLoading(false)
                })
                
            }
            else{
                axios.post('http://localhost:5000/logout', {}, {
                    withCredentials:  true
                })
                .then(res=>{
                    console.log("logout", res.data);
                    setLoading(false)
                    
                })
            }
           
        })
        return(()=>{
            unsubscribe();
            
        })
    }
        ,[])
    const info = {
        user,
        setUser,
        createUser,
        loginUser,
        loginWithGoogle,
        signOutUser,
        updateUserProfile,
        loading,
        setLoading
    }

    return (
       <AuthContext.Provider value={info}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;