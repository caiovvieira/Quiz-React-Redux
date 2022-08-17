function messageReducer(state = false, action) {
    switch (action.type) {
        case "SHOW_MESSAGE":
           return state = true
        case "HIDE_MESSAGE":
           return state = false
        default:
            return state
    }
}

export default messageReducer