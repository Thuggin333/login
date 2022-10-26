
export default function todoSlice(state ={},action){
    if (action.payload === "todoSlice") {
        return state.todoSlice
    }
}

export const todoInitialState = [
    {
        id: 0,
        title: "Todo 1",
        isComplied: false
    }
]

export const todoSelector = (state)=> state