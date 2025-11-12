import React, { useState, useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { MyContext } from '../Context';

const Login = () => {

  let allValues=useContext(MyContext);
  let user=allValues[4];
  let setUser=allValues[5]
  // console.log(user,setUser);
  

  let navigate=useNavigate();

  let [login, setLogin] = useState({
    email: "",
    password: "",
  })

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await fetch(`https://690ecf80bd0fefc30a057b0f.mockapi.io/API/Users?email=${login.email}&password=${login.password}`);
    let oneUser = await res.json()
    console.log(oneUser);
    console.log(typeof oneUser);
    
    if(typeof oneUser == "object"){
      setUser(oneUser[0])
      navigate("/")
    }

  }

  function handleInput(e) {
    setLogin({ ...login, [e.target.name]: e.target.value });
  }

  return (
    <div children className='login'>
      <h1>logIn</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter a mailId' name='email' value={login.email} onInput={handleInput} />
        <input type="password" placeholder='Enter a Password' name='password' value={login.password} onInput={handleInput} />
        <input type="submit" value="Submit" id='submit' onSubmit={handleSubmit} disabled={login.email && login.password ? false : true} />
      </form>
    </div>
  )
}

export default Login;