import React from "react"
import LayoutIos from "../../components/LayoutIos/LayoutIos";
import "./Calculator.css"
import {useSelector, useDispatch} from "react-redux";
import {CALC_ACTIONS, CLEAR, IN_PERCENT, VALUE_CHANGE, POS_NEG, RESULT, DECIMAL} from "../../redux/CalcTypes";
import CalcButtons from "../../components/CalcButtons/CalcButtons";

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
    const btns = [{
        handler: onClear,
        cls: "Calculator__btn--gray",
        value: "C",
    }, {
        handler: onPositiveNegative,
        cls: "Calculator__btn--gray",
        value: "±"
    }, {
        handler: onPercent,
        cls: "Calculator__btn--gray",
        value: "%",
    }, {
        handler: onCalcActions,
        cls: "Calculator__btn--gray",
        value: "÷",
        action: "/"
    }, {
        handler: onValueChange,
        value: "7",
        cls: "Calculator__btn--dark"
    },
        {
            handler: onValueChange,
            value: "8",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onValueChange,
            value: "9",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onCalcActions,
            value: "×",
            action: "*",
            cls: "Calculator__btn--orange",
        },
        {
            handler: onValueChange,
            value: "4",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onValueChange,
            value: "5",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onValueChange,
            value: "6",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onCalcActions,
            value: "-",
            action: "-",
            cls: "Calculator__btn--orange",
        },
        {
            handler: onValueChange,
            value: "1",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onValueChange,
            value: "2",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onValueChange,
            value: "3",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onCalcActions,
            value: "+",
            action: "+",
            cls: "Calculator__btn--orange",
        },
        {
            handler: onValueChange,
            value: "0",
            cls: "Calculator__btn--dark Calculator__btn--large"
        },
        {
            handler: onDecimal,
            value: ",",
            cls: "Calculator__btn--dark"
        },
        {
            handler: onResult,
            value: "=",
            cls: "Calculator__btn--orange"
        }]
    return <LayoutIos>
        <div className="Calculator">
            <p className={resultCls.join(" ")}>
                {value}
            </p>
            <CalcButtons btns={btns}/>
        </div>
    </LayoutIos>
}
export default Calculator