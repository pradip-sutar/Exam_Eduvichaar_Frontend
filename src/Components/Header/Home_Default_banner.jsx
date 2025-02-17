import React from "react";
import Navbar from "./Navbar";
import BannerCarousel from "./BannerCarousel";
const Home_Default_banner = () => {
  return (
    <>
      {/* <Navbar/> */}
      <div className="home-default">
       

        <div classname="home-default-banner ">
          {/* Bootstrap Carousel */}
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <div className="container pos-rel"> */}
                  {/* <div className="banner-abstract-shape" />
                  <div className="matrix-vertical w-16">
                    <img src="assets/images/PB13.png" alt />
                  </div>
                  <div className="rectangle-small w-16 ">
                    <img src="assets/images/PB12.png" alt  />
                  </div> */}
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      {/* <div className="marketing-banner"> */}
                        <img src="assets/images/CanvaV/18.svg" alt="" />
                      {/* </div> */}
                    </div>
                   
                  </div>
                {/* </div> */}
              </div>
              <div className="carousel-item ">
                {/* <div className="container pos-rel"> */}
                  {/* <div className="banner-abstract-shape" />
                  <div className="matrix-vertical w-16">
                    <img src="assets/images/PB13.png" alt />
                  </div>
                  <div className="rectangle-small w-16 ">
                    <img src="assets/images/PB12.png" alt  />
                  </div> */}
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      {/* <div className="marketing-banner"> */}
                        <img src="assets/images/CanvaV/19.svg" alt="" />
                      {/* </div> */}
                    </div>
                   
                  </div>
                {/* </div> */}
              </div>
              <div className="carousel-item ">
                {/* <div className="container pos-rel"> */}
                  {/* <div className="banner-abstract-shape" />
                  <div className="matrix-vertical w-16">
                    <img src="assets/images/PB13.png" alt />
                  </div>
                  <div className="rectangle-small w-16 ">
                    <img src="assets/images/PB12.png" alt  />
                  </div> */}
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      {/* <div className="marketing-banner"> */}
                        <img src="assets/images/CanvaV/20.svg" alt="" />
                      {/* </div> */}
                    </div>
                   
                  </div>
                {/* </div> */}
              </div>
             
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

       

        {/* <!-- Page Header End --> */}
      </div>
    </>
  );
};

export default Home_Default_banner;
