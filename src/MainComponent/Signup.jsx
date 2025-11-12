import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  let navigate=useNavigate();

  let [signUp, setSignup] = useState(
    {
      name: "",
      email: "",
      password: "",
      quiz:null,
    }
  )
  function handleInput(e) {
    setSignup({ ...signUp, [e.target.name]: e.target.value })
  }
  async function handleSubmit(event) {
    event.preventDefault();

    let res = await fetch("https://690ecf80bd0fefc30a057b0f.mockapi.io/API/Users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(signUp)
      
    });
    console.log(res);
    
    
    let data = await res.json()
    console.log(data);
    setSignup({
      name: "",
      email: "",
      password: "",
      quiz:null
    })
    if( typeof data == 'object'){
      navigate("/login")
    }
  }
  return (
    <div className='signup'>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='User Name' name='name' onInput={handleInput} value={signUp.name} />
        <input type="email" placeholder='Enter a mailId' name='email' onInput={handleInput} value={signUp.email} />
        <input type="password" placeholder='Enter a Password' name='password' onInput={handleInput} value={signUp.password} />
        <input type="submit" value="Submit" id='submit' disabled={
          signUp.email && signUp.name && signUp.password ? false : true
        } />
      </form>
    </div>
  )
}

export default Signup