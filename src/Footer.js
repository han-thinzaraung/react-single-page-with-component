import React from 'react'

export default function Footer() {
  return (
    <>
     {/* Footer Section */}
        <footer className="bg-secondary">
          <div className="container-fluid">
              <div className="row">
                  <div className="col text-center">
                      <h3 className="text-white fw-light p-2 text-uppercase"> React Website</h3>
                      <div className="py-2">
                          <a href="#"><i className="fab fa-facebook text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-youtube text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-twitter  text-light mx-3"></i></a>
                          <a href="#"><i className="fab fa-google-plus text-light mx-3"></i></a>
                      </div>
                      <p className="text-light">&copy;copyright @GIC Co.,ltd</p>
                  </div>
              </div>
          </div>
        </footer>
    </>
  )
}