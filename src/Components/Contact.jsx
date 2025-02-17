import React from 'react'
import Navbar from "./Header/Navbar";
import Footer from './Footer';


const Contact = () => {
  return (
    <>
       <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>Contact Us </h1>
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
                    Contact Us 
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
      </div>
{/* Page Content Start */}
<main id="body-content" className="bg-white">
  {/* Contact Form */}
  <section className="section-spacing pt-0">            
    <div className="container">
      <div className="row">
        <div className="col-xl-5 col-lg-9 col-md-12 mx-auto text-center">
          <div className="section-title text-center">
            <span style={{color:'#1d92c6'}}>Contact us</span>
            <h2 className="wow FAQKnow">How can we help you? <strong>Get In Touch!</strong></h2>
            <p>Loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-9 col-md-12 mx-auto">
          <div id="sucessmessage"> </div>
          <form action="https://mannatstudio.com/html/serenite/contact_process.php" method="post" id="contactusForm" noValidate="novalidate">
            <div className="row g-3">
              <div className="col-md-6 mb-0">
                <input type="text" data-rule-required="true" data-msg-required="Please enter your First Name" className="form-control" name="First_Name" id="First_Name" placeholder="First Name*" />
              </div>
              <div className="col-md-6 mb-0">
                <input type="text" data-rule-required="true" data-msg-required="Please enter your Last Name" className="form-control" name="Last_Name" id="Last_Name" placeholder="Last Name*" />
              </div>
              <div className="col-md-6 mb-0">
                <input type="email" data-rule-required="true" data-msg-required="Please enter your Email" className="form-control" id="Email_Address" name="Email_Address" placeholder="Email Address*" required />
              </div>
              <div className="col-md-6 mb-0">
                <input type="text" data-rule-required="true" data-msg-required="Please enter your Number" className="form-control" id="Phone_Number" name="Phone_Number" placeholder="Phone Number*" />
              </div>
              <div className="col-md-12 mb-0">
                <select className="theme-combo form-control " name="Combo_Box">
                  <option value>I interested in ...</option>
                  <option value>Colibri Creative Project</option>
                  <option value>Colibri Project</option>
                  <option value>Happy Moments Photoset</option>
                  <option value>Luxury Car Website</option>
                  <option value>Funny Dog</option>
                  <option value>Creative Branding</option>
                </select>
              </div>
              <div className="col-md-12 mb-0">
                <textarea name="Your_Message" id="Your_Message" rows={10} data-rule-required="true" data-msg-required="Please enter your Message" className="form-control" placeholder="Your Message" defaultValue={""} />
              </div>
              <div className="col-md-12 d-grid gap-2">
                <button type="submit" className="btn btn-secondary btn-block"><span className="outer-wrap"><span data-text="Send a Message">Send a Message</span></span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Form */}
  {/* Map Section */}
  <section>
    <div className="container contact-details-wrap">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="contact-details wow fadeInUp" data-wow-delay="0.1s">
            <div className="icon-style-border-bottom">
              <div className="icon">
                <i className="bi bi-geo-alt" />
              </div>                            
              <div className="text">
                <h6>Our Location</h6>
                <p>Plot no. 288/3842(Sudha's), Nandan Vihar,Patia, Bhubaneswar,Odisha-751024</p>
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="contact-details wow fadeInUp" data-wow-delay="0.2s">
            <div className="icon-style-border-bottom">
              <div className="icon">
                <i className="bi bi-phone" />
              </div>                            
              <div className="text">
                <h6>Call Us</h6>
                <p>
                  (+91) 9090972227
                </p>
              </div>                            
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mx-auto">
          <div className="contact-details mt-4 mt-lg-0 mt-0 mt-sm-0 mt-md-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="icon-style-border-bottom">
              <div className="icon">
                <i className="bi bi-envelope" />
              </div>                            
              <div className="text">
                <h6>Email Us</h6>
                <p>
                  <a href="https://mannatstudio.com/cdn-cgi/l/email-protection#d7bfb2bba797a4b2a5b2b9bea3b2f9b4b8ba"><span className="__cf_email__" data-cfemail="5139343d2111223423343f3825347f323e3c">info@vichaarlab.com</span></a>
                 
                </p>
              </div>                            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="map-frame">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
    </div>
  </section>
  <Footer/>
  {/* Map Section */}
</main>
{/* Page Content End */}

    </>
  )
}

export default Contact
