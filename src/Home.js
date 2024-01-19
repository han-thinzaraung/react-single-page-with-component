import React from 'react'
import company_image from './company.jpg'

export default function Home() {
  return (
    <>
      <section className='home'>
        <div className="container-fluid bg-light ps-5 pe-5">
            <div className="row bg-light justify-content-center align-items-center" style={{ height: '100vh' }}>

                <div className="col-md-6 text-center">
                    <h2 className="text-capitalize display-2"><span className="text-dark display-4">React Learning</span></h2>
                    <h3 className="fw-light text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h3>
                </div>            
                <div className="card col-md-6 bg-light p-4">
                        <img src={company_image} alt="Company Image" className="img-fluid" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}