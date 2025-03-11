import React, { useState } from 'react';
import { Card, Form, Button, InputGroup,  Row, Col } from "react-bootstrap";
import { FaIdBadge, FaTicketAlt, FaSignInAlt, FaPhoneSquare, FaSchool, FaCalendarAlt, FaLock } from "react-icons/fa";
import { MdEmail, MdClass } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../Exam.css";
import { postExaminerRegistration } from '../Service/SignUp/apiExaminerSignUp';
import jsPDF from 'jspdf';

const Examinersignup = () => {
    const navigate = useNavigate();

    // State for form inputs
    const [formData, setFormData] = useState({
        username : '',
        phone :'',
        institution:'',
        board:'',
        email :'',
        password:'',
        confirm_password: '',
    });

    const [error, setError] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to generate and download PDF
    const generatePDF = (license_no, username, password) => {
        const doc = new jsPDF();
    
        // Title
        doc.setFontSize(16);   
        doc.text('Credential Details', 75, 20); // x , y
        doc.line(75, 22, 120, 22);
        // Table settings
        doc.setFontSize(12);
        const startX = 30; 
        const startY = 40; 
        const colWidth = 50; 
        const rowHeight = 10; 
        const tableWidth = colWidth * 3; 
        const tableHeight = rowHeight * 2; 
    
       
        doc.rect(startX, startY, tableWidth, tableHeight); 
    
      
        doc.line(startX + colWidth, startY, startX + colWidth, startY + tableHeight); 
        doc.line(startX + colWidth * 2, startY, startX + colWidth * 2, startY + tableHeight); 
    
       
        doc.line(startX, startY + rowHeight, startX + tableWidth, startY + rowHeight);
    
        // Table headers
        doc.text('license_no', startX + 5, startY + 7); 
        doc.text('Username', startX + colWidth + 5, startY + 7);
        doc.text('Password', startX + colWidth * 2 + 5, startY + 7);
    
        // Table data
        doc.text(license_no, startX + 5, startY + rowHeight + 7); 
        doc.text(username, startX + colWidth + 5, startY + rowHeight + 7); 
        doc.text(password, startX + colWidth * 2 + 5, startY + rowHeight + 7); 
    
        
        const timestamp = new Date().getTime();
        const uniqueFilename = `Credential-details-${timestamp}.pdf`;
    
        // Save the PDF with a unique filename
        doc.save(uniqueFilename);
    };

     // Handle form submission
     const handleSubmit = async (e) => {
        e.preventDefault();

        // Psswrd validation
        if (formData.password !== formData.confirm_password) {
            setError("Passwords do not match!");
            return;
        }

        setError(""); 
        console.log("Form Data:", formData);

        const { confirm_password, ...dataToSend } = formData;  // Send data to API without confirm_password

        try {
            const response = await postExaminerRegistration(dataToSend);
            console.log("API Response:", response);
            //APi giving student Id
            const licenseID = response.license_no || `${formData.username}${formData.dob.slice(0,4)}`; 
            
            generatePDF(licenseID, formData.username, formData.password);
            // navigate("/ExaminerLogin");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

  return (
    <>
       <div className="exam-container">
            <Card className="exam-card">
                {/* Left Side - Image */}
                <div className="exam-left">
                    <img src="assets/images/cvdd.png" alt="Login Illustration" className="exam-logo" />
                </div>

                {/* Right Side - Form */}
                <div className="exam-right">
                    <div className="exam-banner">Examiner</div>
                    <h2 className="exam-title">Examiner SignUp</h2>

                    <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">User Name</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaIdBadge /></InputGroup.Text>
                                        <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Phone Number</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaPhoneSquare /></InputGroup.Text>
                                        <Form.Control type="number" name="phone" value={formData.phone} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                        
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Board</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><MdClass /></InputGroup.Text>
                                        <Form.Control type="text" name="board" value={formData.board} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><MdEmail /></InputGroup.Text>
                                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Institute </Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaSchool /></InputGroup.Text>
                                        <Form.Control type="text" name="institution" value={formData.institution} onChange={handleChange} />
                                    </InputGroup>
                                </Form.Group>
                            </Col>
                            
                           
                           
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text className="bg-light"><FaLock /></InputGroup.Text>
                                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
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
                   
                         {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

                        <div className="d-grid my-2">
                            <Button type="submit" className="exam-button">
                                <FaSignInAlt className="me-2" /> Register
                            </Button>
                        </div>
                        <p>Already have an account? <a href="/Examinerpagelogin">Sign in</a></p>
                        </Form>
                </div>
            </Card>
        </div>
    </>
  )
}

export default Examinersignup
