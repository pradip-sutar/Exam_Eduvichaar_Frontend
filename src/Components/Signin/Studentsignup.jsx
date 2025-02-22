import React, { useState } from 'react';
import { Card, Form, Button, InputGroup,  Row, Col } from "react-bootstrap";
import { FaIdBadge, FaTicketAlt, FaSignInAlt, FaPhoneSquare, FaSchool, FaCalendarAlt, FaLock } from "react-icons/fa";
import { MdEmail, MdClass } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../Exam.css";

const Studentsignup = () => {
    const navigate = useNavigate();

    // State for form inputs
    const [formData, setFormData] = useState({
        userName: 'mana',
        dob: '',
        class_edu: '',
        Institute_Unive:'',
        Board:'',
        Phone_number:'',
      
        Email:'',
        Password:'',
        confirm_password: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        navigate("/StudentLogin");  // Navigate after form submission
    };

    return (
        <div className="exam-container">
            <Card className="exam-card">
                {/* Left Side - Image */}
                <div className="exam-left">
                    <img src="assets/images/cvdd.png" alt="Login Illustration" className="exam-logo" />
                </div>

                {/* Right Side - Form */}
                <div className="exam-right">
                    <div className="exam-banner">Student</div>
                    <h2 className="exam-title">Student SignUp</h2>

                    <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">User Name</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaIdBadge /></InputGroup.Text>
                                        <Form.Control type="text" name="userName" placeholder="Enter your username" value={formData.userName} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Date Of Birth</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaCalendarAlt /></InputGroup.Text>
                                        <Form.Control type="date" name="dob" value={formData.dob} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Class / Education</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><MdClass /></InputGroup.Text>
                                        <Form.Control type="text" name="class_edu" value={formData.class_edu} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Board</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><MdClass /></InputGroup.Text>
                                        <Form.Control type="text" name="Board" value={formData.Board} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Institute / University</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaSchool /></InputGroup.Text>
                                        <Form.Control type="text" name="Institute_Unive" value={formData.Institute_Unive} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Phone Number</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaPhoneSquare /></InputGroup.Text>
                                        <Form.Control type="number" name="Phone_number" value={formData.Phone_number} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><MdEmail /></InputGroup.Text>
                                        <Form.Control type="email" name="Email" value={formData.Email} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaLock /></InputGroup.Text>
                                        <Form.Control type="password" name="Password" value={formData.Password} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Confirm Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaLock /></InputGroup.Text>
                                        <Form.Control type="password" name="confirm_password" value={formData.confirm_password} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <div className="d-grid my-2">
                            <Button type="submit" className="exam-button">
                                <FaSignInAlt className="me-2" /> Register
                            </Button>
                        </div>
                        <p>Already have an account? <a href="/Studentpagelogin">Sign in</a></p>
                        </Form>
                </div>
            </Card>
        </div>
    );
};

export default Studentsignup;
