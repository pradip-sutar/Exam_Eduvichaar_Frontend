import React from 'react'
import Navbar from "../Header/Navbar";
import Pricingplan from "../Pricingplan";
import Realuserreviews from "../Realuserreviews";
import Footer from "../Footer";
import { Integration } from '../Integration';
const Propvichaar = () => {
  return (
    <div>
      <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>PropVichaar </h1>
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
                    PropVichaar 
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
      </div>

      {/* Process Management */}
      <main id="body-content" class="bg-white">
        <section className="section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-xl-7 col-lg-9 col-md-12 mx-auto text-center">
                <div className="section-title text-center">
                  <span style={{ color: "#fc7952" }}>Process management</span>
                  <h2 className="wow">
                    Solutions for your <strong>Most Advanced workflows</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-lg-last">
                <div
                  className="nav nav-pills tabbing-content"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                  style={{ maxHeight: "500px", overflowY: "scroll" }}
                >
                  <a
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    href="javascript:"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <h6>
                      <i className="srn-check-circle" /> Add Infinite Listing
                      Option{" "}
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In urna lectus, mattis non accumsan in, tempor dictum
                      neque.
                    </p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    href="javascript:"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <h6>
                      <i className="srn-check-circle" /> Get instant aprooval or
                      decline facilities
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In urna lectus, mattis non accumsan in, tempor dictum
                      neque.
                    </p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    href="javascript:"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <h6>
                      <i className="srn-check-circle" /> Managed By Admin which
                      listing will show up
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In urna lectus, mattis non accumsan in, tempor dictum
                      neque.
                    </p>
                  </a>
                  <a
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    href="javascript:"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <h6>
                      <i className="srn-check-circle" /> Managed By Admin which
                      listing will show up
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      In urna lectus, mattis non accumsan in, tempor dictum
                      neque.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="tab-content order-md-first"
                  id="v-pills-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <img src="assets/images/tabbing_img.png" alt />
                    <p className="txt-dark text-center">
                      Data shown from{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2020
                      </strong>{" "}
                      to{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2021
                      </strong>{" "}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <img src="assets/images/tabbing_img.png" alt />
                    <p className="txt-dark text-center">
                      Data shown from{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2020
                      </strong>{" "}
                      to{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2021
                      </strong>{" "}
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <img src="assets/images/tabbing_img.png" alt />
                    <p className="txt-dark text-center">
                      Data shown from{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2020
                      </strong>{" "}
                      to{" "}
                      <strong
                        className="txt-secondary"
                        style={{ color: "#fc7952" }}
                      >
                        March 2021
                      </strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Process Management */}
        {/* Services Section */}
        {/* <section className="our-service-pattern section-padding pt-0">
          <div className="container">
            <div className="row pos-rel">
              <div className="col-xl-6 col-lg-10 mx-auto">
                <div className="section-title text-center">
                  <span style={{ color: "#1d92c6" }}>What We Do</span>
                  <h2 className="wow CreateDig">
                    Let’s Check our scientific{" "}
                    <strong>Digital Marketing solutions</strong>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    urna lectus, mattis non accumsan in, tempor dictum neque. In
                    hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
                    consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-digital-analytics-monitor" />
                  </div>
                  <div className="text">
                    <h2>Digital Analytics</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-digital-marketing" />
                  </div>
                  <div className="text">
                    <h2>Digital Marketing</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-email-maketing" />
                  </div>
                  <div className="text">
                    <h2>Email Marketing</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-marketing-automation" />
                  </div>
                  <div className="text">
                    <h2>Marketing Automation</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-social-media-management" />
                  </div>
                  <div className="text">
                    <h2>Social Media Management</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-0">
                <div className="icon-style-top-icon">
                  <div className="icon">
                    <i className="srn-icon-keyword-research-second" />
                  </div>
                  <div className="text">
                    <h2>Keyword Research</h2>
                    <p>
                      We use the latest technologies it voluptatem accusantium
                      do loremque laudantium.
                    </p>
                  </div>
                  <div className="arrow-read-more">
                    <a href="service-single.html">
                      read more <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Integration/>
        {/* Services Section */}
        <Pricingplan />
        {/* Get Your Answers */}
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
        {/* Get Your Answers */}
        <Realuserreviews/>
        <Footer/>
      </main>
    </div>
  )
}

export default Propvichaar
