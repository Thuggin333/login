import { combineReducers, createStore } from "redux";
import initialCurrentUser, {currentUserReducer} from "../app/currentUser/currentUserSlice";
import TodoReducer, { initialTodo } from "../app/todo/todoSlice";


const store = createStore(
  combineReducers({
    currentUser: currentUserReducer,
    todo:TodoReducer
  }),
  {
    currentUser: initialCurrentUser,
    todo:initialTodo
  }
);

export default store;
