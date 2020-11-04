import {CLEAR, IN_PERCENT, VALUE_CHANGE, POS_NEG, RESULT, CALC_ACTIONS, DECIMAL} from "./CalcTypes";

const handlers = {
    [VALUE_CHANGE]: (state, {payload}) => {
        const inValidChange = +payload === 0 && +state.value === 0
        if (inValidChange) return state
        if (state.isNewCalc) {
            return {...state, value: payload, result: payload, isNewCalc: false, isInProcess: false, isDecimal: false}
        }
        if (state.isInProcess) {
            return {...state, value: payload, result: state.result + payload, isInProcess: false, isDecimal: false}
        }
        const isBadLength = state.value.length >= state.valueBadLength
        if (isBadLength) return state
        return {...state, value: state.value + payload, result: state.result + payload, isDecimal: false}
    },
    [CALC_ACTIONS]: (state, {payload}) => {
        if (state.value === state.errorMes || state.isDecimal) return state
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
    [DECIMAL]: (state) => {
        const invalidDecimal = state.value.includes(".") || state.isDecimal
        if (invalidDecimal) return state
        if (state.isNewCalc) {
            return {...state, value: ".", result: ".", isNewCalc: false, isInProcess: false, isDecimal: true}
        }
        if (state.isInProcess) {
            return {...state, value: ".", result: state.result + ".", isInProcess: false, isDecimal: true}
        }
        return {...state, value: state.value + ".", result: state.result + ".", isDecimal: true}
    },
    [IN_PERCENT]: (state) => {
        const inValidPercent = state.isDecimal || state.value === state.errorMes || state.isInProcess
        if (inValidPercent) return state
        return {
            ...state,
            value: (+state.value / 100),
            result: (state.result) + "/100",
            isNewCalc: true
        }
    },
    [POS_NEG]: (state) => {
        if (state.value === state.errorMes || state.isDecimal) return state
        const negative = "-"
        const isNegative = state.value.startsWith(negative)
        if (isNegative) {
            if (state.result.startsWith(negative)) {
                return {
                    ...state,
                    value: state.value.slice(1),
                    result: state.result.slice(1)
                }
            }
            return {...state, value: state.value.slice(1)}

        } else {
            if (state.result.startsWith(negative)) {
                return {...state, value: negative + state.value}
            }
            return {...state, value: negative + state.value, result: negative + state.result}
        }
    },
    [CLEAR]: (state) => ({...state, value: "0", result: "0", isInProcess: true, isNewCalc: true}),
    [RESULT]: (state) => {
        const validGetResult = !state.isInProcess && state.result.length && !state.isDecimal
        if (validGetResult) {
            // eslint-disable-next-line no-eval
            let result = eval(state.result).toString()
            const infinityResult = result === "Infinity"
            if (infinityResult) {
                return {...state, value: state.errorMes, result: "", isNewCalc: true, isInProcess: true}
            }
            const isBadLength = result.length >= state.valueBadLength
            result = isBadLength ? result.slice(0, state.valueBadLength) : result
            return {...state, value: result, result: result, isNewCalc: true}
        }
        return state
    },
    DEFAULT: state => state,
}
const initialState = {
    value: "0",
    result: "0",
    valueBadLength: 9,
    isNewCalc: true,
    isInProcess: true,
    errorMes: "ERROR",
    isDecimal: false
}
const calculationReducer = (state = initialState, action) => {
    const {type} = action
    const handle = handlers[type] || handlers.DEFAULT
    return handle(state, action)
}
export default calculationReducer