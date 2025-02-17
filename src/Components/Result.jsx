import React from 'react'

const Result = () => {
  return (
    <>
      <main id="body-content ">
        <section className="section-spacing  mt-5">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between">
            <div className="col-lg-5">
                <div className="section-title text-start pt-lg-0 pt-md-5  ">
                  <h2>
                    <strong style={{ color: "#1d92c6" }}>
                      {" "}
                     Result{" "}
                    </strong>
                  </h2>

                  <div className="form-wrap">
                    <div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Exam Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Student Name"
                        />
                      </div>
                      {/* <div className="mb-4">
                        <input
                          type="number"
                          className="form-control bordered bottom-only"
                          placeholder="Registration Number"
                        />
                      </div> */}
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Registration"
                        />
                      </div>
                      {/* <div className="mb-4">
                        <input
                          type="text"
                          className="form-control bordered bottom-only"
                          placeholder="Result"
                        />
                      </div> */}

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
                </div>
              </div>
              <div className="col-lg-7 ">
                <div className="about-us-img">
                  <div className="row justify-content-end">
                    <div className="col-md-9">
                      <div className="img-about ">
                        <img src="assets/images/co-working/15.svg"   alt="About Us"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Result
