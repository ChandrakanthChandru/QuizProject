import React,{createContext, useContext, useState} from 'react'
import {questions} from './quesitons.json';
import Router from './Router';


export let MyContext=createContext();

const Context = () => {
 
    let [data,setData]=useState(questions);
    let [index,setIndex]=useState(0);

    let[user,setUser]=useState(null);

  return (
    <div>
        <MyContext.Provider value={[data,setData,index,setIndex,user,setUser]}>
            <Router></Router>
        </MyContext.Provider>
    </div>
  )
}

export default Context;