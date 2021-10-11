import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

export default function UserView() {
const [user,setUser] =useState([])
    let {id } = useParams()


useEffect( async()=>{
       const result = await axios.get(`http://localhost:3003/employees/${id}`)
       setUser(result.data)
},[])
console.log(user);
    return (
        <div>
            
                 
                     
      <div className="container py-4">
     <h1 className="display-4">User Id:{user.id} </h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name:{user.name} </li>
        <li className="list-group-item">E-mail: {user.email}</li>
        <li className="list-group-item">Department:{user.department} </li>
        <li className="list-group-item">Salary:{user.salary} </li>
      </ul>
      </div>     

   
        </div>
    )
}
