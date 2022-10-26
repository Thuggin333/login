
export default function userSlice(state = {}, action) {
    if (action.payload === "userSlice") {
        return state
    }
}

export const userInitialState = {
    user: null,
} 

export const userSelector = (state)=> state.user