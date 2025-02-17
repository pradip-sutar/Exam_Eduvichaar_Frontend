import React from "react";
import { Card, Form, Button, InputGroup } from "react-bootstrap";
import { FaUser, FaIdBadge, FaTicketAlt, FaBook, FaSignInAlt } from "react-icons/fa";
import "./Exam.css"; 

const Exam = () => {
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

          <h2 className="exam-title">Student Login</h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Name</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaUser />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter Name" />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Registration No.</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaIdBadge />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter Regd. No." />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Hall Ticket</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaTicketAlt />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter Hall Ticket No." />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Exam Name</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-light">
                  <FaBook />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter Exam Name" />
              </InputGroup>
            </Form.Group>

            <div className="d-grid">
              <Button className="exam-button">
                <FaSignInAlt className="me-2" /> Login
              </Button>
            </div>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Exam;
