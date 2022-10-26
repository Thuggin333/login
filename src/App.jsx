import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "./app/currentUser/currentUserSlice";
import { todoSelector } from "./app/todo/todoSlice";

function App() {
  const name = useSelector(userSelector)
  const todo = useSelector(todoSelector)
  const dispatch = useDispatch();
  console.log(todo);
  return (
    <div className="App">
      {name}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          dispatch({
            type: "currentUserName",
            payload: {
              name: e.target.value,
            },
          });
        }}
      />
    </div>
  );
}

export default App;
