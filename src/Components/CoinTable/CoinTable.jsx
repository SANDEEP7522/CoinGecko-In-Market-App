// import React, { Component } from 'react'

// import { useEffect, useState } from "react";
// function CoinTable() {
 
//   const [count, setCount] = useState(0);

//   const [flag, setflag] = useState(false);

//     async function downlode() {
//         const responce = await fetch ("https://jsonplaceholder.typicode.com/todos/2") 
//         console.log(responce);
//         const result = await responce.joson;
//         console.log(result);
            
//     }

//  useEffect(() => {
//     downlode();
//  },[count]);

//  useEffect(() => {
//     console.log("Flag is change");
//  },[flag]);

//  useEffect(() => {
//     console.log("Flage is not Change");  
//  },);

//  useEffect(() => {
//     console.log("flage is change & !change ");
    
//  },[count, flag]);


//     return (
//       <>
//         <h1>coin</h1>
//         {count}
//         <br />
//         <button onClick={() => setCount(count +1)}>Increment</button>
//         <br />
//         {flag && <div>flag is true</div> }
//         <br />
//         <button onClick={() => setflag(!flag)}>Toggle</button>
//       </>
//     );
//  }


function CoinTable() { 
  
      return (
        <>
          <h1>Coin</h1>
        </>
      );
   }
  
export default CoinTable;
