import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

const Profile = () => {
    const [pr,setPr]=useState([])
    const {id}=useParams()
    console.log(id)
    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
.then ((res)=>setPr(res.data))
.catch((err)=>console.log(err))
    },[])
  return (
    <div><h1>Profile</h1>
        <h2>{pr.phone}</h2>
        <h2>{pr.website}</h2>
        
    </div>
  )
}

export default Profile