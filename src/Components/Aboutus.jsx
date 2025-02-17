import React from "react";

const Aboutus = () => {
  return (
    <>
      <main id="body-content ">
        <section className="section-spacing  mt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-us-img">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="img-about">
                        <img src="assets/images/co-working/23.svg" alt />
                        {/* <div className="counter-year wow fadeInUp">
                                <span>Over</span>
                                <div className="hstack gap-3">
                                    <h1><span>70</span>+</h1>
                                    <div>Locations <br />Worldwide</div>
                                </div>                                        
                                </div> */}
                      </div>
                    </div>
                    {/* <div className="col-md-3">
                            <div className="about-office-stats-wrap pt-5">
                                <div className="about-office-stats fun-fact">
                                <i className="srn-icon-global-office" />
                                <div className="counts"style={{color:'#1d92c6'}}>
                                    <span className="timer" data-to={120} data-speed={2000}>120</span> +
                                </div>
                                <span>Office Room</span>
                                </div>
                                <div className="about-office-stats fun-fact">
                                <i className="srn-icon-meeting-room" />
                                <div className="counts"style={{color:'#1d92c6'}}>
                                    <span className="timer" data-to={15} data-speed={2000}>15</span> +
                                </div>
                                <span>Meeting Room</span>
                                </div>
                                <div className="about-office-stats fun-fact">
                                <i className="srn-icon-cafetaria" />
                                <div className="counts"style={{color:'#1d92c6'}}>
                                    <span className="timer" data-to={19} data-speed={2000}>19</span > +
                                </div>
                                <span>Cafetaria</span>
                                </div>
                            </div>
                            </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
              <div className="section-title text-start pt-lg-0 pt-md-5">
  <h2>
    <strong style={{ color: "#1d92c6" }}> Registration Form </strong>
  </h2>
  <div className="form-wrap">
    <div className="row">
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Exam Name" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Year" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Student Name" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Phone Number" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="Email" className="form-control bordered bottom-only" placeholder="Email ID " />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Parent's Name" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Relation" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="number" className="form-control bordered bottom-only" placeholder="Phone No." />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Exam Centre" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Village / Address" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="City / District" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="State" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="text" className="form-control bordered bottom-only" placeholder="Country" />
      </div>
      <div className="col-md-6 mb-4">
        <input type="number" className="form-control bordered bottom-only" placeholder="PIN / ZIP Code" />
      </div>
    </div>
    <div className="d-grid">
      <button type="button" className="btn btn-outline-primary btn-sm">
        <span className="outer-wrap">
          <span data-text="Submit">Submit</span>
        </span>
      </button>
    </div>
  </div>
</div>
                {/* <div className="mt-5 mt-lg-0">
                        <a href="about-us.html" className="btn btn-square btn-primary"style={{backgroundColor: '#f75d15', border: '#f75d15'}}><span className="outer-wrap"><span data-text="Read More">Read More</span></span></a>
                        </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Aboutus;
