import React from 'react'
import company_image from './company.jpg'

export default function Home() {
  return (
    <>
    <section className="mb-5 bg-secondary">
    <div className="container">
      <div className="row mt-5">
        {/* Left Side - Text */}
        <div className="col-md-6">
        <h2>Left Side - Text</h2>
          <p className='text-dark'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
     

    {/* Right Side - Image */}
    <div className="col-md-6">
          <img src={company_image} alt="Sample Image" className="img-fluid" style={{ width:500 }} 
          />
        </div>
      </div>
    </div>

    </section>
    </>
  )
}
