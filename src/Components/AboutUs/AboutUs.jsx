import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import Navbar from '../Header/Navbar'
import Whatweoffer from '../Whatweoffer'
import Whychooseus from '../Whychooseus'
import Footer from '../Footer'
const AboutUs = () => {


    const Counter = ({ target, speed }) => {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          let start = 0;
          const end = target;
          const duration = speed;
          const stepTime = Math.abs(Math.floor(duration / end));
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
      
          return () => clearInterval(timer);
        }, [target, speed]);
      
        return <span>{count}</span>;
      };

    const [currentIndex, setCurrentIndex] = useState(1);
     const slides = [
        "assets/images/portfolio/slider_single_1.jpg",
        "assets/images/portfolio/slider_single_2.jpg",
        "assets/images/portfolio/slider_single_3.jpg",
      ];
      // Handle next slide
     
      const [isTransitioning, setIsTransitioning] = useState(true);
    
      useEffect(() => {
        if (currentIndex === slides.length + 1) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(1);
          }, 200); 
        }
    
        if (currentIndex === 0) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(slides.length);
          }, 200);
        }
      }, [currentIndex, slides.length]);
    
      const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      };
    
      const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
      };

      
    
    
  return (
    <>
      <div className="bg-primary header-bg">
        <Navbar />

        <b className="screen-overlay" />
        {/*  Signup Form Start */}
        <div>
          {/* <article className="mobile-offcanvas offcanvas-right" id="signup">
    <button className="btn-close"> <i className="bi bi-x" /> </button>
    <div className="popup-wrapper" data-lenis-prevent>
      <div className="content">                
        <h3>Create an account</h3>
        <div className="social-login-btn">
          <a href="javascript:" className="gm">
            <i className="bi bi-google" /> With Google
          </a>
          <a href="javascript:" className="fb">
            <i className="bi bi-facebook" /> With Facebook
          </a>
        </div>
        <div className="or-text">
          <span>Or Signup with your email</span>
        </div>
      </div>
      <div className="form-wrap">                
        <div className>
          <div className="mb-4">
            <input type="text" className="form-control bordered bottom-only" placeholder="Mobile Number or Email" />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control bordered bottom-only" placeholder="Full Name" />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control bordered bottom-only" placeholder="Username" />
          </div>
          <div className="mb-4">
            <input type="text" className="form-control bordered bottom-only" placeholder="Password" />
          </div>
          <div className="mb-4 info-form">
            <small>By signing up, you agree to our <a href="javscript:">Terms</a> , <a href="javscript:">Data Policy</a> and <a href="javscript:">Cookies Policy</a>.</small>
          </div>
          <div className="d-grid">
            <button type="button" className="btn btn-outline-primary btn-sm"><span className="outer-wrap"><span data-text="Singup">Singup</span></span></button>
          </div>
        </div>
      </div>
    </div>
  </article> */}
          {/*  Signup Form Start */}
        </div>
        {/*  Page Breadcrumbs Start */}
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>About Us</h1>
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
                    About Us
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
      </div>

      <main id="body-content">
        {/* About Us */}
        <Whatweoffer />
        <div>
          {/* <section className="section-spacing pt-0">            
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-0">
          <div className="img-gradient">
            <img src="assets/images/about_us_img.jpg" alt />
          </div>
          <div className="years-started wow fadeInUp">
            <div className="years">
              10<sup>+</sup>
              <span>Years</span>
            </div>
            <div className="content fun-fact">
              <h1>                                    
                <span className="timer" data-to={2010} data-speed={2000}>2010</span>
                <span>Making Business Since</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div className="section-title text-start">
            <span>What We Offer</span>
            <h2 className="wow">Discover effortless <strong>Business and Marketing in one</strong></h2>
            <p>Grursus mal suada faci lisis Lorem ipsum dolarorit ametion consectetur elit. The Vesti at bulum nec odio aea the dumm ipsumm ipsum dolocons is suada a and fadolorit to the consectetur elit. Grursus mal suada faci lisis Lorem dolarorit the ametion consectetur elit. 
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-md-8 col-sm-7 mb-0">                                
              Progress Bar Start
              <div className="progress-wrap">
                <h6>Project delivered on time</h6>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" data-width={90}>
                    <span>90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-wrap">
                <h6>Availability</h6>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" data-width={70}>
                    <span>70%</span>
                  </div>
                </div>
              </div>
              End Progressbar
            </div>                           
            <div className="col-md-4 col-sm-5">
              <ul className="list-unstyled icons-listing theme-dark mb-0 check">
                <li>Intregrations</li>
                <li>Business Strategy</li>
                <li>Business Setup</li>
                <li>Easy Documentation</li>
              </ul>
            </div>
          </div>
          <p className="mt-4">Let’s Come Up With a <strong>Start Free Trial 30-Day Money Back Guarantee</strong> For New Purchases​. </p>
          <a href="contact.html" className="btn btn-default"><span className="outer-wrap"><span data-text="Read more">Read more</span></span></a>
        </div>
      </div>               
    </div>
  </section> */}
        </div>
        <section className="section-spacing p-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                <div className="portfolio-slider-wrap-outer">
                  {/* <div className="square-top">
      <img src="assets/images/square_large.svg" alt />
    </div> */}
                  <div className="portfolio-slider-wrap mt-0">
                    <div
                      className="owl-carousel owl-theme owl-loaded owl-drag"
                      id="portfolio-slider-single"
                    >
                      <div className="owl-stage-outer">
                        <div>
                          {/* <div className="owl-stage" style={{transform: 'translate3d(-1674px, 0px, 0px)', transition: '1s', width: 5861}}>
                <div className="owl-item cloned" style={{width: '837.188px'}}>
                    <div className="item">
                <img src="assets/images/portfolio/slider_single_1.jpg" alt />
              </div>
              </div>
              <div className="owl-item cloned" style={{width: '837.188px'}}> */}
                          {/* <div className="item">
                <img src="assets/images/portfolio/slider_single_3.jpg" alt />
              </div></div><div className="owl-item active" style={{width: '837.188px'}}><div className="item">
                <img src="assets/images/portfolio/slider_single_2.jpg" alt />
              </div></div><div className="owl-item" style={{width: '837.188px'}}><div className="item">
                <img src="assets/images/portfolio/slider_single_1.jpg" alt />
              </div></div><div className="owl-item" style={{width: '837.188px'}}><div className="item">
                <img src="assets/images/portfolio/slider_single_3.jpg" alt />
              </div></div><div className="owl-item cloned" style={{width: '837.188px'}}><div className="item">
                <img src="assets/images/portfolio/slider_single_2.jpg" alt />
              </div></div><div className="owl-item cloned" style={{width: '837.188px'}}><div className="item">
                <img src="assets/images/portfolio/slider_single_1.jpg" alt />
              </div> */}

                          {/* </div></div> */}
                        </div>
                        <div
                          className="owl-stage"
                          style={{
                            position: "relative",
                            width: "837.188px",
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              transform: `translateX(-${currentIndex * 100}%)`,
                              transition: isTransitioning
                                ? "0.5s ease-in-out"
                                : "none",
                              width: "calc(100% * 1)",
                            }}
                            onTransitionEnd={() => setIsTransitioning(true)}
                          >
                            <img
                              src={slides[slides.length - 1]}
                              alt="Last Clone"
                              style={{ width: "100%", flexShrink: 0 }}
                            />

                            {slides.map((src, index) => (
                              <img
                                key={index}
                                src={src}
                                alt={`Slide ${index}`}
                                style={{ width: "100%", flexShrink: 0 }}
                              />
                            ))}

                            <img
                              src={slides[0]}
                              alt="First Clone"
                              style={{ width: "100%", flexShrink: 0 }}
                            />
                          </div>
                          <div className="owl-nav">
                            <button
                              type="button"
                              role="presentation"
                              className="owl-prev"
                              onClick={prevSlide}
                              style={{
                                position: "absolute",
                                left: 0,
                                top: "50%",
                                backgroundColor: "#f75d15",
                              }}
                            >
                              <i className="srn-arrow-left" />
                            </button>
                            <button
                              type="button"
                              role="presentation"
                              className="owl-next"
                              onClick={nextSlide}
                              style={{
                                position: "absolute",
                                right: 0,
                                top: "50%",
                                backgroundColor: "#f75d15",
                              }}
                            >
                              <i className="srn-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Navigation Buttons */}

                      {/* <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev" onClick={prevSlide}><i className="srn-arrow-left" /></button><button type="button" role="presentation" className="owl-next" onClick={nextSlide}><i className="srn-arrow-right" /></button></div> */}
                      <div className="owl-dots disabled" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-spacing pattern-white-bg section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto">
                <div className="about-video-intro">
                  <div className="section-title text-center light">
                    <span>Achievement</span>
                    <h2 className="wow CreateDig">
                      Products successfully launced{" "}
                      <strong>
                        in the <u>previous 12 months</u>
                      </strong>
                    </h2>
                  </div>
                  <div className="play-btn wow fadeInUp">
                    <a
                      className="popup-video"
                      href="https://player.vimeo.com/video/7449107"
                      target="_blank"
                      role="button"
                    >
                      <i className="srn-play" />
                    </a>
                    Play Intro Video
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-xl-8 col-sm-12 mx-auto intro-stats">
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div
                      className="icon-statistics light wow pulse"
                      data-wow-delay="0.1s"
                    >
                      <i
                        className="bi bi-arrow-up-circle"
                        style={{ color: "#f75d15" }}
                      />
                      <div className="text-space fun-fact fs-4">
                        {/* <h3><span className="timer" data-to={93} data-speed={2000}>93</span>%</h3> */}
                        <h3>
                          <Counter target={93} speed={2000} />%
                        </h3>
                        <div>Increase In Monthly</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div
                      className="icon-statistics light wow pulse"
                      data-wow-delay="0.2s"
                    >
                      <i
                        className="bi bi-arrow-up-circle"
                        style={{ color: "#f75d15" }}
                      />
                      <div className="text-space fun-fact fs-4">
                        <h3>
                          <Counter target={50} speed={2000} />K
                        </h3>
                        <div>Revenue generated</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-6 mx-auto">
                    <div
                      className="icon-statistics light wow pulse"
                      data-wow-delay="0.3s"
                    >
                      <i
                        className="bi bi-arrow-up-circle"
                        style={{ color: "#f75d15" }}
                      />
                      <div className="text-space fun-fact fs-4">
                        <h3>
                          <Counter target={57} speed={2000} />K
                        </h3>
                        <div>Total Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Whychooseus />

        {/* Our Team Card */}
        <section className="section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-xl-6 mx-auto text-center">
                <div className="section-title text-center">
                  <span style={{ color: "#1d92c6" }}>Team We Have</span>
                  <h2 className="wow CreatePrice">
                    Our Buddy's Always Ready{" "}
                    <strong>To Solve Your Issues</strong>
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
            <div className="team-wrap-outer">
              <div className="row">
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_1.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Richard Simpson</a>
                      </h6>
                      <div className="post">VP of Engineering</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_2.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Louis Crawford</a>
                      </h6>
                      <div className="post">Human Resources</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_3.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Peter White</a>
                      </h6>
                      <div className="post">Employee Resources</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_4.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Shannon O'Connor</a>
                      </h6>
                      <div className="post">Head of Product</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_5.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Kevin Qwestlove</a>
                      </h6>
                      <div className="post">Chief Design Officer</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 col-lg-6">
                  <div className="team-wrap">
                    <div className="img">
                      <a href="team-single.html">
                        <img src="assets/images/team/team_img_6.jpg" alt />
                      </a>
                    </div>
                    <div className="content">
                      <h6>
                        <a href="team-single.html">Sarah Albert</a>
                      </h6>
                      <div className="post">Human Resources</div>
                      <ul className="list-unstyled social-icons">
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:">
                            <i className="bi bi-youtube" />
                          </a>
                        </li>
                      </ul>
                      <div className="arrow-read-more">
                        <a href="#">
                          read more <i className="srn-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Team Card */}
        {/* About Us */}

        {/* Call to action */}
        <section className="section-spacing">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6 mb-0">
                <div className="section-title text-start mb-0">
                  <span style={{ color: "#1f93c6" }}>Call to action</span>
                  <h2 className="wow">
                    Ready to get started? Try{" "}
                    <strong>Different work environment</strong>
                  </h2>
                  <p>
                    In our workspaces, you will find everything you need to
                    carry out your activity but not only. Ned ut perspiciatis
                    unde omnis iste natus error sit voluptatem.
                  </p>
                  <div className="arrow-read-more">
                    <a href="#">
                      Contact Us Now <i className="srn-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-5 offset-lg-1 mt-5 mt-lg-0">
                <div className="border-style-accordian secondary">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          First and foremost, you never want to go?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How can i customized this theme?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          Ned ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque Arya.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          Can I cancel or change my order?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
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
          </div>
        </section>
        {/* Call to action */}
        {/* Real User Reviews */}
        {/* <section className="section-spacing bg-light-blue">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 mb-0 p-0">
          <div className="faqs-side-img">
            <img src="assets/images/testimonials_img.jpg" className="d-lg-none d-block" alt />
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="testimonial-single-wrap wow slideInUp">
            <div className="owl-carousel owl-theme" id="testimonials-slider-leftimg">
              <div className="item">
                <div className="testimonial-single">
                  <h6>My business is growing faster 
                    and I’m very happy with that</h6>
                  <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. </p>
                  <div className="testimonial-box">
                    <div className="thumb-img">
                      <img src="assets/images/thumb_1.jpg" alt />
                    </div>
                    <div className="content">
                      <h6 className="name">Rider Smith</h6>
                      <div className="post">Marketing Envato Pty Ltd.</div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-single">
                  <h6>My business is growing faster 
                    and I’m very happy with that</h6>
                  <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. </p>
                  <div className="testimonial-box">
                    <div className="thumb-img">
                      <img src="assets/images/thumb_2.jpg" alt />
                    </div>
                    <div className="content">
                      <h6 className="name">Kevin Martin</h6>
                      <div className="post">Marketing Consultant</div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-single">
                  <h6>My business is growing faster 
                    and I’m very happy with that</h6>
                  <p>Thank you for your excellent work. No one could hear us as well as you and make our wishes come true so beautifully and beautifully. </p>
                  <div className="testimonial-box">
                    <div className="thumb-img">
                      <img src="assets/images/thumb_3.jpg" alt />
                    </div>
                    <div className="content">
                      <h6 className="name">Sarah Albert</h6>
                      <div className="post">Senior Advisor</div>
                      <div className="rating">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>                
    </div>
  </section> */}
        <section className="section-spacing bg-light-blue">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 mb-0 p-0">
                <div className="faqs-side-img">
                  <img
                    src="assets/images/testimonials_img.jpg"
                    className="d-lg-none d-block"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-6 p-0">
                <div
                  className="testimonial-single-wrap wow slideInUp"
                  style={{ visibility: "visible", animationName: "slideInUp" }}
                >
                  <div
                    className="owl-carousel owl-theme owl-loaded owl-drag"
                    id="testimonials-slider-leftimg"
                  >
                    <div class="item">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          transition: "all",
                          width: 5528,
                          transform: "translate3d(-1579px, 0px, 0px)",
                        }}
                      >
                        <div
                          className="owl-item cloned"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_2.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Kevin Martin</h6>
                                  <div className="post">
                                    Marketing Consultant
                                  </div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_3.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Sarah Albert</h6>
                                  <div className="post">Senior Advisor</div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item active center"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_1.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Rider Smith</h6>
                                  <div className="post">
                                    Marketing Envato Pty Ltd.
                                  </div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_2.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Kevin Martin</h6>
                                  <div className="post">
                                    Marketing Consultant
                                  </div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_3.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Sarah Albert</h6>
                                  <div className="post">Senior Advisor</div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_1.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Rider Smith</h6>
                                  <div className="post">
                                    Marketing Envato Pty Ltd.
                                  </div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="owl-item cloned"
                          style={{ width: "759.6px", marginRight: 30 }}
                        >
                          <div className="item">
                            <div className="testimonial-single">
                              <h6>
                                My business is growing faster and I’m very happy
                                with that
                              </h6>
                              <p>
                                Thank you for your excellent work. No one could
                                hear us as well as you and make our wishes come
                                true so beautifully and beautifully.{" "}
                              </p>
                              <div className="testimonial-box">
                                <div className="thumb-img">
                                  <img src="assets/images/thumb_2.jpg" alt />
                                </div>
                                <div className="content">
                                  <h6 className="name">Kevin Martin</h6>
                                  <div className="post">
                                    Marketing Consultant
                                  </div>
                                  <div className="rating">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="owl-nav">
                      <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                      >
                        <i className="srn-arrow-left" />
                      </button>
                      <button
                        type="button"
                        role="presentation"
                        className="owl-next"
                      >
                        <i className="srn-arrow-right" />
                      </button>
                    </div>
                    <div className="owl-dots disabled" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real User Reviews */}
        {/* Our Partners */}
        <section className="section-spacing">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-6 mx-auto text-center">
                <div className="section-title text-center">
                  <span style={{color:'#1d92c6'}}>Changing things with</span>
                  <h2 className="wow ">
                    They are partners inspire{" "}
                    <strong>us to drive ongoing results</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client1.png" alt />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client2.png" alt />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client3.png" alt />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client4.png" alt />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client5.png" alt />
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-sm-6 col-6 mb-0">
                <div className="img-partner">
                  <img src="assets/images/partner/img-client6.png" alt />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-5 col-md-9 mx-auto">
                <div className="partner-text arrow-read-more fun-fact">
                  <p>
                    Over{" "}
                    <span>
                      <small className="timer">
                        <Counter target={75000} speed={20000} />
                      </small>
                      + Clients
                    </span>{" "}
                    all over the world
                  </p>
                  <a
                    href="#"
                    className="btn-link-secondary"
                    style={{ color: "#b0b0b0" }}
                  >
                    Book Services Now{" "}
                    <i
                      className="srn-arrow-right"
                      style={{ textDecoration: "none" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Partners */}
      </main>
      <Footer />
    </>
  );
}

export default AboutUs