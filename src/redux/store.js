import { combineReducers, createStore } from "redux";
import todoSlice, { todoInitialState } from "./Slice/todoSlice";
import userSlice, { userInitialState } from "./Slice/userSlice";
console.log(userInitialState);
const store = createStore(combineReducers({
    user:userSlice,
    todo:todoSlice
}),
    {
        user:userInitialState,
        todo:todoInitialState
    }
)

export default store;
