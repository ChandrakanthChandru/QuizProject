import React,{useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import Welcome from './Welcome'
import { MyContext } from '../Context'
import './style.css'

const Home = () => {
  let allValues= useContext(MyContext);
  console.log(allValues);

  let user=allValues[4];
  console.log(user);
  

  
  return (
    <div>
      <nav className='home'>
        <div>
          <Link to="/"><h1>QUIZ APP</h1></Link>
        </div>
       {user ? <h1>{user.name}</h1> :
        <div>
          <Link to="login">
            <button>logIn</button>
          </Link>
          <Link to="signup">
            <button >signUp</button>
          </Link>
        </div>}
      </nav>
      <Outlet></Outlet>
    </div>
  )
}

export default Home