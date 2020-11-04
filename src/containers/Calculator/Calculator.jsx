import React from "react"
import LayoutIos from "../../components/LayoutIos/LayoutIos";
import "./Calculator.css"
import {useSelector, useDispatch} from "react-redux";
import {CALC_ACTIONS, CLEAR, IN_PERCENT, VALUE_CHANGE, POS_NEG, RESULT, DECIMAL} from "../../redux/CalcTypes";

const Calculator = () => {
    const value = useSelector(state => state.value)
    const dispatch = useDispatch()
    const onCalcActions = (e) => {
        const {action} = e.target.dataset
        dispatch({
            type: CALC_ACTIONS,
            payload: action
        })
    }
    const onValueChange = (e) => {
        const {value} = e.target.dataset
        dispatch({
            type: VALUE_CHANGE,
            payload: value
        })
    }
    const onClear = () => dispatch({type: CLEAR})
    const onResult = () => dispatch({type: RESULT})
    const onPercent = () => dispatch({type: IN_PERCENT})
    const onPositiveNegative = () => dispatch({type: POS_NEG})
    const onDecimal = () => dispatch({type: DECIMAL})
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

                <button onClick={onClear} className="Calculator__btn Calculator__btn--gray">C</button>


                <button onClick={onPositiveNegative}
                        className="Calculator__btn Calculator__btn--gray">+/-
                </button>


                <button onClick={onPercent} className="Calculator__btn Calculator__btn--gray">%</button>


                <button onClick={onCalcActions} data-action="/"
                        className="Calculator__btn Calculator__btn--orange">&#247;</button>


                <button data-value="7" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">7
                </button>


                <button data-value="8" onClick={onValueChange} className="Calculator__btn Calculator__btn--dark">8
                </button>

                <button data-value="9" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">9
                </button>


                <button onClick={onCalcActions} data-action="*"
                        className="Calculator__btn Calculator__btn--orange">&times;</button>


                <button data-value="4" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">4
                </button>


                <button data-value="5" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">5
                </button>


                <button data-value="6" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">6
                </button>


                <button onClick={onCalcActions} data-action="-"
                        className="Calculator__btn Calculator__btn--orange">-
                </button>


                <button data-value="1" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">1
                </button>


                <button data-value="2" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">2
                </button>


                <button data-value="3" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark">3
                </button>


                <button onClick={onCalcActions} data-action="+"
                        className="Calculator__btn Calculator__btn--orange">+
                </button>


                <button data-value="0" onClick={onValueChange}
                        className="Calculator__btn Calculator__btn--dark Calculator__btn--large">0
                </button>


                <button onClick={onDecimal} className="Calculator__btn Calculator__btn--dark">,
                </button>

                <button onClick={onResult} className="Calculator__btn Calculator__btn--orange">=</button>
            </div>
        </div>
    </LayoutIos>
}
export default Calculator