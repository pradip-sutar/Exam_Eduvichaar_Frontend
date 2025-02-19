import React, { useRef, useState, useEffect } from "react";

export const Realuserreviews = () => {
  const totalSlides = 5;
  const [activeIndex, setActiveIndex] = useState(3);
  const carouselRef = useRef(null);
  const slideWidth = 430;
  const intervalRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${activeIndex * slideWidth}px)`;
    }
  }, [activeIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : totalSlides - 1));
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = activeIndex * slideWidth;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    setActiveIndex(Math.max(0, Math.min(totalSlides - 1, Math.round((scrollLeft.current - walk) / slideWidth))));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <>
      <main id="body-content ">
        <section className="section-spacing bg-light-blue pt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-xl-5 mx-auto text-center">
                <div className="section-title text-center">
                  <span style={{ color: "#1f93c6" }}>Real User Reviews</span>
                  <h2 className="wow CreateDig">
                    What our client’s are <strong>Saying about us</strong>
                  </h2>
                </div>
              </div>
            </div>

            <div
              className="owl-carousel owl-theme owl-loaded owl-drag"
              id="testimonials-slider-shadow"
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transition: "1s",
                    width: 5160,
                    transform: "translate3d(-2150px, 0px, 0px)",
                  }}
                >
                 <div
                  className="carousel-track"
                  ref={carouselRef}
                  style={{ display: "flex", transition: "transform 0.5s ease" }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_4.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_5.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_6.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_1.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_2.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_3.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active center"
                      style={{ width: 430 }}
                    >
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_4.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_5.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_6.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_1.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_2.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="owl-item cloned" style={{ width: 430 }}>
                      <div className="item">
                        <div className="testimonial-shadow">
                          <div className="thumb-img">
                            <img src="assets/images/thumb_3.jpg" alt />
                          </div>
                          <h6 className="name">Rider Smith</h6>
                          <div className="post">Marketing Envato Pty Ltd.</div>
                          <div className="rating">
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star-fill" />
                            <i className="bi bi-star" />
                          </div>
                          <hr className="divider-default" />
                          <h6>
                            My business is growing faster and I’m very happy
                            with that
                          </h6>
                          <p>
                            Thank you for your excellent work. No one could hear
                            us as well as you and make our wishes come true so
                            beautifully and beautifully.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button
                  type="button"
                  role="presentation"
                  onClick={handlePrev}
                  className="owl-prev"
                >
                  <i className="srn-arrow-left" />
                </button>
                <button
                  type="button"
                  role="presentation"
                  onClick={handleNext}
                  className="owl-next"
                >
                  <i className="srn-arrow-right" />
                </button>
              </div>
              <div className="owl-dots">
              {Array.from({ length: totalSlides }).map((_, idx) => (
                <button
                  key={idx}
                  role="button"
                  className={`owl-dot ${activeIndex === idx ? "active" : ""}`}
                  onClick={() => handleDotClick(idx)}
                >
                  <span />
                </button>
              ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Realuserreviews;
