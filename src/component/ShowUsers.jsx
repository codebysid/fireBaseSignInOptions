import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect ,useState} from 'react'
import { db } from '../Firebase'
import Signout from './Signout'

const ShowUsers = () => {
    const [userData,setUserData]=useState([])

    const displayUsers=async()=>{


        const snap=await getDocs(collection(db,"signinUsers"))
        snap && snap.forEach(doc=>{
                setUserData(prev=>prev?[...prev,doc.data()]:[doc.data()])
        })
    }

    useEffect(()=>{
        displayUsers()
    },[])

  return (
    <div>
      {
        userData && userData.map((ele,key)=>{
            return(
                <div key={key}>
                    <span>{ele.email}</span>
                </div>
            )
        })
      }

      <Signout/>
    </div>
  )
}

export default ShowUsers
