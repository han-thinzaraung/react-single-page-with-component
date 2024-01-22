import React from 'react'
import person from './person.jpg'

export default function Service() {
  return (
          <>
           {/* Service Section */}
            <section className='service' id = 'service'>
                <div className="container-fluid bg-light">
                    <div className="row m-3 p-3">
                      <div className="col text-center">
                        <h1 className="text-dark display-4 fw-bold">Services</h1>
                      </div>
                    </div>
                      
                    <div className="row" >

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card text-center" style={{ width: '16rem' }}>
                            <img className="card-img-top img-fluid rounded-circle p-3" src={person} alt="Card image"/>
                            <div className="card-body">
                              <h4 className="card-title">Service 1</h4>
                              <p className="card-text">Some example text.</p>
                              <a href="#" class="btn btn-outline-primary">See Detail</a>
                            </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card text-center" style={{ width: '16rem' }}>
                              <img className="card-img-top img-fluid rounded-circle p-3" src={person} alt="Card image"/>
                              <div className="card-body">
                                <h4 className="card-title">Service 2</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="#" class="btn btn-outline-primary">See Detail</a>
                              </div>
                          </div>         
                      </div>

                      <div className="col-lg-4 col-sm-10 mb-4 d-flex justify-content-center">
                        <div className="card text-center" style={{ width: '16rem' }}>
                              <img className="card-img-top img-fluid rounded-circle p-3" src={person} alt="Card image"/>
                              <div className="card-body p-3">
                                <h4 className="card-title">Service 3</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="#" class="btn btn-outline-primary">See Detail</a>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
          
          </>
  )
}