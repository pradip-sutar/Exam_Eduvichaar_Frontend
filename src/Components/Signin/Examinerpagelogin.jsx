import React from 'react'
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import { FaUser, FaIdBadge, FaTicketAlt, FaBook, FaSignInAlt } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import "../Exam.css"; 
const Examinerpagelogin = () => {
    const navigate = useNavigate();
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Licence No.</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <PiCertificateFill />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Licence_no." />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">User Name</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaIdBadge />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="use_name" />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaTicketAlt />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="password" />
              </InputGroup>
            </Form.Group>

            <a href="#">Forget Password</a>

            <div className="d-grid my-2">
              <Button className="exam-button" onClick={() => navigate("/ExaminerLogin")}>
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
