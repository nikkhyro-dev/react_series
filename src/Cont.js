import React from "react";
import { useState } from "react";

function Cont() {
    
  const [num, updateNum] = useState(0);
  
const inc = ()=>{
  updateNum(num+1)
}
const dec = ()=>{
  num <= 0 ? updateNum(0)  : updateNum(num-1)

}


  return (
    <div className="main">
      <div className="back">
        <h1 className="output"> {num}</h1>
      </div>

      <div>
      <button className="btn" onClick={inc}>increment</button>
      <button className="btn" onClick={dec}>decrement</button>
      </div>
    </div>
  );

}

export default Cont;
