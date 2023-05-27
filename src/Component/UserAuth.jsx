import React, { useState } from 'react';
import app from '../FireBase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBase';

const UserAuth = () => {
let errorMsg ="";
const [data ,setData] =useState({
    email : "",
    password :""
})
//const auth = getAuth(app);
const {email,password} =data;
const handleAuth =e=>{
     setData({...data,[e.target.name]:e.target.value})
}
const signUp =e=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign up
        const user = userCredential.user;
        console.log('Signed up:', user);
       
      })
      .catch((error) => {
        // Handle sign up error
        console.log('Sign-up error:', error.message);
        
      });
}
const signIn =e=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign in
        const user = userCredential.user;
        console.log('Signed in:', user);
        errorMsg=""
      })
      .catch((error) => {
        // Handle sign in error
        console.log('Sign-in error:', error.message);
        errorMsg =error.message
      });
}

  return (
    <div>
        <center>
            <form action="" autoComplete='off'>
                <h1>VijaySoftwares</h1>
                <input type="email" name='email' value={email} onChange={handleAuth}/><br />
                <input type="password" name='password' value={password} onChange={handleAuth}/><br />
                <button onClick={signIn}>Signin</button> &nbsp;&nbsp;
                <button onClick={signUp}>Signup</button>
                <h1>{errorMsg}</h1>
            </form>
        </center>
    </div>
  )
}

export default UserAuth