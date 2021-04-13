const initState = {
    loginData : []
}

export const RootReducer = (state=initState, action) => {

    if(action.type === '__SIGNUP__') {
        return {
            ...state,
            loginData : action.payload
        }
    }

    return state
}