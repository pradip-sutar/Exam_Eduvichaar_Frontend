import React from 'react';

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="container">
        <div className="footer-subscribe">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="social-icons mb-2">
                <ul className="list-unstyled">
                  <li><a href="javascript:"><i className="bi bi-facebook" /></a></li>
                  <li><a href="javascript:"><i className="bi bi-twitter-x" /></a></li>
                  <li><a href="javascript:"><i className="bi bi-instagram" /></a></li>
                  <li><a href="javascript:"><i className="bi bi-linkedin" /></a></li>
                  <li><a href="javascript:"><i className="bi bi-youtube" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="align-items-center row">
                <div className="col-md-6 col-lg-7 col-12 text-lg-end text-center mb-2">
                  <h6 className="fs-3">Subscribe Our Newsletter</h6>
                  Best for one-man bands, web creators, and freelancers.
                </div>
                <div className="col-md-6 col-lg-5 col-12">
                  <div className="d-flex flex-column flex-md-row">
                    <input
                      type="text"
                      name="subscribe"
                      placeholder="Enter your email address"
                      className="form-control bordered mb-2 mb-md-0"
                    />
                    <button type="submit" className="btn btn-secondary bordered ms-0 ms-md-2">
                      <i className="bi bi-send" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-xxl-7 col-lg-6 col-12">
                <div className="row">
                  <div className="col-xxl-5 col-md-6 col-12">
                    <div className="footer-widget p-2">
                      <div className="logo-footer">
                        <a href="index.html">
                          <img src="assets/images/logoAdmin.png" alt="Logo" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-5 col-md-6 col-12">
                    <div className="footer-widget p-2">
                      <h4 className="widget-title text-black">About Us</h4>
                      <p className="footer-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-lg-6 col-12">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="footer-widget p-2">
                      <h4 className="widget-title text-dark">Address</h4>
                      <p className="footer-text">
                        Plot no. 288/3842(Sudha's), Nandan Vihar, Patia, Bhubaneswar, Odisha-751024.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="footer-widget p-2">
                      <h4 className="widget-title text-dark">Get in Touch</h4>
                      <div>
                        <a href="tel:+919090972227" style={{ color: "#f75d15" }}>
                          (+91) 9090972227
                        </a>
                      </div>
                      <div>
                        <a href="mailto:info@vichaarlab.com" style={{ color: "#f75d15" }}>
                          info@vichaarlab.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tiny-footer p-1">
              <div className="row align-items-center">
                <div className="col-md-6 col-12 mb-0 text-center text-md-start">
                  Copyright © <span id="yearText">2025</span> <strong>Vichaarlab</strong>.
                </div>
                <div className="col-md-6 col-12">
                  <div className="tiny-footer-links">
                    <ul className="list-unstyled list-inline text-center text-md-end">
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;