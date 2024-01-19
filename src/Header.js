import React from 'react';
import logo from './logo.jpg';

export default function Header() {
  return (
    <>
      <section>
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <div className="container-fluid">
                    
                      <a className="navbar-brand ms-5" href="#">
                          <img src={logo} alt="Logo" style={{ width: 40 }} className="rounded-pill" />
                      </a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse justify-content-end me-5" id="nav" >
                          <ul className="navbar-nav ms-4" >
                            <li className="nav-item"><a href="#home" className="nav-link text-light text-uppercase px-3 fw-bold">Home</a></li>
                            <li className="nav-item"><a href="#about" className="nav-link text-light text-uppercase px-3 fw-bold">About</a></li>
                            <li className="nav-item"><a href="#services" className="nav-link text-light text-uppercase px-3 fw-bold">Service</a></li>
                          </ul>
                      </div>

                  </div>
            </nav>
        </div>
      </section>
    </>
  );
}