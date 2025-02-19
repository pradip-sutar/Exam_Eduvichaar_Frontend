import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 992);

  const location = useLocation();

  const isCustomStyle =
    location.pathname === "/AboutUs" ||
    location.pathname === "/Propvichaar" ||
    location.pathname === "/StudentLogin" ||
    location.pathname === "/ExaminerLogin" ||
    location.pathname === "/exam-login"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 992);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Apply styles based on scrolling & page conditions
  const navbarStyle = isScrolled
    ? {} // Default style on scroll
    : isCustomStyle
    ? { backgroundColor: "#257cfd", color: "#fff" }
    : {};

  const logoSrc = isScrolled
    ? "assets/images/logoAdmin.png" // Default logo on scroll
    : isCustomStyle
    ? "assets/images/logoAdmin.png"
    : "assets/images/logoAdmin.png";

  const textColor = isMobileView
    ? { color: "#000" } 
    : isScrolled
    ? {}
    : isCustomStyle
    ? { color: "#fff" }
    : {};

  const buttonClass =
    location.pathname === "/AboutUs" ||
    location.pathname === "/StudentLogin" ||
    location.pathname === "/ExaminerLogin" ||
    location.pathname === "/exam-login" 

   
      ? "signup-btn btn btn-outline-light text-white text-nowrap me-md-4 no-hover"
      : "signup-btn btn btn-outline-primary text-nowrap me-md-4"; // Default color
      // const resultRef = useRef(null);

      const handleScrollToResult = () => {
        const element = document.getElementById('result');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const handleScrollToReg = () => {
        const element = document.getElementById('reg');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
      
  return (
    <>
      <div className="home-default" style={navbarStyle}>
        <header>
          {/* <section className="top-bar m-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-last">
                  <div className="social-icons">
                    <ul className="list-unstyled">
                      <li>
                        <Link href="#">
                          <i className="bi bi-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-twitter-x" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-linkedin" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="bi bi-youtube" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="top-bar-links text-start">
                    <Link href="#">Products</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Login</Link>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <nav
            className={`navbar navbar-expand-lg header-anim ${
              isScrolled ? "fixed-top animated fadeInDown" : ""
            }`}
          >
            <div className="container" style={{ maxHeight: 100 }}>
              <a className="navbar-brand " href="/">
                {" "}
                <img src={logoSrc} alt="Logo" className="w-70 h-auto" />
              </a>
              <form className="d-flex order-lg-last ms-3 align-items-center">
                <div className="OE-login-container">
                  <a className={buttonClass}>
                    <span className="d-none d-sm-inline-block">
                      <span className="outer-wrap">
                        <span data-text="Log In">Log In</span>
                      </span>
                    </span>
                    <span className="d-block d-sm-none">
                      <i className="bi bi-door-closed" />
                    </span>
                  </a>

                  {/* Hidden Dropdown - Shows on Hover */}
                  <div className="OE-login-dropdown">
                    <Link to="/StudentLogin" className="OE-login-option">
                      Student
                    </Link>
                    <Link to="/ExaminerLogin" className="OE-login-option">
                      Examiner
                    </Link>
                    
                  </div>
                </div>

                <button
                  className="navbar-toggler x collapsed"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </form>
              <div
                className="navbar-collapse offcanvas offcanvas-start offcanvas-collapse"
                id="navbarCollapse"
              >
                <div className="offcanvas-header">
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/logoAdmin.png" alt />
                  </a>
                  <button
                    className="navbar-toggler x collapsed"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="bi bi-x-lg" />
                  </button>
                </div>
                <div className="offcanvas-body" data-lenis-prevent>
                  <ul
                    className="navbar-nav"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link "
                        to="/Exam"
                        aria-expanded="false"
                        style={textColor}
                      >
                        Exam
                      </Link>
                    </li>

                    <li className="nav-item dropdown" >
                      <Link
                        className="nav-link "
                        to="#"
                        aria-expanded="false"
                        style={textColor}
                        onClick={handleScrollToResult}
                      >
                        Result
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link "
                        to="#"
                        aria-expanded="false"
                        style={textColor}
                        onClick={handleScrollToReg}
                      >
                        Registration
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
