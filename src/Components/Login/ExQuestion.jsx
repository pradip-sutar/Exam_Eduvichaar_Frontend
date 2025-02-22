import React, { useState } from "react";
import {
  Card,
  Image,
  Button,
  ListGroup,
  Form,
  Row,
  Col,
} from "react-bootstrap";
// import { FaEdit, FaPlus, FaClock } from "react-icons/fa";
import { FaPlus, FaEdit } from "react-icons/fa";
import "../../assets/css/costume.css";

const ExQuestion = () => {
  const [questions, setQuestions] = useState([
    { id: 1, question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const [examData, setExamData] = useState({
    examName: "",
    examType: "",
    purpose: "",
    company: "",
    year: "",
    duration: "",
    date: "",
  });

  const handleAddNew = () => setShowQuestionForm(true);
  const handleClosePopup = () => setShowQuestionForm(false);

  const handleExamChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

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

  const [savedExams, setSavedExams] = useState([]);
  const handleTabSave = () => {
    if (!examData.examName || !examData.company) {
      alert("Please fill in all required fields.");
      return;
    }

    const totalSets = numSets; // Assuming numSets is the given number of sets
    const selectedSets = ` ${totalSets}`;

    const newExam = {
      id: savedExams.length + 1,
      examName: examData.examName,
      examType: examData.examType,
      purpose: examData.purpose,
      company: examData.company,
      year: examData.year,
      duration: examData.duration,
      date: examData.date,
      sets: selectedSets,
    };

    setSavedExams([...savedExams, newExam]);

    // Clear form after saving
    setExamData({
      examName: "",
      examType: "",
      purpose: "",
      company: "",
      year: "",
      duration: "",
      date: "",
    });
    setNumSets(0);
    handleClosePopup();
  };

  const [numSets, setNumSets] = useState(0); // State for number of sets

  const handleNumSetsChange = (e) => {
    setNumSets(Number(e.target.value));
  };

  return (
    <>
      <Card.Body>
        <div className="d-flex justify-content-end mb-2">
          <Button
            variant="primary"
            className="px-3 py-1 d-flex align-items-center gap-2"
            onClick={handleAddNew}
          >
            <FaPlus size={18} />
            <span>
              <strong>Add new</strong>
            </span>
          </Button>
        </div>
        <ListGroup>
          {savedExams.map((exam) => (
            <ListGroup.Item
              key={exam.id}
              className="d-flex align-items-center justify-content-between py-3"
            >
              <div className="d-flex align-items-center gap-3">
                <Image
                  src="assets/images/sidebar_widget_care.png"
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div className="d-flex flex-column">
                  <h6 className="mb-1 fw-bold">{exam.examName}</h6>

                  <div className="d-flex flex-row gap-3">
                    <p className="mb-0 text-muted">{exam.examType}</p>
                    <p className="mb-0 text-muted">{exam.purpose}</p>
                    <p className="mb-0 text-muted">{exam.company}</p>
                    <p className="mb-0 text-muted">{exam.year}</p>
                    <p className="mb-0 text-muted">{exam.duration}</p>
                    <p className="mb-0 text-muted ">{exam.date}</p>
                    <p className="mb-0 text-muted">{exam.sets}</p>
                  </div>
                </div>
              </div>

              <Button
                variant="warning"
                className="px-3 py-1 d-flex align-items-center gap-2"
              >
                <FaEdit size={18} />
                <span>
                  <strong>EDIT</strong>
                </span>
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {showQuestionForm && (
          <div className="Que-popup-overlay" onClick={handleClosePopup}>
            <div
              className="Que-popup-container animate-popup"
              onClick={(e) => e.stopPropagation()}
            >
              <h5 className="mt-3">Exam Details:</h5>
              <Form>
                <Row>
                  {[
                    { label: "Exam Name", name: "examName" },
                    { label: "Exam Type", name: "examType" },
                    { label: "Purpose", name: "purpose" },
                  ].map((field, idx) => (
                    <Col md={4} key={idx}>
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type="text"
                          name={field.name}
                          value={examData[field.name]}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                    </Col>
                  ))}
                </Row>
                <Row className="mt-3">
                  {[
                    { label: "Company", name: "company", type: "text" },
                    { label: "year", name: "year", type: "number" },
                    { label: "Duration", name: "duration", type: "time" },
                    { label: "date", name: "date", type: "date" },
                  ].map((field, idx) => (
                    <Col md={4} key={idx}>
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.name}
                          value={examData[field.name]}
                          onChange={handleExamChange}
                        />
                      </Form.Group>
                    </Col>
                  ))}

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Number of Sets</Form.Label>
                      <Form.Control
                        type="number"
                        min="1"
                        name="sets"
                        value={numSets}
                        onChange={handleNumSetsChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Dynamically Generated SET Input Fields */}
                <Row className="mt-3">
                  {Array.from({ length: numSets }, (_, index) => (
                    <Col md={1} key={index} className="my-2">
                      <Form.Group>
                        {/* <Form.Label>SET {String.fromCharCode(65 + index)}</Form.Label> */}
                        <Form.Control
                          type="text"
                          readOnly
                          value={`SET ${String.fromCharCode(65 + index)}`}
                        />
                      </Form.Group>
                    </Col>
                  ))}
                </Row>
                {/* </Row> */}
              </Form>
              <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  onClick={handleTabSave}
                  className="mt-4"
                >
                  Save
                </Button>
              </div>

              <hr />
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
                      onChange={(e) => {
                        let newQuestions = [...questions];
                        newQuestions[index].question = e.target.value;
                        setQuestions(newQuestions);
                      }}
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
                        onChange={(e) => {
                          let newQuestions = [...questions];
                          newQuestions[index].options[optIndex] =
                            e.target.value;
                          setQuestions(newQuestions);
                        }}
                      />
                    ))}
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter correct answer"
                      value={q.answer}
                      onChange={(e) => {
                        let newQuestions = [...questions];
                        newQuestions[index].answer = e.target.value;
                        setQuestions(newQuestions);
                      }}
                    />
                  </Form.Group>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteQuestion(q.id)}
                  >
                    Delete Question
                  </Button>
                </div>
              ))}
              <Button variant="success" onClick={handleAddQuestion}>
                <FaPlus /> Add Another Question
              </Button>

              <Row>
                {[
                  { label: "Total Questions", defaultValue: "" },
                  { label: "Right Answer", defaultValue: 4 },
                  { label: "Total Marks", defaultValue: "" },
                  { label: "Wrong Answer", defaultValue: -1 },
                ].map((field, idx) => (
                  <Col md={3} key={idx}>
                    <Form.Group>
                      <Form.Label>{field.label}:</Form.Label>
                      <Form.Control
                        type="number"
                        defaultValue={field.defaultValue}
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      </Card.Body>
    </>
  );
};

export default ExQuestion;
