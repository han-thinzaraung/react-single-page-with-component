import React from 'react'

export default function About() {
  return (
   <>
   {/* About Section */}
    <section className='about'>
        <div className="container-fluid bg-light">
          
            <div className="row">
                <div className="col text-center p-5">
                    <h1 className="text-dark display-4 fw-bold">About React</h1>
                    <p classNames="text-secondary">Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</p>
                </div>
            </div>
          
            <div className="row text-center">
              <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                <i className="fas fa-edit fa-3x mb-3"></i>
                <h3 className="text-secondary">Design</h3>
                <p className="text-muted mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>
              <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                <i className="fas fa-laptop fa-3x mb-3"></i>
                <h3 className="text-secondary">Technology</h3>
                <p className="text-muted mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>       
                <div className="col-lg-4 col-sm-10 mx-auto mb-4">
                <i className="fa-solid fa-lightbulb fa-3x mb-3"></i>
                <h3 className="text-secondary">Innovation</h3>
                <p className="text-muted mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <a href="#" className="btn btn-outline-primary">Learn More</a>
              </div>
          </div>
        </div>
      </section>

   </>
  )
}