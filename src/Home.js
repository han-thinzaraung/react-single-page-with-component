import React from 'react'
import company_image from './react.png'

export default function Home() {
  return ( 
    <>
     {/* Home Section */}
      <section className='home'>
        <div className="container-fluid bg-light p-5">
            <div className="row bg-light justify-content-center align-items-center" style={{ height: '100vh' }}>

                <div className="col-md-6 text-center">
                    <h2 className="text-capitalize display-2"><span className="text-dark display-4">React Learning</span></h2>
                    <h3 className="fw-light text-dark">React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</h3>
                </div>            
                <div className="col-md-6 bg-light p-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '25rem' }}>
                        <img src={company_image} alt="Company Image" className="img-fluid" />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}