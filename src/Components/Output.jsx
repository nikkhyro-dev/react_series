

import React from 'react'

function Output({imageUrl,id,firstName,lastName,address,dob,age,email,salary,index}) {
  return (
    <div className="main__container" key={index}>
    <div className="data" >
    <div className="img">
    <img src={imageUrl} alt="" />
    </div>
    <article>
      <div>id: {id}</div>
      <div>address:{address}</div>
      <div>age:{age}</div>
      <div>dob: {dob}</div>
      <div>email:{email}</div>
      <div>firstName:{firstName}</div>
      <div>lastName: {lastName}</div>
      <div>salary:{salary}</div>
    </article>
    
    </div>
    </div>
  )
}

export default Output