import React, {useState} from "react";
import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { FaUser, FaPhone, FaEnvelope, FaSchool, FaBook, FaUniversity, FaCalendar, FaEdit } from "react-icons/fa";
// import "../../../Components/"
import "../../../assets/css/costume.css"; 

const Student_BasicProfile = () => {

    const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "Mana",
    regd: "564738920",
    dob: "12-02-2025",
    class: "900",
    phone_num: "90908765",
    email: "",
    school:"fty",
    University:"bput",
    address:"nandan",


  });

  const handleSave = () => {
    setShowPopup(false);
   
  };
    return (
      <>
        <Card.Body>
          <div className="d-flex justify-content-end mb-2">
            <Button
              variant="warning"
              style={{ color: "white" }}
              className="px-3 py-1 d-flex align-items-center gap-2"
              onClick={() => setShowPopup(true)}
            >
              <FaEdit size={18} />
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
                      value={formData.name}
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
                  <Form.Label>Board/University</Form.Label>
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
                      name="phone_num"
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

              <Form.Label>Address</Form.Label>
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

        {/* PopUp Form */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="Que-popup-container animate-popup">
              <h4>Edit Profile</h4>
              <Form>
                <Row >
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group >
                      <Form.Label>Name</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Registration No.</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaUser />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="regd"
                          value={formData.regd}
                          onChange={(e) =>
                            setFormData({ ...formData, regd: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Date of Birth</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaCalendar />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="dob"
                          value={formData.dob}
                          onChange={(e) =>
                            setFormData({ ...formData, dob: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Class/Education</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaPhone />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="class"
                          value={formData.class}
                          onChange={(e) =>
                            setFormData({ ...formData, class: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>School/University</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaEnvelope />
                        </InputGroup.Text>
                        <Form.Control
                          type="school"
                          name="school"
                          value={formData.school}
                          onChange={(e) =>
                            setFormData({ ...formData, school: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaPhone />
                        </InputGroup.Text>
                        <Form.Control
                          type="number"
                          name="phone_num"
                          value={formData.phone_num}
                          onChange={(e) =>
                            setFormData({ ...formData, phone_num: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaCalendar />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          name="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6} sm={12} xs={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FaEnvelope />
                        </InputGroup.Text>
                        <Form.Control
                          type="email"
                          name="address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3 ">
                  <Button
                    variant="secondary"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleSave}>
                    Save Changes
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </>
    );
}

export default Student_BasicProfile
