
export default function todoSlice(state =todoInitialState,action){
    if (action.type === "todoSlice") {
        return state
    }
    return state
}

export const todoInitialState = [
    {
        id: 0,
        title: "Todo 1",
        isComplied: false
    }
]

export const todoSelector = (state)=> state.todo