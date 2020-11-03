import {CLEAR, MODIFY, RESULT} from "./CalcTypes";

const isModifyEl = (el) => {
    const modifyElements = "*/+-"
    return modifyElements.includes(el)
}
const handlers = {
    [MODIFY]: (state, {payload}) => {
        const inValidChange = +payload === 0 && state.value === 0
        if (inValidChange) {
            return state
        }
        const isFirstChange = state.value === 0;
        if (isFirstChange) {
            return {...state, value: payload, maths: payload}
        }
        const isModifyElement = isModifyEl(payload)
        if (isModifyElement) {
            const lastEl = state.maths[state.maths.length - 1]
            const elReplace = payload !== lastEl && isModifyEl(lastEl)
            if (elReplace) {
                let mathsCopy = state.maths
                mathsCopy = mathsCopy.substring(0, mathsCopy.length - 1) + payload
                return {...state, maths: mathsCopy, value: payload}
            } else {
                return {...state, value: payload, maths: state.maths + payload}
            }
        }
        const isBadLength = state.value.length >= state.valueBadLength
        if (isBadLength) {
            return state
        }
        return {...state, value: state.value + payload, maths: state.maths + payload}
    },
    [CLEAR]: (state) => ({...state, value: 0, maths: ""}),
    [RESULT]: (state) => {
        if (state.maths.length) {
            const lastEl = state.maths[state.maths.length - 1]
            const inValidResult = isModifyEl(lastEl)
            if (inValidResult) {
                return state
            }
            let result = eval(state.maths).toString()
            result = result.slice(0, state.valueBadLength)
            result = +result  //0.1 +0.2 fixed, чтобы после . не было нулей))
            return {...state, value: result, maths: result}
        }
        return state
    },
    DEFAULT: state => state,
}
const initialState = {
    value: 0,
    maths: "",
    valueBadLength: 9,
    valueIsPositive: false,
}
const calculationReducer = (state = initialState, action) => {
    const {type} = action
    const handle = handlers[type] || handlers.DEFAULT
    return handle(state, action)
}
export default calculationReducer