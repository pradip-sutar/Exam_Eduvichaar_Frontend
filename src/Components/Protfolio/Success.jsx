import React from 'react'
import { useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer";
const Success = () => {
     const [activeFilter, setActiveFilter] = useState("*");
    
      const handleFilter = (filter) => {
        setActiveFilter(filter);
      };
      const items = [
        { id: 1, category: "Customization ", image: "assets/images/portfolio/portfolio_img_1.jpg" },
        { id: 2, category: "Mobile Applicaton", image: "assets/images/portfolio/portfolio_img_2.jpg" },
        { id: 3, category: "Web Applicaton", image: "assets/images/portfolio/portfolio_img_3.jpg" },
        { id: 4, category: "Customization ", image: "assets/images/portfolio/portfolio_img_4.jpg" },
        { id: 5, category: "Mobile Applicaton", image: "assets/images/portfolio/portfolio_img_5.jpg" },
        { id: 6, category: "technology", image: "assets/images/portfolio/portfolio_img_6.jpg" },
        { id: 7, category: "Mobile Applicaton", image: "assets/images/portfolio/portfolio_img_7.jpg" },
        { id: 8, category: "Customization ", image: "assets/images/portfolio/portfolio_img_8.jpg" },
        { id: 9, category: "Desktop Application", image: "assets/images/portfolio/portfolio_img_7.jpg" },
        { id: 10, category: "Maintainance", image: "assets/images/portfolio/portfolio_img_7.jpg" },
        { id: 11, category: "Industry", image: "assets/images/portfolio/portfolio_img_2.jpg" },
        { id: 12, category: "Maintainance", image: "assets/images/portfolio/portfolio_img_7.jpg" },
        { id: 13, category: "Customization ", image: "assets/images/portfolio/portfolio_img_8.jpg" },
      
      ];
  return (
    <>
       <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>Success Story </h1>
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
                  Success Story
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
      </div>
      {/* Page Content Start */}
      {/* Page Content Start */}
      <main id="body-content" className="bg-white">
        {/* Portfolio 3 Column */}
        <section className="section-spacing pt-0">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-9 col-md-12 mx-auto text-center">
                <div className="section-title text-center">
                  <span style={{ color: "#1f93c6" }}>Latest Case Studies</span>
                  <h2 className="wow FAQKnow" >
                    Our Creativity <strong>Introduce Our Projects</strong>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    urna lectus, mattis non accumsan in, tempor dictum neque. In
                    hac habitasse platea dictumst. Lorem ipsum dolor sit amet,
                    consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
            <div className="col-md-12">
        <ul id="portfolio-flters" className="list-unstyled">
          {[
            // { label: "All", filter: "*" },
            { label: "Customization ", filter: "Customization " },
            { label: "Mobile Applicaton", filter: "Mobile Applicaton" },
            { label: "Web Applicaton", filter: "Web Applicaton" },
            { label: "Technology", filter: "technology" },
            { label: "Designing", filter: "Designing" },
            { label: "Desktop Application", filter: "Desktop Application" },
            { label: "Maintainance", filter: "Maintainance" },
            { label: "Industry", filter: "Industry" },
          ].map(({ label, filter }) => (
            <li
              key={filter}
              className={activeFilter === filter ? "filter-active" : ""}
              onClick={() => handleFilter(filter)}
              style={{ cursor: "pointer" }}
            >
              <a href="#">{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="isotope-gallery row">
        {items
          .filter((item) => activeFilter === "*" || item.category === activeFilter)
          .map((item) => (
            <div key={item.id} className={`gallery-item col-lg-4 col-md-6 col-12 ${item.category}`}>
              <div className="portfolio-gallery-item">
                <div className="item-img">
                  <div className="portfolio-img-gallery">
                    <a href={item.image} className="portfolio-img-gallery" title="Title Come here">
                      <img src={item.image} className="rounded" alt="Portfolio" />
                    </a>
                    <div className="img-over">
                      <i className="bi bi-plus-lg" />
                    </div>
                  </div>
                  <a href="portfolio-single.html" className="arrow">
                    <i className="srn-arrow-right" />
                  </a>
                </div>
                <div className="item-content">
                  <h6>
                    <a href="portfolio-single.html">Global revenue</a>
                  </h6>
                  <div className="sub-head">It Services & Consultancy</div>
                  <p>We use the latest technologies to improve our services.</p>
                </div>
              </div>
            </div>
          ))}
      </div>
            </div>
          </div>
        </section>
        {/* Portfolio 3 Column */}
      </main>
      {/* Page Content End */}
      <Footer/>
    </>
  )
}

export default Success
