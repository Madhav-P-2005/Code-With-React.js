/* 

Q 18) You have to use an api and display the data in the form of a card under a container. All the data points returned by the API should be converted to a card Use this API: https://jsonplaceholder.typicode.com/posts

Hint: Create a state for the data which will be fetched using the Json Placeholder API Inside useEffect, use fetch to populate that state and then use map to render the cards from that state


*/

import { useEffect, useState } from "react";



import React from 'react'


function Exerise_Card() {
    const [posts, setPosts] = useState([]);
    const URL = "https://jsonplaceholder.typicode.com/posts";
    
     useEffect(() =>{
       const fetchData = async() => {
        const response = await fetch(URL)
        const json = await response.json();
        setPosts(json)
       } 
          fetchData()
     }, [])
     
    return (
      <div className="container">
        {posts.map((item) => (
          <div className="card my-3 p-3" key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

export default Exerise_Card;