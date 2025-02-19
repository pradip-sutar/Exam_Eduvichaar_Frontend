import React, { useState } from "react";
import Navbar from "../Header/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  FaSignInAlt
} from "react-icons/fa";
import Student_BasicProfile from "./Profile_Student/Student_BasicProfile";
import Hallticket from "../CertificateDownload/Hallticket";
import Footer from "../Footer";

const StudentLogin = () => {
   const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Basic Profile");

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const sections = {
    "Basic Profile": <Student_BasicProfile/>,
   
    "Hall Ticket": (
      
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Date</th>
              <th>Place</th>
              <th>Hall Ticket</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample Exam</td>
              <td>10-10-2024</td>
              <td>City Center</td>
              <td>
                <Button variant="link"  onClick={() => navigate("/hall-ticket")}>
                                 Download
                              </Button>
              {/* <Link to=""> <Button variant="link" >Download</Button></Link>  */}
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    ),
    Result: (
      <Card.Body>
        {/* <h1 className="mt-4">Result</h1> */}
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Year</th>
              <th>Exam Name</th>
              <th>Date</th>
              <th>Place</th>
              <th>Regd. No.</th>
              <th>Full Mark</th>
              <th>Secured Mark</th>
              <th>Certificate </th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Sample Exam</td>
              <td>10-10-2024</td>
              <td>City Center</td>
              <td>100</td>
              <td>85</td>
              <td>56</td>
              <td>Download</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    ),
  };
  return (
    <>
      <div className="bg-primary header-bg">
        <Navbar />
        <b className="screen-overlay" />
        <section className="breadcrumbs-page">
          <div className="container">
            <h1>StudentLogin </h1>
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
                    StudentLogin
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        {/*  Page Breadcrumbs End */}
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
                  <h4>{activeSection}</h4>
                  {sections[activeSection]}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default StudentLogin;
