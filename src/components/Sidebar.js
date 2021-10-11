import React from 'react'
import '../App.css';



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
export default function Sidebar() {
    return (
        <div>
            <div id="mySidenav" class="sidenav">
  <a href="" class="closebtn" onClick={closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>



<span  style={{fontSize:"30px",cursor:"pointer"}}  onClick={openNav}>&#9776;</span>
        </div>
    )
}
