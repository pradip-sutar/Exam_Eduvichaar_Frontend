import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Button,
  Table,
  Form,
  InputGroup,
  Modal
} from "react-bootstrap";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaSchool,
  FaBook,
  FaUniversity,
  FaCalendar,
  FaEdit,
  FaPlus,
  FaClock
} from "react-icons/fa";
import Footer from "../Footer";
import ExamResults from "./ExamResults";
import Exam_Compaies from "./Exam_Compaies";
import ExamRegistration from "./ExamRegistration";
import ExQuestion from "./ExQuestion";
import ExamAnswer from "./ExamAnswer";
import BasicProfileExaminer from "./BasicProfileExaminer";
const ExaminerLogin = () => {
  const [activeSection, setActiveSection] = useState("Basic Profile");
  
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditClick = () => {
      setIsEditing(!isEditing);
    };

   
  

    // Companies
    const [companies, setCompanies] = useState([
      {
        id: 1,
        name: "Vichhar Labs",
        logo: "assets/images/partner/vichaarlab_favicon.png", 
        info: "A tech company specializing in AI solutions.",
      },
      {
        id: 2,
        name: "TechSphere",
        logo: "assets/images/partner/techS.png",
        info: "Innovative software development firm.",
      },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [newCompany, setNewCompany] = useState({ logo:"" , name: "", info: "" });
    const [logoPreview, setLogoPreview] = useState(null);

    const handleAddNew = () => setShowPopup(true);
    const handleClose = () => {
      setShowPopup(false);
    setNewCompany({ logo: "", name: "", info: "" });
    setLogoPreview(null);
    };
  
    const handleLogoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setLogoPreview(reader.result);
        reader.readAsDataURL(file);
        setNewCompany({ ...newCompany, logo: file });
      }
    };

    const handleSave = () => {
    if (newCompany.name && newCompany.info && newCompany.logo) {
      setCompanies([...companies, { 
        id: companies.length + 1, 
        name: newCompany.name, 
        info: newCompany.info, 
        logo: logoPreview  
      }]);
      handleClose();
    } else {
      alert("Please fill all fields.");
    }
  };

  
    const sections = {
      "Basic Profile": <BasicProfileExaminer/>,

      "Create Exam": <ExQuestion/>,
     
      "Companies": <Exam_Compaies/>,
     "Results": <ExamResults />, 
      " Registration":<ExamRegistration/>,
      " Answers": <ExamAnswer/>
    };
  return (
   <>
    <div className="bg-primary header-bg">
        <Navbar />
        {/* <b className="screen-overlay" /> */}
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>Examiner Login </h1>
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
                    ExaminerLogin
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>

      </div>
      <main id="body-content" className="bg-white">
        <Container className="mt-4">
          <Row>
            {/* Left Sidebar */}
            <Col md={3}>
              <Card className="p-3 shadow-lg border-0 rounded-3 my-5">
                <Card.Body>
                  <div className="text-center">
                    <Image
                      src="assets/images/sidebar_widget_care.png"
                      roundedCircle
                      className="mb-2 profile-img"
                    />
                    <h5>Name</h5>
                  </div>
                  <ListGroup variant="flush">
                    {Object.keys(sections).map((section, index) => (
                      <ListGroup.Item
                        key={index}
                        action
                        onClick={() => setActiveSection(section)}
                        className={activeSection === section ? "active" : ""}
                      >
                        {section}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Content */}
            <Col md={9}>
              <Card className="p-3 shadow-lg border-0 rounded-3 my-5">
                <Card.Body>
                  <h2><strong>{activeSection}</strong></h2>
                  {sections[activeSection]}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
   </>
  )
}

export default ExaminerLogin
