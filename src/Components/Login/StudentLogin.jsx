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
} from "react-icons/fa";
import Footer from "../Footer";

const StudentLogin = () => {
  const [activeSection, setActiveSection] = useState("Basic Profile");

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  const sections = {
    "Basic Profile": (
      <Card.Body>
        <div className="d-flex justify-content-end mb-2">
          <Button
            variant="warning"
            style={{color:'white'}}
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
                   Board/University
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                  <FaUniversity />
                  </InputGroup.Text>
                  <Form.Control
                    name="University"
                    placeholder="Board/University"
                    value="University"
                    readOnly
                  />
                </InputGroup>
                
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
              Address
            </Form.Label>
            <InputGroup>
                  <InputGroup.Text>
                  <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                  as="textarea"
                    name="address"
                    placeholder="Enter Address"
                    value="Plot no. 288/3842(Sudha's), Nandan Vihar,Patia,"
                    readOnly
                  />
                </InputGroup>
           

            <div className="text-center mt-4">
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
    // "My Cart": <h3>My Cart Section</h3>,
    "Hall Ticket": (
      // <Card >
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
                <Button variant="link">Download</Button>
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
