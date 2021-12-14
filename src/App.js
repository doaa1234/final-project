import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {


  const [usernameReg, setUsernameReg] = useState('')
  const [typeReg, settypeReg] = useState('')
  const [passwordReg, setpasswordReg] = useState('')

  const register =() => {
    Axios.post("http://localhost3500/add/user",{
      email: usernameReg,
      type:typeReg,
      password:passwordReg,

    }).then((response)=>{
      console.log(response);
    });

  };
  
  return (
    <div className="App">
      <h1>Database Management System</h1>
      <div  className="registration">
        <h1>Registration</h1>
        <label>User name</label>
        <br></br>
        <input 
           type="text"
           onChange={(e)=>{
            setUsernameReg(e.target.value);
           }}
         
        />
        <br></br>
        <label>Type</label>
        <br></br>
        <input 
        type="text"
        onChange={(e)=>{
          settypeReg(e.target.value);
         }}

        />
        <br></br>
        <label>Passwoed</label>
        <br></br>
        <input 
        type="text"
        onChange={(e)=>{
          setpasswordReg(e.target.value);
         }}
        />
        <br></br>
        <button onClick={register}>Register</button>
      </div>
      <div class className="login">
      <h1>Log in </h1>
      <input type="text" placeholder="Username..."/>
      <br></br>
      <input type="text" placeholder="Password..."/>
      <br></br>
      <button>Log in</button>

      </div>
    
    </div>
  );
}

export default App;

