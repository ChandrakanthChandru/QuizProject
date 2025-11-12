import React, { useContext } from 'react'
import { MyContext } from '../Context'
import './Result.css'


const Result = () => {
    let [data] = useContext(MyContext);
    console.log(data);

    return (
        <div>
            {data.map((ele, i) => {
                return (
                    <div>
                        <div key={i} className={ele.answer == ele.YourAnswer ? "correct" : "wrong"}>
                            <p>{ele.id}.{ele.question}</p>
                            <div>
                                {ele.options.map((e) => {
                                    return (
                                        <div>
                                            <input
                                                type="radio"
                                                value={e}
                                                checked={ele.yourAnswer == e ? true : false}
                                                disabled
                                            />
                                            <label htmlFor="">{e}</label>
                                        </div>
                                    );
                                })}
                            </div>
                            <h5>Answer : {ele.answer}</h5>
                            <h4>Your Answer : {ele.YourAnswer}</h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Result