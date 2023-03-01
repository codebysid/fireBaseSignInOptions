import { signInWithPopup, signOut } from 'firebase/auth'
import {  doc, setDoc } from 'firebase/firestore'
import React, { useContext, useState,useEffect } from 'react'
import { createContext } from 'react'
import { auth, db, facebookProvider, githubProvider, provider } from '../Firebase'

const AuthContext=createContext()

export function useAuthContext(){
    return useContext(AuthContext)
}

export const AuthProvider = ({children}) => {

    const [currentUser,setCurrentUser]=useState('')

    const googleSignin=()=>{
        return signInWithPopup(auth,provider)
    }

    const facebookSignin=()=>{
        return signInWithPopup(auth,facebookProvider).then(data=>{
            // setCurrentUser(data.user.email)
        })
    }

    const githubSignin=()=>{
        return signInWithPopup(auth,githubProvider).then(data=>{
            // setCurrentUser(data.user.email)
        })
    }

    const logOut=()=>{
        console.log("logging out")
        setCurrentUser('')
        return auth.signOut()
    }
    const changeUser=(userName)=>{
        setCurrentUser(userName)
    }

    const value={
        currentUser,changeUser,googleSignin,logOut,facebookSignin,githubSignin
    }


    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{
          setCurrentUser(user)
        })
    
        return unsubscribe
      },[])
      
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
