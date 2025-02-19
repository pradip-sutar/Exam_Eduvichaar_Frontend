import React from 'react'
import Navbar from "../Header/Navbar";
import Pricingplan from '../Pricingplan'
import Realuserreviews from '../Realuserreviews'
import Footer from '../Footer';
export const Testimonials = () => {
  return (
    <>
    <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>Testimonials </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">
                    <i className="bi-house" />
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" style={{ textDecoration: "none" }}>
                    Pages
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a href="#" style={{ textDecoration: "none" }}>
                    Testimonials 
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
      </div>
     <Pricingplan/>
     <Realuserreviews/>
     <Footer/>
    </>
  )
}
