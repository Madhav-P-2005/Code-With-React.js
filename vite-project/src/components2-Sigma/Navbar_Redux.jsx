import React from "react";


import {useSelector , useDispatch} from 'react-redux'


const Navbar_Redux = () =>{

    const count = useSelector((state) => state.counter.value)
    
    return(
        <div>
            I am Navbar_Redux Example Component and Counteer is {count}
        </div>
    )
}

export default Navbar_Redux;