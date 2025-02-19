import React from 'react'
import Navbar from "../Header/Navbar";
import Footer from '../Footer';

const FAQs = () => {
  return (
    <>
      <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>FAQs </h1>
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
                  FAQs
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}

        
      </div>
      <section className="faqs-bg section-spacing">
          <div className="container pos-rel">
            <div className="row align-items-center">
              <div className="col-lg-5 pos-rel offset-lg-2 offset-md-4 col-md-8 mb-0">
                <img
                  src="assets/images/img-faqs.png"
                  className="faqs-imgs"
                  alt
                />
                <div className="section-title text-start">
                  <span style={{color:'#1f93c6'}}>Get Your Answer Fast</span>
                  <h2 className="wow FAQKnow">
                    Everything you need to <strong>Know to work better</strong>
                  </h2>
                  <p>
                    Hiring an expert could well prove to be a shot in the arm
                    for your online business, that deserves a robust web
                    presence.
                  </p>
                </div>
              </div>
              <div className="col-lg-5 pos-rel offset-lg-0 offset-md-4 col-md-8">
                <div className="theme-accordian">
                  <div
                    className="accordion accordion-flush theme-accordian"
                    id="accordionFlushExampleSimple"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-gap-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-gap-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-gap-collapseOne"
                        >
                          First and foremost, you never want to go?
                        </button>
                      </h2>
                      <div
                        id="flush-gap-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-gap-headingOne"
                        data-bs-parent="#accordionFlushExampleSimple"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-gap-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-gap-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-gap-collapseTwo"
                        >
                          How can i customized this theme?
                        </button>
                      </h2>
                      <div
                        id="flush-gap-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-gap-headingTwo"
                        data-bs-parent="#accordionFlushExampleSimple"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-gap-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-gap-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-gap-collapseThree"
                        >
                          Can I cancel or change my order?
                        </button>
                      </h2>
                      <div
                        id="flush-gap-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-gap-headingThree"
                        data-bs-parent="#accordionFlushExampleSimple"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="flush-gap-headingFour"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-gap-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-gap-collapseFour"
                        >
                          How can I exchange an item bought online?
                        </button>
                      </h2>
                      <div
                        id="flush-gap-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-gap-headingFour"
                        data-bs-parent="#accordionFlushExampleSimple"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-abstract">&nbsp;</div>
            <div className="our-faqs-cta">
              <div className="content">
                <h3>
                  Do more of the marketing work you love. Let us shape your
                  first campaign
                </h3>
                <div className="btn-set" >
                  <a
                    href="javascript:"
                    className="btn btn-secondary"
                    data-trigger="#signup"
                    style={{backgroundColor: '#f75d15', border: '#f75d15'}}
                  >
                    <span className="outer-wrap">
                      <span data-text="Get A Free Quote">Get A Free Quote</span>
                    </span>
                  </a>
                  <a href="contact.html" className="btn btn-default"  style={{backgroundColor: '#1f93c6', border: '#1f93c6'}}>
                    <span className="outer-wrap">
                      <span data-text="Contact us ">Contact us</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
     <Footer/>
    </>
  )
}

export default FAQs
