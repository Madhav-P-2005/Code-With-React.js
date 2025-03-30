import React from "react";

// Without Props 
function Arrays({name , message , emoji ,seatNumber }){
    

    return(
        <>
        <div>
            <h1> This is a Arrays-Objects Component </h1>
            <p>Name : {name}</p>
            <p>Message  : {message}</p>
            <p>Emoji : {emoji}</p>
            <p>Seat Numbers : {seatNumber.join(",")}</p>
        </div>
        </>
    )
}


// With Props 
function Arrays2(props){
    return(
        <>
            {props.person.message}  {props.person.emoji} {props.person.name} {props.person.seatNumbers.join(', ')}
        </>
    )
}

// With Props and Trying to destructure it . 
function Arrays3({person}){
    return(
        <>
            {person.message}  {person.emoji} {person.name} {person.seatNumbers.join(', ')}
        </>
    )
}

export {Arrays , Arrays2 , Arrays3};