import React, { useContext, useEffect, useState } from 'react'
import './Quiz.css'
import { MyContext } from '../Context'
import { Link, useNavigate } from 'react-router-dom'

const Quiz = () => {
    let[timer, setTimer]=useState(3000);
    let navigate=useNavigate();
    useEffect(()=>{

        if(timer == 0){
            
            navigate("/result")
            return;
        }

       let interval= setInterval(()=>{
        setTimer(timer - 1)
        },1000)

        return()=>{
            clearInterval(interval);
        };
    },[timer])

    
    let [data, setData, index, setIndex, user, setUser] = useContext(MyContext)

    let allValues=useContext(MyContext);
    let userName= allValues[4]
    console.log(userName.name);
    

    // console.log(data, index);
    let oneQuest = data[index]
    // console.log(oneQuest);
    function handleInput(eve){
        oneQuest.YourAnswer=eve.target.value
        setData([...data])
    }


    return (

        <div className='quiz'>
            <header>

                <div className="">
                    <h3>UserName : {userName.name}</h3>
                </div>

                <div className="">
                    <h4>{timer}</h4>
                </div>

            </header>


            <main>

                <div className="q">
                    <h1>Question</h1><br />
                    <h2>{oneQuest.id}.{oneQuest.question}</h2>
                </div>

                <div className="o"><h3>Choose the Correct Answer</h3><br />

                    <h4>{
                        oneQuest.options.map((e, i) => {
                            return (
                                <div key={i}>
                                    <input
                                        type="radio"
                                        name="ans"
                                        id=""
                                        value={e}
                                        onChange={handleInput}
                                        checked={oneQuest.YourAnswer == e?true:false}
                                    />
                                    <label htmlFor="">{e}</label>
                                </div>
                            )
                        })
                    }</h4>

                </div>
                <div className="b">{data.map((e, i) => {
                    return <button key={e.id} onClick={() => {
                        setIndex(i)
                    }}>{e.id}</button>
                })
                }</div>

            </main>

            <footer>

                <div>
                    <div className="right">
                        <button onClick={() => {
                            if (index > 0) {
                                setIndex(index - 1)
                            }
                        }}>Previous Question</button>

                        <button onClick={() => {
                            if (index < data.length - 1) {
                                setIndex(index + 1)
                            }
                        }}>Next Qustion</button>
                    </div>
                    <div className="inner"><button onClick={
                        ()=>{
                            let confirmation= confirm("Are You Really Want To Submit")
                            console.log(confirmation);

                            if(confirmation){
                                navigate("/result")
                            }
                        }
                    }>Submit</button></div>
                </div>


            </footer>
        </div>
    )
}

export default Quiz