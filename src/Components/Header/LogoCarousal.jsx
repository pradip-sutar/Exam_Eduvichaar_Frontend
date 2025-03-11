import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./LogoCarousel.css";

const LogoCarousel = () => {
  
  const handleTranslated = (event) => {
    const carousel = event.target;
    const items = carousel.querySelectorAll(".owl-item");
    
    // Remove color class from all items
    items.forEach(item => {
      item.classList.remove("colored");
    });

    // Add color class to active item
    const activeItem = carousel.querySelector(".owl-item.active.center");
    if (activeItem) {
      activeItem.classList.add("colored");
    }
  };

  // Then define options using the function
  const options = {
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    slideBy: 1,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 5 },
    },
    navText: [
      '<i class="srn-arrow-left"></i>',
      '<i class="srn-arrow-right"></i>',
    ],
    onTranslated: handleTranslated,
  };

  return (
    <section className="section-spacing logo-carousel">
      <div className="container">
        <OwlCarousel 
          className="owl-theme top-right-arrow carosualStyle" 
          {...options}
        >
          {[
            "img-client1.png",
            "5.png",
            "img-client3.png",
            "img-client4.png",
            "img-client5.png",
            "img-client6.png",
          ].map((img, index) => (
            <div className="item" key={index}>
              <div className="img-partner">
                <img 
                  src={`assets/images/partner/${img}`} 
                  alt={`Client ${index + 1}`} 
                  className="logo-img"
                />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default LogoCarousel;