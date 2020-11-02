import React from "react"
import "./App.css"
import {connect, useSelector, useDispatch} from "react-redux"


function App() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const increment = () => dispatch({type: "increment"})
    const decriment = () => dispatch({type: "decriment"})
    const incrOnValue = (value) => dispatch({type: "incrOnValue", payload: value})
    const descrOnValue = (value) => dispatch({type: "descrOnValue", payload: value})
    return (
        <div className="Counter">
            <h1>{counter}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decriment}>Decrease</button>
            <button onClick={incrOnValue.bind(null, 5)}>Increase by 5</button>
            <button onClick={descrOnValue.bind(null, 5)}>Decrease by 5</button>
        </div>
    );
}


export default App
