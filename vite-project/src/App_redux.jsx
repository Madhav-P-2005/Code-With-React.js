// import { useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment ,multiply } from "./redux/counter/counterSlice";
import Navbar_Redux from "./components2-Sigma/Navbar_Redux";

function App_redux() {
  // const [count , setCount] = useState(0)
  const count = useSelector((state) => state.counter.value); // Bring count from redux store

  const dispatch = useDispatch()

  return (
    <>
      <Navbar_Redux />
      <br />
      <div>

            <button onClick={() => dispatch(decrement())}>-</button>
        Counter is :- {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}> * </button>

      </div>
    </>
  );
}

export default App_redux;
