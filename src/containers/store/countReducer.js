const initialState = {
    counter: 0,
}
const countReducer = (state = initialState, action) => {
    const {type, payload = ""} = action
    switch (type) {
        case "increment":
            return {...state, counter: state.counter + 1};
        case "decriment":
            if (state.counter === 0) return state
            return {...state, counter: state.counter - 1};
        case "incrOnValue":
            return {...state, counter: state.counter + payload};
        case "descrOnValue":
            if (state.counter === 0) return state
            return {...state, counter: state.counter - payload};
        default:
            return state
    }
}
export default countReducer