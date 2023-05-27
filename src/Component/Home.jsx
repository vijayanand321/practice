import React from 'react'
import { auth } from '../FireBase'

const Home = ({presentUser}) => {
  return (
    <div>
        <center>
            Welcome <br />
            {presentUser.email}
        </center>
        <button onClick={()=> auth.signOut()}>Signout</button>
    </div>
  )
}

export default Home