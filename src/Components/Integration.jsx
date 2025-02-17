import React, { useState } from "react";

export const Integration = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1 
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 2 : prevIndex - 1 
    );
  };

  // Calculate the translateX value for animation
  const transformStyle = {
    transform: `translate3d(-${currentIndex * 410}px, 0px, 0px)`, // 410 is the width of the items
    transition: "transform 0.5s ease-in-out",  width: 5280,
  };
  
  return (
    <>
      <main id="body-content">
        <section className="section-spacing section-padding bg-light-blue services-related-slider">
          <div className="container">
            <div className="section-title text-start">
              <span style={{color:'#1f93c6'}}>Integration </span>
              <h2
                className="mb-0 wow animated"
                style={{ perspective: 400, visibility: "visible" }}
              >
                <div
                  className="split-line CreateDig"
                  style={{
                    display: "block",
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(0px, 0px)",
                        opacity: 1,
                      }}
                    >
                      O
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(0px, 0px)",
                        opacity: 1,
                      }}
                    >
                      u
                    </div>
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        transform: "translate(0px, 0px)",
                        opacity: 1,
                      }}
                    >
                      r
                    </div>
                  </div>
                  <br />
                  <strong>
                    {" "}
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      {" "}
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        O
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        h
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        r
                      </div>
                    </div>{" "}
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        S
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        r
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        v
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        i
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        c
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          transform: "translate(0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        e
                      </div>
                    </div>
                  </strong>
                </div>
              </h2>
            </div>
          </div>
          <div
            className="owl-carousel container owl-theme top-right-arrow owl-loaded owl-drag"
            id="services-related-slider"
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                // style={{
                //   transform: "translate3d(-2640px, 0px, 0px)",
                //   transition: "1s",
                //   width: 5280,
                // }}
                style={transformStyle}
              >
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-marketing-automation" />
                      </div>
                      <div className="text">
                        <h6>Marketing Automation</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-social-media-management" />
                      </div>
                      <div className="text">
                        <h6>Social Media Management</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-keyword-research-second" />
                      </div>
                      <div className="text">
                        <h6>Keyword Research</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-digital-analytics-monitor" />
                      </div>
                      <div className="text">
                        <h6>Digital Analytics</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-digital-marketing" />
                      </div>
                      <div className="text">
                        <h6>Digital Marketing</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-email-maketing" />
                      </div>
                      <div className="text">
                        <h6>Email Marketing</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item active"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-marketing-automation" />
                      </div>
                      <div className="text">
                        <h6>Marketing Automation</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item active"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-social-media-management" />
                      </div>
                      <div className="text">
                        <h6>Social Media Management</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item active"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-keyword-research-second" />
                      </div>
                      <div className="text">
                        <h6>Keyword Research</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-digital-analytics-monitor" />
                      </div>
                      <div className="text">
                        <h6>Digital Analytics</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-digital-marketing" />
                      </div>
                      <div className="text">
                        <h6>Digital Marketing</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
                <div
                  className="owl-item cloned"
                  style={{ width: 410, marginRight: 30 }}
                >
                  <div className="item">
                    <div className="icon-style-top-icon">
                      <div className="icon"style={{background:'#fc8846'}}>
                        <i className="srn-icon-email-maketing" />
                      </div>
                      <div className="text">
                        <h6>Email Marketing</h6>
                        <p>
                          We use the latest technologies it voluptatem
                          accusantium do loremque laudantium.
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
            </div>
            <div className="owl-nav">
              <button type="button" role="presentation" className="owl-prev" onClick={prevSlide}>
                <i className="srn-arrow-left" />
              </button>
              <button type="button" role="presentation" className="owl-next" onClick={nextSlide}>
                <i className="srn-arrow-right" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </section>
      </main>
    </>
  );
};
