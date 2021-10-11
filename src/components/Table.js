import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { FiEdit } from "react-icons/fi";
import {MdDelete, MdOutlinePreview} from 'react-icons/md'
export default function Table() {
    const [users,setUsers] = useState([])
let history = useHistory()
    useEffect(async()=>{
const url = "http://localhost:3003/employees"
  const result= await axios.get(url)
  setUsers(result.data)
  console.log(result.data);
    },[])


const deleteUser= async (id)=>{
const deleteU = await axios.delete(`http://localhost:3003/employees/${id}`)
    console.log(deleteU);
    
}


    return (
        <div className="container">
          
         <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th scope="col">Salary</th>
      <th scope="col">Update </th>
      <th scope="col">Delete</th>
      <th scope="col">View</th>
    </tr>
  </thead>
  <tbody>
  {
      
      users.map((item,index)=>{
          return(
        <>
             
 
    <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.department}</td>
      <td>{item.salary}</td>
      <td> <Link className="btn btn-warning" to={`/update/${item.id}`} ><FiEdit/></Link></td>
      <td> <button className="btn btn-danger" onClick={()=>deleteUser(item.id)}  ><MdDelete  /></button></td>
      <td> <Link className="btn btn-primary" to={`/view/${item.id}`} ><MdOutlinePreview/></Link></td>
      
    </tr>


  
    </>
          )
      })
  }
</tbody>
</table>
        </div>
    )
}
