import React from 'react'
import {Link,Switch,Route} from "react-router-dom"
import Create from './Create'
import Table from './Table'
import Home from './Home'
import Update from './Update'
import UserView from './UserView'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Crud App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/list">List</Link>
        </li>
        {/* <li className="nav-item">
          <Link class="nav-link" to="#">Link</Link>
        </li> */}
       
      </ul>
      
    </div>
  </div>
</nav>
<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Create} />
    <Route exact path="/list" component={Table} />
    <Route exact path="/update/:id" component={Update} />
    <Route exact path="/view/:id" component={UserView} />
</Switch>
        </div>
    )
}
