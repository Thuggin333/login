
export default function userSlice(state=userInitialState, action) {
    if (action.type === "login") {
        return {...action.payload}
    }
    return state
}

export const userInitialState =null 

export const userSelector = (state)=> state.user