import React from "react"
import LayoutIos from "../../components/LayoutIos/LayoutIos";
import "./Calculator.css"
import {useSelector, useDispatch} from "react-redux";
import {CLEAR, MODIFY, RESULT} from "../../redux/CalcTypes";

const Calculator = () => {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()
    const onModify = (e) => {
        const {value} = e.target.dataset
        dispatch({
            type: MODIFY,
            payload: value
        })
    }
    const onClear = () => dispatch({type: CLEAR})
    const onResult = () => dispatch({type: RESULT})
    const resultCls = ["Calculator__result"]
    if (value.length > 6 && value.length <= 8) {
        resultCls.push("Calculator__result--md")
    } else if (value.length > 8) {
        resultCls.push("Calculator__result--sm")
    }
    return <LayoutIos>
        <div className="Calculator">
            <p className={resultCls.join(" ")}>
                {value}
            </p>
            <div className="Calculator__btns">
                <div className="Calculator__btn-wrap">
                    <button onClick={onClear} className="Calculator__btn Calculator__btn--gray">C</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--gray">+/-</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button className="Calculator__btn Calculator__btn--gray">%</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onModify} data-value="/"
                            className="Calculator__btn Calculator__btn--orange">&#247;</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="7" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">7
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="8" onClick={onModify} className="Calculator__btn Calculator__btn--dark">8
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="9" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">9
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onModify} data-value="*"
                            className="Calculator__btn Calculator__btn--orange">&times;</button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="4" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">4
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="5" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">5
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="6" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">6
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onModify} data-value="-"
                            className="Calculator__btn Calculator__btn--orange">-
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="1" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">1
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="2" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">2
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button data-value="3" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">3
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onModify} data-value="+"
                            className="Calculator__btn Calculator__btn--orange">+
                    </button>
                </div>
                <div className="Calculator__btn-wrap Calculator__btn--large">
                    <button data-value="0" onClick={onModify}
                            className="Calculator__btn Calculator__btn--dark">0
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onModify} data-value="." className="Calculator__btn Calculator__btn--dark">,
                    </button>
                </div>
                <div className="Calculator__btn-wrap">
                    <button onClick={onResult} className="Calculator__btn Calculator__btn--orange">=</button>
                </div>
            </div>
        </div>
    </LayoutIos>
}
export default Calculator