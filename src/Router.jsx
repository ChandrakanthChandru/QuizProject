import React from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Home from './MainComponent/Home'
import Welcome from './MainComponent/Welcome'
import Signup from './MainComponent/Signup'
import Login from './MainComponent/Login'
import Quiz from './Quiz Component/Quiz'
import Result from './Quiz Component/Result'

let router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        children:[
          {
          index:true,
          element:<Welcome/>
        },{
          path:"signup",
          element:<Signup></Signup>
        },
        {
          path:"login",
          element:<Login></Login>
        }
      ],
        
    },
    {
      path:"/quiz",
      element:<Quiz></Quiz>
    },{
      path:"/result",
      element:<Result></Result>
    }
])


const Router = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Router