import './App.css';
import react, { useEffect, useState } from 'react';
import UserAuth from './Component/UserAuth';
import { auth } from './FireBase';
import Home from './Component/Home';
// import AuthForm from './AuthForm';
function App() {
const[presentUser ,setPresentUser] = useState(null);
  
useEffect (()=>{
     auth.onAuthStateChanged(user=>{
      if(user){
      setPresentUser({
        uid :user.uid,
        email : user.email
      })}
      else setPresentUser(null)
     })
},[])

  return (
    <div className="App">
     {presentUser ? <Home presentUser={presentUser}></Home>:<UserAuth></UserAuth>}
     {/* <AuthForm></AuthForm> */}
    </div>
  );
}

export default App;
