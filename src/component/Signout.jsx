import { collection, doc, getDoc, getDocs, onSnapshot, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/Authcontext'
import { db } from '../Firebase'

const Signout = () => {
    const {logOut,currentUser} = useAuthContext()

    const useNavigator=useNavigate()
    const handleLogOut=async()=>{
        try{
            await logOut()
        }catch(err){
            console.log(err)
        }
    }

    const createNewDocument=async()=>{
        await setDoc(doc(db,"signinUsers",currentUser.uid),{
            email:currentUser.email
        })
    }

    useEffect(()=>{
        createNewDocument()
    },[currentUser])

  return (
    <div className='showUserDiv'>
      This is a Private Page

    <button
    className='showUserBtn'
    onClick={()=>useNavigator('/users')}
    >
        Show All Users
    </button>

      <button
      className='logoutBtn'
      onClick={handleLogOut}
      >Log Out</button>
    </div>
  )
}

export default Signout
