import React, { useState } from 'react'

import Form2 from './Handle-Multiple-Input-Elements';


const Form = () => {


    const [text , setText] = useState('Input Box 1');

    const [text2 , setText2] = useState('Input Box 2');


    // By Using the Event Object 
    function handleChange(e){
        setText(e.target.value)
        console.log(e);
         
    }



  return (

    <div>
      <form >

        <input onChange={handleChange} type="text" value={text}/>        <input onChange = {(e) =>setText2(e.target.value)} type="text" value={text2}/>

        <h1> {text2} </h1>
      </form>
     </div>

  )
}






export default Form