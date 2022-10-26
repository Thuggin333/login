

export function currentUserReducer(state = {}, action) {
    if (action.type === "currentUserName") {
      return {
        ...state,
        name: action.payload.name,
      };
    }
    return state;
}

const initialCurrentUser = {
    name: "John",
}

export default initialCurrentUser
export const userSelector=(state)=> state.currentUser.name;