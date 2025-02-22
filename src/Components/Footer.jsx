import React from 'react'

 const Footer = () => {
  return (
    <>
    <div className="footer-wrap">
  <div className="container">
    <div className="footer-subscribe">
      <div className="row align-items-center">
        <div className="col-lg-3 col-md-4">
          <div className="social-icons my-2">
            <ul className="list-unstyled">
              <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
              <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
              <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
              <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
              <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9 col-md-8">
          <div className="align-items-center row form-inputs">
            <div className="col-md-6 col-lg-7 text-lg-end">
              <h6 className='fs-3'>Subscribe Our Newsletter</h6>
              Best for one-man bands, web creators, and freelancers.
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="d-flex">
                <input type="text" name="subscribe" placeholder="Enter your email address" className="form-control bordered" />
                <button type="submit" className="btn btn-secondary bordered"><i className="bi bi-send" /></button>
              </div>                                
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="container">
      <div className="row no-gutters">
        <div className="col-xxl-7 col-lg-6">
          <div className="row">
            <div className="col-xxl-5 col-md-6">
              <div className="footer-widget">
                <div className="logo-footer">
                  <a href="index.html">
                    <img src="assets/images/logoAdmin.png" alt />
                  </a>
                </div>
                <div className="footer-widget-contact">
                  <ul className="list-unstyled">
                    <li>
                      <div><i className="bi bi-geo-alt"style={{color:'#f75d15'}} /></div>
                      <div>Plot no. 288/3842(Sudha's), Nandan Vihar,Patia, Bhubaneswar,Odisha-751024.</div>
                    </li>
                    <li>
                      <div><i className="bi bi-phone"style={{color:'#f75d15'}} /></div>
                      <div ><a href="tel:+1234567899"style={{color:'#f75d15'}}>(+91)  9090972227</a></div>
                    </li>
                    <li>
                      <div><i className="bi bi-envelope"style={{color:'#f75d15'}} /></div>
                      <div><a href="https://mannatstudio.com/cdn-cgi/l/email-protection#5d3538312d1d2e382f383334293829733e3230"><span className="__cf_email__" data-cfemail="432b262f3303302631262d2a3726376d202c2e"style={{color:'#f75d15'}}>info@vichaarlab.com</span></a></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-md-6 ms-auto">
              <div className="footer-widget">
                <h4 className="widget-title text-black">About Us</h4>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                </p>
                <div className="opening-hours ">
                  <i className="bi bi-clock"style={{color:'#f75d15'}} />
                  <div className="text ">
                    <h4 className='text-black'>Opening Hours</h4>
                    <div>
                      Mon - Sat 8:00 - 17:30, <br />
                      Sunday - CLOSED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-lg-6 mr-top-footer">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="footer-widget">
                <h4 className="widget-title text-dark">Contact</h4>
                <p className="footer-text">
                Plot no. 288/3842(Sudha's), Nandan Vihar,Patia, Bhubaneswar,Odisha-751024.
                </p>
               
                {/* <ul className="list-unstyled icons-listing mb-0 widget-listing"  >
                  <li><a href="javascript:">Prop Vichaar CRM</a></li>
                  <li><a href="javascript:">Prop Vichaar BMS</a></li>
                  <li><a href="javascript:">Prop Vichaar  Enterprize</a></li>
                  <li><a href="javascript:">Prop Vichaar 360</a></li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer-widget">
                <h4 className="widget-title text-dark">Phone Number</h4>
                <div ><a href="tel:+1234567899"style={{color:'#f75d15'}}>(+91)  9090972227</a></div>
                {/* <ul className="list-unstyled icons-listing mb-0 widget-listing">
                  <li><a href="javascript:">Success Story</a></li>
                  <li><a href="javascript:">FAQs</a></li>
                  <li><a href="javascript:">Testimonials</a></li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="footer-widget">
                <h4 className="widget-title text-dark">Email</h4>
                <div><a href="https://mannatstudio.com/cdn-cgi/l/email-protection#5d3538312d1d2e382f383334293829733e3230"><span className="__cf_email__" data-cfemail="432b262f3303302631262d2a3726376d202c2e"style={{color:'#f75d15'}}>info@vichaarlab.com</span></a></div>
                {/* <ul className="list-unstyled icons-listing mb-0 widget-listing">
                  <li><a href="javascript:">Technology</a></li>
                  <li><a href="javascript:">Integration</a></li>
                  <li><a href="javascript:">Industry</a></li>
                  <li><a href="javascript:">Maintenance</a></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tiny-footer">                    
        <div className="row align-items-center">
          <div className="col-md-6 mb-0">
            Copyright © <span id="yearText" /> <strong>2025 Vichaarlab</strong> .
          </div>
          <div className="col-md-6">
            <div className="tiny-footer-links">
              <ul className="list-unstyled list-inline">
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>                            
          </div>
        </div>
      </div>
    </div>            
  </footer>        
</div>

    </>

  )
}
export default Footer