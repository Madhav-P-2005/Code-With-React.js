// Functional Component

import Hello from "./components/Hello";

import Bye from "./components/Bye";

import { Arrays, Arrays2 , Arrays3 } from "./components/Arrays-and-Objects"; 


import Animals from "./components/Rendering-Array-Elements";

import Fruits from "./components/Rendering-An-Array-Of-Objects";


import Message from "./components/Handle-An-Event-In-React";


import Counter from "./components/State-Example-Counter";


import Counter2 from "./components/Handle-Multiple-Events-In-React";


import Form from "./components/Handle-Input-Element-In-React";


import Form2 from "./components/Handle-Multiple-Input-Elements";


function App() {

  // Define seatNumbers array
  const seatNumbers = [1, 4, 7];

  const person = {
    name: "Madhav P",
    message: "Hi there!",
    emoji: "👋",
    seatNumbers: [10, 20, 30],
  };


  return (
    <>
      <Hello name="Madhav P" phoneno="9437475384" />

      <Hello name="Steve" />

      {/* The Way to destructure JavaScript */}
      <Bye id="1" phoneno="34534534534" age="34" />

      <div>
      <br />
        <h1> Arrays :- </h1>
        <Arrays
          name="Rob"
          message="Hi There"
          emoji="🙏"
          seatNumber={seatNumbers}
        />

        <h1> Arrays2 :- </h1>
        <Arrays2 person={person} />

        <br />

        <h1> Arrays3  :- </h1>
        <Arrays3 person={person} />
      </div>


      <div>

        <h1> Rendering Array Elements </h1>
        <Animals/>
      </div>


      <div>
        <h1> Rendering An Array of Objects   </h1>
        <Fruits/>
      </div>



      <div>
        <h1> Rendering An Array of Objects   </h1>
        <Message/>
      </div>


      <div>
        <h1> State Example and Use of useState() Hook    </h1>
        <Counter/>
      </div>


      <hr />

      <div>
        <h1> Handling Multiple  Events  In React using useState() Hook </h1>
        <Counter2/>
      </div>



      <hr />

      <div>
        <h1> Handling Input Element In React using useState() Hook </h1>
        <Form/>
      </div>


      <div>
        <h1> Handling Multiple Input Elements In React using useState() Hook </h1>
        <Form2/>
      </div>
    </>
  );
}






export default App;