import { set, useForm } from "react-hook-form"



function App_Form(){
   
    const {
      register,
      handleSubmit,
      watch,
      setError,
      formState: { errors, isSubmitting },
    } = useForm();
      
    const delay = (d) =>{
        return new Promise((resolve , reject) =>{
            setTimeout(() => {
                resolve()
            }, d * 1000);
        })
    }
    const onsubmit = async (data) => {
      // await delay(4)    // simulating network delay

      let r = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

          /*
             Output :- { data: { username: 'Madhav P', password: '123' } }

          */

      let res = await r.text();
      console.log(data, res);
      // if(data.username !=="shubham"){
      //     setError("myform" , {message : "Your form is not in good order because credentials are invalid ! "})
      // }
      // if(data.username === "rohan"){
      //     setError("blocked" , {message : " Sorry this user is blocked "})
      // }
    }

    return (
      <>
        {isSubmitting && <div> Loading .... wait a bit </div>}
        <div className="container">
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            <input
              {...register("username", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "Min length is 3" },
                maxLength: { value: 8, message: "Max length is 3" },
              })}
              placeholder="username"
              type="text"
            />
            {errors.username && <div>{errors.username.message}</div>}
            <br />
            <br />
            <input
              {...register("password", {
                required: { value: true, message: "This field is required" },
                minLength: { value: 3, message: "Min length of password is 3" },
                maxLength: { value: 7, message: "Max length of password is 7" },
              })}
            />
            {errors.password && <div>{errors.password.message}</div>}
            <br />
            <input disabled={isSubmitting} type="submit" value="Submit" />

            {/* Custom form error creation  named "myform" :-  */}
            {/* {errors.myform && <div>{errors.myform.message}</div>}*/}

            {/* Custom form errors creation "blocked" :-  */}
            {/*{errors.blocked && <div>{errors.blocked.message}</div>}*/}
          </form>
        </div>
      </>
    );
}


export default App_Form;