import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const ListUsers = () => {
    const [Users,setUsers]=useState([])
    console.log("hello",Users)
    useEffect(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>
       {Users.map((e)=> <ul> 
        <li> {e.name} </li> 
        <li> {e.username} </li> 
        <li> {e.email} </li> 
        <button><Link to={`/profile/${e.id}`}> Go to profile </Link></button>
       
        </ul>)}
    </div>
  )
}

export default ListUsers