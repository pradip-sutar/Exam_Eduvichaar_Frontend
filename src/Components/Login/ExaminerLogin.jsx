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
import ExamRegistration from "./ExamRegistration";
import ExQuestion from "./ExQuestion";
import ExamAnswer from "./ExamAnswer";
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
      "Basic Profile": (
        <Card.Body>
          <div className="d-flex justify-content-end mb-2">
            <Button
              variant="warning"
              className="px-3 py-1 d-flex align-items-center gap-2"
            >
              <FaEdit size={18} /> {/* Adjust the icon size */}
              <span>
                <strong>Edit</strong>{" "}
              </span>
            </Button>
          </div>
          <fieldset>
            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaUser />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value="Mana"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>Registration No.</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaUser />
                    </InputGroup.Text>
                    <Form.Control
                      name="regd"
                      placeholder="Registration No."
                      value="564738920"
                      readOnly
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Date of Birth</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaCalendar />
                    </InputGroup.Text>
                    <Form.Control
                      name="dob"
                      placeholder="Date of Birth"
                      value="12-02-2025"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>Class/Education</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaBook />
                    </InputGroup.Text>
                    <Form.Control
                      name="class"
                      placeholder="Class/Education"
                      value="b.tech"
                      readOnly
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>School/University</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaSchool />
                    </InputGroup.Text>
                    <Form.Control
                      name="school"
                      placeholder=" School/University"
                      value="board"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>
                    <FaUniversity /> Board/University
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="board"
                    placeholder="Board/University"
                    className="form-input"
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Label>Phone Number</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <FaPhone />
                    </InputGroup.Text>
                    <Form.Control
                      name="number"
                      placeholder=" Phone Number"
                      value="90908765"
                      readOnly
                    />
                  </InputGroup>
                </Col>
                <Col md={6}>
                  <Form.Label>
                    <FaEnvelope /> Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="form-input"
                  />
                </Col>
              </Row>

              <Form.Label>
                <FaUser /> Address
              </Form.Label>
              <Form.Control
                as="textarea"
                name="address"
                rows={3}
                placeholder="Enter Address"
                className="form-input mb-3"
              />

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="px-4 py-2 rounded-pill shadow form-button"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </fieldset>
        </Card.Body>
      ),

      "Create Exam": <ExQuestion/>,
     
      "Companies": (
        <Card.Body>
          <div className="d-flex justify-content-end mb-2">
            <Button
              variant="primary"
              className="px-3 py-1 d-flex align-items-center gap-2"
              onClick={handleAddNew}
            >
              <FaPlus size={18} />
              <span>
                <strong>Add new</strong>
              </span>
            </Button>
          </div>

          <ListGroup>
            {companies.map((company) => (
              <ListGroup.Item
                key={company.id}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={company.logo}
                    roundedCircle
                    width={50}
                    height={50}
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-1">{company.name}</h6>
                    <p className="mb-0 text-muted">{company.info}</p>
                  </div>
                </div>
                <Button
                  variant="warning"
                  className="px-3 py-1 d-flex align-items-center gap-2"
                >
                  <FaEdit size={18} />
                  <span>
                    <strong>Edit</strong>
                  </span>
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* PopUp Modal */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-container animate-popup">
                <h4 className="mb-3">Add New Company</h4>

                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleLogoChange}
                />
                {logoPreview && (
                  <Image
                    src={logoPreview}
                    rounded
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                )}

                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="form-control mb-2"
                  value={newCompany.name}
                  onChange={(e) =>
                    setNewCompany({ ...newCompany, name: e.target.value })
                  }
                />

                <textarea
                  placeholder="Enter Description"
                  className="form-control mb-2"
                  value={newCompany.info}
                  onChange={(e) =>
                    setNewCompany({ ...newCompany, info: e.target.value })
                  }
                />

                <div className="d-flex justify-content-end gap-2 mt-3">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="success" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card.Body>
      ),
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
            <h1>ExaminerLogin </h1>
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
