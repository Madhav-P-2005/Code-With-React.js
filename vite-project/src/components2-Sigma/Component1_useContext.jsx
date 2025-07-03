import React , {useContext} from 'react'
import { counterContext } from '../use_Context/context';



const Component1_useContext = () => {

   const value = useContext(counterContext)

  return (
    // <>
    //   <div>
    //     This is a Example of Without using useContext hook from
    //     Component1_useContext.jsx(Component) Counter :- {count}
    //   </div>
    // </>

    <>
      <div>
        This is a Example of  using useContext hook from
        Component1_useContext.jsx(Component) Counter :- {value.count}
      </div>
    </>
  );
}

export default Component1_useContext