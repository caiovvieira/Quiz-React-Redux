function indexReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT_INDEX":
           return state + 1
        case "RESET_INDEX":
           return state = 0
        default:
            return state
    }
}

export default indexReducer