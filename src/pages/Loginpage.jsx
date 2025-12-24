import React from 'react'
import './LoginPage.css'



const Loginpage = () => {
  return (
    <div className='container'>
      <h1 style={{textAlign:"center"}}>Login Dashboard</h1>
    
      <div className1="container">
        <label >Username:</label><input type="text"/> <br/><br/>
        <label >Password:</label><input type="password"/><br/><br/>
        <input type="submit" value="login"/>
      </div>
    </div>
  
  )
}
  


export default Loginpage
