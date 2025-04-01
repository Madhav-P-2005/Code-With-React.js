import React , {useState} from "react";


function Form2() {

   const [name , setName] = useState({firstName : '' , lastName : ''})


   function handleSubmit(e){
          e.preventDefault();   
          console.log(name);
   }

  return (
    <div>
    <h1> {name.firstName} = {name.lastName} </h1>
        <form>
          <input onChange={(e) => setName({firstName : e.target.value,lastName: ''})} type="text"  value = {name.firstName} />

          <input onChange={(e) => setName({firstName : " ", lastName : e.target.value})} type="text"  value = {name.lastName} />



          {/*  In a Better Way we can do By using the Spread Operator  */}
          <label > FirstName :-  </label>
          <input onChange={(e) => setName({...name  , firstName : e.target.value})} type="text"  value = {name.firstName} /> 

          <label> LastName :-  </label>
          <input onChange={(e) => setName({...name , lastName : e.target.value})} type="text"  value = {name.lastName} />


          {/*  To Submit A Form  and use of  preventDefault()  */}
          <button onClick={handleSubmit}> Submit </button>
        </form>
    </div>
  )
}

export default Form2