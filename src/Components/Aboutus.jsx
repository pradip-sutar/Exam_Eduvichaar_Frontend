import React from "react";

const Aboutus = () => {

  return (
    <>
      <main id="body-content ">
        <section className="section-spacing  mt-5 "id="reg">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="about-us-img">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="img-about">
                        <img src="assets/images/co-working/23.svg" alt />
                        
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="section-title text-start pt-lg-0 pt-md-5">
                  <h2>
                    <strong style={{ color: "#1d92c6" }}>
                      {" "}
                      Registration Form{" "}
                    </strong>
                  </h2>
                  <div className="form-wrap">
                    <div className="row">
                      {/* <div className="col-md-12 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Exam Name"
                        />
                      </div> */}
                      <div className="col-md-12 mb-4 position-relative ">
  <select
    className="form-control bordered bottom-only p-1"
    style={{ color: "#626568", fontStyle: "normal", fontStyle:"italic" }}
    defaultValue=""
  >
    <option value="" disabled> Exam Name</option>
    <option value="exam1">Exam 1</option>
    <option value="exam2">Exam 2</option>
    <option value="exam3">Exam 3</option>
  </select>
  <span
    className="dropdown-icon"
    style={{
      position: "absolute",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none", 
    }}
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4L6 8L10 4" stroke="grey" strokeWidth="2" fill="none" />
    </svg>
  </span>
</div>
                      
                      
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Student ID"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Year"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Student Name"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="Email"
                          className="form-control bordered bottom-only"
                          placeholder="Email ID "
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Parent's Name"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Relation"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="number"
                          className="form-control bordered bottom-only"
                          placeholder="Phone No."
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Exam Centre"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Village / Address"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="City / District"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="State"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Country"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <input
                          type="number"
                          className="form-control bordered bottom-only"
                          placeholder="PIN / ZIP Code"
                        />
                      </div>
                    </div>
                    <div className="d-grid">
                      <button
                        type="button"
                        className="btn btn-outline-primary btn-sm"
                      >
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
