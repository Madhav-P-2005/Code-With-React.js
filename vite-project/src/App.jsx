// Functional Component 

import Hello from "./components/Hello"

import Bye from "./components/Bye"

function App() {

  return (
    <>
      <Hello name = "Madhav P" phoneno = "9437475384"/>
      <Hello name = "Steve" />


     {/* The Way to destructure the JavaScript */}
      <Bye id='1' phoneno="34534534534" age="34"/>
    </>
  )
}

export default App
