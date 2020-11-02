const initialState = {
    counter: 0,
}
const countReducer = (state = initialState, action) => {
    const {type, payload = ""} = action
    switch (type) {
        case "increment":
            return {...state, counter: state.counter + 1};
        case "decriment":
            return {...state, counter: state.counter - 1};
        case "incrOnValue":
            return {...state, counter: state.counter + payload};
        case "descrOnValue":
            return {...state, counter: state.counter - payload};
        default:
            return state
    }
}
export default countReducer