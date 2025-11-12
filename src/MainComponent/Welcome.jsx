import React from 'react'
import { MyContext } from '../Context'
import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'

const Welcome = () => {
  let allValues=useContext(MyContext);
  let user= allValues[4]
  return (
    <div className='welcome' >
        <section>
            <h1>{user && user.name} Welcome To Quizz Application🧠</h1>
            { user && (
              <Link to="/quiz"><button>Start Quiz</button></Link>
            )}
        </section>
    </div>
  )
}

export default Welcome