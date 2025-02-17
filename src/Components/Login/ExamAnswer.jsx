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
  Modal,
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
  FaClock,
} from "react-icons/fa";
import Footer from "../Footer";
const ExamAnswer = () => {
  // Create Exam
  const [questions, setQuestions] = useState([
    { id: 1, question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ]);
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const [showModal, setShowModal] = useState(false);
  const [examData, setExamData] = useState([
    {
      examName: "Sample Exam",
      examType: "Online",
      purpose: "Certification",
      company: "XYZ Ltd.",
      date: "10-10-2024",
      duration: "60 mins",
    },
  ]);
  const [formData, setFormData] = useState({
    examName: "",
    examType: "",
    purpose: "",
    company: "",
    date: "",
    duration: "",
  });

  const handleExamChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Card.Body>
        <Form>
          <h5 className="mt-3">Add Question:</h5>
          {questions.map((q, index) => (
            <div key={q.id} className="border p-3 mb-3 position-relative">
              <h5>Question {index + 1}:</h5>
              <Form.Group className="mb-3">
                <Form.Label>Q:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter question"
                  value={q.question}
                  onChange={(e) =>
                    handleExamChange(index, "question", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Options:</Form.Label>
                {q.options.map((opt, optIndex) => (
                  <Form.Control
                    key={optIndex}
                    type="text"
                    placeholder={`Option ${optIndex + 1}`}
                    className="mb-1"
                    value={opt}
                    onChange={(e) =>
                      handleExamChange(index, "options", e.target.value)
                    }
                  />
                ))}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter correct answer"
                  value={q.answer}
                  onChange={(e) =>
                    handleExamChange(index, "answer", e.target.value)
                  }
                />
              </Form.Group>

              {/* Delete Button */}
              {questions.length > 1 && (
                <Button
                  variant="danger"
                  className="mt-2"
                  onClick={() => handleDeleteQuestion(q.id)}
                >
                  Delete
                </Button>
              )}
            </div>
          ))}

          <Button
            variant="primary"
            className="mb-3"
            onClick={handleAddQuestion}
          >
            Add More
          </Button>

          {/* Exam Summary */}
          <Row>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Total Questions:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Right Answer:</Form.Label>
                <Form.Control type="number" defaultValue={4} />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Total Marks:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group>
                <Form.Label>Wrong Answer:</Form.Label>
                <Form.Control type="number" defaultValue={-1} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </div>
  );
};

export default ExamAnswer;
