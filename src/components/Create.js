import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import './createStyle.css'



export default function Create() {
  let history = useHistory()

  const [user, setUser] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  })
  const { name, email, department, salary } = user
  const inputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }



  const submitForm = async (e) => {
    e.preventDefault();
   
    const url = "http://localhost:3003/employees"
    await axios.post(url, user)
    history.push("/list");
  
 }
  return (
    <div className="container">
      <h1>Enter employees details...</h1>
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
