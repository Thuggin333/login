export function TodoReducer(state={}, action) {
  if (action.type === "TODO") {
    return {}
  }
  return state
}


export const initialTodo = [
    {
      id: Math.floor(Math.random()),
      title: "react",
      isCompleted: false,
    },
    {
      id: Math.floor(Math.random()),
      title: "java script",
      isCompleted: false,
    },
];

export default TodoReducer;

export const todoSelector = (state) => state.todo