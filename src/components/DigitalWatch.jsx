
import React, { useEffect, useState } from 'react'
import './watch.css'


function DigitalWatch() {
// const [time,setTime] =useState(0);
let times = new Date().toLocaleTimeString();

const [currTime,setCurrTime] = useState(times);

setInterval(()=>{
    let times = new Date().toLocaleTimeString();
setCurrTime(times)
},1000);






  return (

    <>
 
 <div className="watch">
 <div>DigitalWatch</div>
 <div className="time">
{currTime}
 </div>
 </div>
    </>
   
  )
}

export default DigitalWatch