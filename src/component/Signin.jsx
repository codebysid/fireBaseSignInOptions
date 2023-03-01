import React from 'react'
import { useAuthContext } from '../Context/Authcontext'
import Signout from '../component/Signout'
import { Navigate } from 'react-router-dom'
import {AiFillFacebook,AiFillGoogleCircle,AiFillGithub} from 'react-icons/ai'

const Signin = () => {

    const {currentUser,googleSignin,facebookSignin,githubSignin}=useAuthContext()

    const googleSign=()=>{
      googleSignin()
    }

    const facebookSign=()=>{
      facebookSignin()
    }

    const githubSign=()=>{
      githubSignin()
    }

  return (
    <div className='signinBtn'>{
      currentUser?<Navigate to={'/private'}/>:<>
        <button className='googleBtn' onClick={()=>googleSign()}
        >
          <AiFillGoogleCircle className='googleIcon'/>
          Sign in With Google</button>
      

      <button className='githubBtn' onClick={()=>githubSign()}
        >
          <AiFillGithub className='githubIcon'/>
          Sign in With Github</button
      >
      <button className='facebookBtn' onClick={()=>facebookSign()}
        >
          <AiFillFacebook className='facebookIcon'/>
          Sign in With Facebook</button
      >
      
      </>
      
      }
      
    </div>
  )
}

export default Signin
