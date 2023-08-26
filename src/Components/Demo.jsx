
import Heading from "./Heading";
import Input from "./Input";
import React,{ useEffect ,useState} from "react";
import Output from "./Output";

function Demo() {

  const [state,setState] =useState(2);
  const [data,setData] =useState([]);

useEffect(()=>{

  (async function(){

const api =await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);

const res = await api.json()

setData(res);

document.title = `( ${state} ) \t Records`


  })()




},[state])



  return (
    <>

      <Heading />
      <Input />

<button onClick={() =>{setState(state + 1)}}>click me: {state}</button>

{
  data.map((ele,index) =>{
return(
<Output name={ele.name} id={ele.id} address={ele.address} imageUrl={ele.imageUrl} age={ele.age} dob={ ele.dob} email={ele.email} firstName={ele.firstName} lastName={ele.lastName} salary={ele.salary} index={index} />
)

  })
}

    </>
  );
}

export default Demo;
