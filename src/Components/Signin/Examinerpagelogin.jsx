import React, { useState } from 'react';
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import { FaUser, FaIdBadge, FaTicketAlt, FaBook, FaSignInAlt } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "../Exam.css"; 
import { postExaminerLogin } from '../Service/SignUp/apiExaminerLogin';

const Examinerpagelogin = () => {
    const navigate = useNavigate();
    
        // State for form inputs
        const [formData, setFormData] = useState({
          student_or_license_id : '',
          username :'',
          password:'',
        });

        const [error, setError] = useState('');
        
            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
            };

          // Handle form submission
              const handleSubmit = async (e) => {
                 e.preventDefault();
                 console.log("Form Data:", formData);

                 try {
                     const response = await postExaminerLogin(formData);
                     console.log("API Response:", response);
                     navigate("/ExaminerLogin");
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

          <h2 className="exam-title">Examiner Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Licence No.</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <PiCertificateFill />
                </InputGroup.Text>
                <Form.Control type="text" name="student_or_license_id" value={formData.student_or_license_id} onChange={handleChange} />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">User Name</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaIdBadge />
                </InputGroup.Text>
                <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaTicketAlt />
                </InputGroup.Text>
                <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} />
              </InputGroup>
            </Form.Group>

            <a href="#">Forget Password</a>

            <div className="d-grid my-2">
              <Button className="exam-button"  type="submit"
              // onClick={() => navigate("/ExaminerLogin")}
                >
                <FaSignInAlt className="me-2" /> Login
              </Button>
            </div>
            <p>Don't have an account ? <span><a href="Examinersignup">SignUp</a></span></p>
          </Form>
        </div>
      </Card>
    </div>
    </>
  )
}

export default Examinerpagelogin
