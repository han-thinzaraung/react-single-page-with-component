import React from 'react'
import logo from './logo.jpg'


export default function Header() {
  return (
   <>
   <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid"> 
        <a class="navbar-brand ms-5" href="#">
          <img src={logo} alt="Logo" style={{ width:40 }} className="rounded-pill"/> 
        </a>
        
        <div className="collapse navbar-collapse justify-content-end me-5" id="mynavbar">
          <ul className="navbar-nav">
            <li className="nav-item btn btn-outline-dark">
              <a className="nav-link" href=""><button className="btn btn-outline-primary" type="button">Home</button></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">  <a className="nav-link" href=""><button className="btn btn-outline-primary" type="button">About</button></a></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">  <a className="nav-link" href=""><button className="btn btn-outline-primary" type="button">Service</button></a></a>
            </li>
          </ul>
        </div>
        
       </div>
     </nav>
    </div>
  
   </>
  )
}
