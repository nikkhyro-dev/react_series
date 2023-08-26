import React, { useState } from 'react'
import './Demo.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Input() {

const [name,setName] =useState('');
const [email,setEmail] =useState('');
const [data,setData] =useState([]);

const submit =() =>{
setData([...data,{name,email}])

setName('')
setEmail('')
}


const deleteItems =(index) =>{

  let arr = data;
  arr.splice(index,1);
  setData([...arr])

}







  return (
    <div>
{/* Starting  */}

<div className="inputBody">

<div className="">
<Box className=" inner__inputBody" >
<div className=""><TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="name" variant="outlined" /></div>
<div className=""><TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="email" variant="outlined" /></div>
<div className=""><Stack> <Button variant="contained" color="success" onClick={submit}>
        Add
      </Button>
      </Stack>  </div>
</Box>
</div>

</div>

{/* output */}

<div className="display">
  <div> Name : {}</div>
  <div> Email : {}</div>
  <div ><Button color="secondary" onClick={deleteItems}> <DeleteIcon/></Button></div>
</div>
{/* js */}
{

data.map((ele,idx) =>{

return(
<div className="display" key={idx}>
  <div> Name : {ele.name}</div>
  <div> Email : {ele.email}</div>
  <div ><Button color="secondary" onClick={deleteItems}> <DeleteIcon/></Button></div>
</div>
)
})

}


{/* Ending  */}
    </div>
  )
}

export default Input