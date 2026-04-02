import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { Link } from 'react-router-dom'
import './Result.css'

const Result = () => {
    let [data] = useContext(MyContext);
    
    // Safety check in case data is not yet loaded or user somehow got here without taking the quiz
    if (!data) return <div>No quiz data found.</div>;

    const correctAnswers = data.filter(ele => ele.answer === ele.YourAnswer).length;

    return (
        <div className="results-container">
            <div className="score-board">
                <h1>Quiz Results</h1>
                <p>You scored {correctAnswers} out of {data.length}</p>
                <Link to="/" className="home-link">Go Home</Link>
            </div>
            <div className="questions-list">
                {data.map((ele, i) => {
                    return (
                        <div key={i} className={`result-item ${ele.answer === ele.YourAnswer ? "correct" : "wrong"}`}>
                            <h3>{ele.id}. {ele.question}</h3>
                            <div className="options">
                                {ele.options.map((e, index) => {
                                    return (
                                        <div key={index} className="option-item">
                                            <input
                                                type="radio"
                                                value={e}
                                                checked={ele.YourAnswer === e}
                                                readOnly
                                                disabled
                                            />
                                            <label>{e}</label>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="answer-summary">
                                <p className="correct-ans">Correct Answer: <span>{ele.answer}</span></p>
                                <p className="user-ans">Your Answer: <span>{ele.YourAnswer || "Not Answered"}</span></p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Result;