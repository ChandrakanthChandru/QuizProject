import React, { useContext, useEffect, useState } from 'react'
import './Quiz.css'
import { MyContext } from '../Context'
import { Link, useNavigate } from 'react-router-dom'

const Quiz = () => {
    let navigate=useNavigate();
    let [timer, setTimer] = useState(300); // 5 minutes

    useEffect(() => {
        if (timer <= 0) {
            navigate("/result");
            return;
        }

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, navigate]);

    let [data, setData, index, setIndex, user, setUser] = useContext(MyContext)

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) return null;

    let userName = user;
    // console.log(userName.name);
    

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

                <div className="quiz-content">
                    <div className="q">
                        <h1>Question</h1><br />
                        <h2>{oneQuest.id}.{oneQuest.question}</h2>
                    </div>

                    <div className="o">
                        <h3>Choose the Correct Answer</h3><br />
                        <h4>{
                            oneQuest.options.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name="ans"
                                            id={`option-${i}`}
                                            value={e}
                                            onChange={handleInput}
                                            checked={oneQuest.YourAnswer == e ? true : false}
                                        />
                                        <label htmlFor={`option-${i}`}>{e}</label>
                                    </div>
                                )
                            })
                        }</h4>
                    </div>

                    <div className="nav-buttons">
                        <button onClick={() => {
                            if (index > 0) {
                                setIndex(index - 1)
                            }
                        }}>Previous</button>

                        <button onClick={() => {
                            if (index < data.length - 1) {
                                setIndex(index + 1)
                            }
                        }}>Next</button>
                    </div>
                </div>

                <aside className="quiz-sidebar">
                    <div className="matrix-container">
                        <h3>Questions</h3>
                        <div className="b">
                            {data.map((e, i) => (
                                <button
                                    key={e.id}
                                    className={index === i ? 'active' : ''}
                                    onClick={() => setIndex(i)}
                                >
                                    {e.id}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="submit-container">
                        <button className="submit-btn" onClick={() => {
                            let confirmation = confirm("Are You Really Want To Submit")
                            if (confirmation) {
                                navigate("/result")
                            }
                        }}>Submit Quiz</button>
                    </div>
                </aside>

            </main>

            {/* Footer removed as controls moved to main/sidebar */}
        </div>
    )
}

export default Quiz