import React, { useState } from "react";
import { Card, Table, Button, Form, Modal, Row, Col } from "react-bootstrap";
import { FaPlus, FaClock, FaEdit } from "react-icons/fa";


const ExQuestion = () => {

     const [questions, setQuestions] = useState([
          { id: 1, question: "", options: ["", "", "", ""], answer: "" },
        ]);
      
        const handleAddQuestion = () => {
          setQuestions([
            ...questions,
            { id: questions.length + 1, question: "", options: ["", "", "", ""], answer: "" },
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
        }
      ]);
      const [formData, setFormData] = useState({
        examName: "",
        examType: "",
        purpose: "",
        company: "",
        date: "",
        duration: ""
      });
      
      const handleExamChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      
      const handleExamSave = () => {
        setExamData([...examData, formData]); // Add new data to table
        setShowModal(false); // Close modal
        setFormData({ examName: "", examType: "", purpose: "", company: "", date: "", duration: "" }); // Reset form
      };
  return (
    <div>
       <Card.Body>
                <Form>
                  {/* Exam Details */}
      
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Exam Name</th>
                        <th>Exam Type</th>
                        <th>Purpose</th>
                        <th>Company</th>
                        <th>Date</th>
                        <th>
                          {" "}
                          <FaClock /> Duration
                        </th>
                        <th>
                          <Button
                            variant="primary"
                            onClick={() => setShowModal(true)}
                          >
                            <FaPlus /> <strong>Add New</strong>
                          </Button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {examData.map((exam, index) => (
                        <tr key={index}>
                          <td>{exam.examName}</td>
                          <td>{exam.examType}</td>
                          <td>{exam.purpose}</td>
                          <td>{exam.company}</td>
                          <td>{exam.date}</td>
                          <td>{exam.duration}</td>
                          <td>
                            <Button
                              variant="warning"
                              size="sm"
                              className="text-white"
                            >
                              <FaEdit /> <strong>Edit</strong>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <hr className="dividerLine" />
      
                  {/* Add Question Section */}
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
      
                {/* Modal for Adding New Exam */}
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add New Exam</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-2">
                        <Form.Label>Exam Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="examName"
                          value={formData.examName}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Exam Type</Form.Label>
                        <Form.Control
                          type="text"
                          name="examType"
                          value={formData.examType}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Purpose</Form.Label>
                        <Form.Control
                          type="text"
                          name="purpose"
                          value={formData.purpose}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                          type="time"
                          name="duration"
                          value={formData.duration}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      Cancel
                    </Button>
                    <Button variant="success" onClick={handleExamSave}>
                      Save
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
    </div>
  )
}

export default ExQuestion






