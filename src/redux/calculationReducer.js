import {CLEAR, IN_PERCENT, VALUE_CHANGE, POS_NEG, RESULT, CALC_ACTIONS} from "./CalcTypes";

const handlers = {
    [VALUE_CHANGE]: (state, {payload}) => {
        const inValidChange = +payload === 0 && state.value === 0
        if (inValidChange) {
            return state
        }
        if (state.isNewCalc) {
            return {...state, value: payload, result: payload, isNewCalc: false, isInProcess: false}
        }
        if (state.isInProcess) {
            return {...state, value: payload, result: state.result + payload, isInProcess: false}
        }
        const isBadLength = state.value.length >= state.valueBadLength
        if (isBadLength) {
            return state
        }
        return {...state, value: state.value + payload, result: state.result + payload}
    },
    [CALC_ACTIONS]: (state, {payload}) => {
        const calcActions = "*/+-"
        const lastEl = state.result[state.result.length - 1]
        const validCalc = !calcActions.includes(lastEl)
        if (validCalc) {
            return {...state, result: state.result + payload, isNewCalc: false, isInProcess: true}
        }
        const isActionReplace = payload !== lastEl
        if (isActionReplace) {
            let resultCopy = state.result
            resultCopy = resultCopy.substring(0, resultCopy.length - 1) + payload
            return {...state, result: resultCopy}
        }
        return state
    },
    [IN_PERCENT]: (state) => {
        return {...state, value: +state.value * 0.01, result: state.result + "*0.01", isNewCalc: true}
    },
    [POS_NEG]: (state) => {
        if (state.isNewCalc) return state
        const negative = "-"
        const isNegative = state.value[0] === negative
        if (isNegative) {
            return {
                ...state,
                value: state.value.slice(1),
                result: state.result.slice(1)
            }
        } else {
            return {...state, value: negative + state.value, result: negative + state.result}
        }
    },
    [CLEAR]: (state) => ({...state, value: 0, result: "", isInProcess: true, isNewCalc: true}),
    [RESULT]: (state) => {
        const validGetResult = !state.isInProcess && state.result.length
        if (validGetResult) {
            let result = eval(state.result).toString()
            const isBadLength = result.length >= state.valueBadLength
            result = isBadLength ? +result.slice(0, state.valueBadLength) : +result
            return {...state, value: result, result: result, isNewCalc: true}
        }
        return state
    },
    DEFAULT: state => state,
}
const initialState = {
    value: 0,
    result: "",
    valueBadLength: 9,
    isNewCalc: true,
    isInProcess: true,
}
const calculationReducer = (state = initialState, action) => {
    console.log(state)
    const {type} = action
    const handle = handlers[type] || handlers.DEFAULT
    return handle(state, action)
}
export default calculationReducer