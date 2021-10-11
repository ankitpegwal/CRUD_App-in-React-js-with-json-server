import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

import './createStyle.css'



export default function Update() {
    let {id} = useParams()
    let history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  })
  useEffect(()=>{
    loadUser()
},[])
  const { name, email, department, salary } = user
  const inputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }




  const submitForm = async (e) => {
    e.preventDefault();
   
    const url = `http://localhost:3003/employees/${id}`
    await axios.put(url, user)
  
    history.push("/list")
 }

const loadUser= async()=>{
const result= await axios.get(`http://localhost:3003/employees/${id} `)
// setUser({
    setUser(result.data)
console.log((result));
}

  return (
    <div className="container">
      <h1>Update user</h1>
      <form onSubmit={submitForm} >
        <div className="row">

          <div className="col-75">
            <input type="text" value={name} onChange={inputChange} id="fname" name="name" placeholder="Your name.." />
          </div>
        </div>
        <div className="row">

          <div className="col-75">
            <input type="text" value={email} onChange={inputChange} id="fname" name="email" placeholder="Your email.." />
          </div>
        </div>
        <div className="row">

          <div className="col-75">
            <input type="text" value={department} onChange={inputChange} id="department" name="department" placeholder="Your department.." />
          </div>
        </div>
        <div className="row">

          <div className="col-75">
            <input type="text" value={salary} onChange={inputChange} id="lname" name="salary" placeholder="Your salary.." />
          </div>
        </div>


        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>





    </div>


  )
}
