import React, { useState } from 'react';
import app from './FireBase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
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
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful sign in
        const user = userCredential.user;
        console.log('Signed in:', user);
      })
      .catch((error) => {
        // Handle sign in error
        console.log('Sign-in error:', error.message);
      });
  };

  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default AuthForm;
