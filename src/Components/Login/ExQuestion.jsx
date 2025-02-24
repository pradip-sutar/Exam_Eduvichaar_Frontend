import React, { useState, useEffect } from "react";
import { Card, Image, Button, ListGroup, Form, Row, Col } from "react-bootstrap";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "../../assets/css/costume.css";

const ExQuestion = () => {
  const [questions, setQuestions] = useState(() => {
    return JSON.parse(localStorage.getItem("questions")) || [];
  });

  // Initialize setQuestionsMap from localStorage
  const [setQuestionsMap, setSetQuestionsMap] = useState(() => {
    return JSON.parse(localStorage.getItem("setQuestionsMap")) || {};
  });

  const [shuffledQuestions, setShuffledQuestions] = useState(questions); 
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [numSets, setNumSets] = useState(1);
  const [selectedSet, setSelectedSet] = useState("SET A");
  const [examData, setExamData] = useState({
    examName: "",
    examType: "",
    purpose: "",
    company: "",
    year: "",
    duration: "",
    date: "",
  });

  // New state for view popup
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  const shuffleArray = (array) => {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleSetChange = (newSet) => {
    setSelectedSet(newSet);
    const savedSets = JSON.parse(localStorage.getItem("setQuestionsMap")) || {};

    if (!savedSets[newSet]) {
      const shuffled = shuffleArray(questions);
      const updatedSets = { ...savedSets, [newSet]: shuffled };
      localStorage.setItem("setQuestionsMap", JSON.stringify(updatedSets));
      setSetQuestionsMap(updatedSets);
      setShuffledQuestions(shuffled);
    } else {
      setShuffledQuestions(savedSets[newSet]);
    }
  };

  const handleQuestionChange = (qIndex, newQuestion) => {
    const updatedQuestions = shuffledQuestions.map((q, index) =>
      index === qIndex ? { ...q, question: newQuestion } : q
    );
    setShuffledQuestions(updatedQuestions);
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, optIndex, newOption) => {
    const updatedQuestions = shuffledQuestions.map((q, index) =>
      index === qIndex
        ? {
            ...q,
            options: q.options.map((opt, i) =>
              i === optIndex ? newOption : opt
            ),
          }
        : q
    );
    setShuffledQuestions(updatedQuestions);
    setQuestions(updatedQuestions);
  };

  

  const handleAddNew = () => setShowQuestionForm(true);
  const handleClosePopup = () => setShowQuestionForm(false);

  const handleExamChange = (e) => {
    setExamData({ ...examData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setExamData({ ...examData, image: imageUrl });
    }
  };


  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now(), // Using timestamp for unique ID
      question: "",
      options: ["", "", "", ""],
      answer: "",
    };
    setQuestions([...questions, newQuestion]);
    setShuffledQuestions([...shuffledQuestions, newQuestion]);
  };
 
  const handleDeleteQuestion = (id) => {
    const updatedQuestions = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
    setShuffledQuestions(updatedQuestions);
  };

  // const handleDeleteQuestion = (id) => {
  //   const updatedQuestions = questions.filter((q) => q.id !== id);
  //   setQuestions(updatedQuestions);
  //   localStorage.setItem("questions", JSON.stringify(updatedQuestions));
  // };

  const handleAnswerSelect = (qIndex, selectedOption) => {
    const updatedQuestions = shuffledQuestions.map((q, index) =>
      index === qIndex ? { ...q, answer: selectedOption } : q
    );
    setShuffledQuestions(updatedQuestions);
    setQuestions(updatedQuestions);
  };

  const [savedExams, setSavedExams] = useState(() => {
    return JSON.parse(localStorage.getItem("savedExams")) || [];
  });

  const handleTabSave = () => {
    if (!examData.examName || !examData.company) {
      alert("Please fill in all required fields.");
      return;
    }

    
    // Validate that all questions have content
    const invalidQuestions = shuffledQuestions.some(
      (q) => !q.question || q.options.some((opt) => !opt) || !q.answer
    );
    if (invalidQuestions) {
      alert("Please fill in all questions, options, and select answers.");
      return;
    }

    const setNames = Array.from({ length: numSets }, (_, index) =>
      `SET ${String.fromCharCode(65 + index)}`
    );

    const newExam = {
      id: Date.now(),
      ...examData,
      sets: setNames, // This is an array
      image: examData.image || "assets/images/sidebar_widget_care.png",
      questions: shuffledQuestions,
    };

    const updatedExams = [...savedExams, newExam];
    setSavedExams(updatedExams);
    localStorage.setItem("savedExams", JSON.stringify(updatedExams));

   
    setExamData({
      examName: "",
      examType: "",
      purpose: "",
      company: "",
      year: "",
      duration: "",
      date: "",
      image: null,
    });
    setQuestions([]);
    setShuffledQuestions([]);
    setNumSets(1);
    handleClosePopup();
  };

  const handleNumSetsChange = (e) => {
    setNumSets(Number(e.target.value));
  };

  const handleViewClick = (exam) => {
    setSelectedExam(exam);
    setShowViewPopup(true);
  };

  const handleCloseViewPopup = () => {
    setShowViewPopup(false);
    setSelectedExam(null);
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
            <ListGroup.Item key={exam.id} className="d-flex flex-column py-3">
              <div className="d-flex align-items-center gap-3">
                <Image
                  src={exam.image}
                  roundedCircle
                  width={50}
                  height={50}
                  className="me-3"
                />
                <div>
                  <h6 className="mb-1 fw-bold">{exam.examName}</h6>
                  <div className="d-flex flex-row gap-3 text-muted">
                    <p className="mb-0">Exam Type : {exam.examType}</p> 
                    <p className="mb-0">Year : {exam.year}</p>
                    <p className="mb-0">Duration : {exam.duration}</p>
                    <p className="mb-0">
                      Sets - {Array.isArray(exam.sets) ? exam.sets.join(", ") : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end mt-3">
              <Button
                  variant="warning"
                  className="px-3 py-1 d-flex align-items-center gap-2"
                  onClick={() => handleViewClick(exam)}
                >
                  <FaEdit size={18} />
                  <span>
                    <strong>View</strong>
                  </span>
                </Button>
              </div>
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
                <Row className="mt-3 mb-3 d-flex align-items-center">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Upload Image</Form.Label>
                      <Form.Control type="file" onChange={handleImageUpload} />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Exam Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="examName"
                        value={examData.examName}
                        onChange={handleExamChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Exam Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="examType"
                        value={examData.examType}
                        onChange={handleExamChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  {[
                    { label: "Purpose", name: "purpose" },
                    { label: "Company", name: "company" },
                    { label: "Year", name: "year", type: "number" },
                    { label: "Duration", name: "duration", type: "time" },
                    { label: "Date", name: "date", type: "date" },
                  ].map((field, idx) => (
                    <Col md={4} key={idx}>
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type || "text"}
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
                <Row className="mt-3">
                  {Array.from({ length: numSets }, (_, index) => (
                    <Col md={1} key={index} className="my-2">
                      <Button
                        variant={
                          selectedSet === `SET ${String.fromCharCode(65 + index)}`
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() =>
                          handleSetChange(`SET ${String.fromCharCode(65 + index)}`)
                        }
                      >
                        {`SET ${String.fromCharCode(65 + index)}`}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </Form>
              <div className="d-flex justify-content-end">
                <Button variant="primary" onClick={handleTabSave} className="mt-4">
                  Save
                </Button>
              </div>
              <hr />
              <h5 className="mt-3">Add Question:</h5>
              {shuffledQuestions.length === 0 && (
                <p>No questions added yet. Click "Add Another Question" to start.</p>
              )}


              {shuffledQuestions.map((q, index) => (
                <div key={q.id} className="border p-3 mb-3 rounded">
                  <Row className="mb-3">
                    <Col>
                      <Form.Group>
                        <Form.Label>
                          <strong>Q {index + 1}:</strong>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          value={q.question}
                          onChange={(e) =>
                            handleQuestionChange(index, e.target.value)
                          }
                          placeholder="Enter question here"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="mb-3">
                    {q.options.map((option, optIndex) => (
                      <Row key={optIndex} className="align-items-center mb-2">
                        <Col xs="auto">
                          <strong>{String.fromCharCode(65 + optIndex)}.</strong>
                        </Col>
                        <Col xs={6}>
                          <Form.Control
                            type="text"
                            value={option}
                            onChange={(e) =>
                              handleOptionChange(index, optIndex, e.target.value)
                            }
                            placeholder={`Option ${String.fromCharCode(
                              65 + optIndex
                            )}`}
                          />
                        </Col>
                        <Col xs="auto">
                          <Form.Check
                            type="radio"
                            name={`answer-${q.id}`}
                            checked={q.answer === option}
                            onChange={() => handleAnswerSelect(index, option)}
                          />
                        </Col>
                      </Row>
                    ))}
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteQuestion(q.id)}
                  >
                    <FaTrash /> Delete Question
                  </Button>
                </div>
              ))}
              <Button variant="success" onClick={handleAddQuestion}>
                <FaPlus /> Add Another Question
              </Button>
              <Row>
                {[
                  { label: "Total Questions", defaultValue: "" },
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

        {/* View Exam Popup */}
{showViewPopup && selectedExam && (
  <div className="Que-popup-overlay" onClick={handleCloseViewPopup}>
     <div
      className="Que-popup-container animate-popup"
      onClick={(e) => e.stopPropagation()}
      style={{ padding: "20px", background: "#f9f9f9", borderRadius: "10px" }}
    >
      <h5 className="mt-3">Exam Details: {selectedExam.examName}</h5>
      <Row className="mt-3 mb-3 d-flex align-items-center">
        <Col md={2}>
          <Image
            src={selectedExam.image}
            roundedCircle
            width={100}
            height={100}
          />
        </Col>
        <Col md={10}>
          <Row>
            <Col md={4}>
              <p><strong>Exam Type:</strong> {selectedExam.examType}</p>
            </Col>
            <Col md={4}>
              <p><strong>Purpose:</strong> {selectedExam.purpose}</p>
            </Col>
            <Col md={4}>
              <p><strong>Company:</strong> {selectedExam.company}</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <p><strong>Year:</strong> {selectedExam.year}</p>
            </Col>
            <Col md={4}>
              <p><strong>Duration:</strong> {selectedExam.duration}</p>
            </Col>
            <Col md={4}>
              <p><strong>Date:</strong> {selectedExam.date}</p>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <p><strong>Sets:</strong> {selectedExam.sets.join(", ")}</p>
            </Col>
          </Row>
        </Col>
      </Row>

      <hr />
      <h5 className="mt-3">Questions:</h5>

      {/* Dynamic Set Buttons */}
      <div className="d-flex gap-2 mb-3" style={{ flexWrap: "wrap" }}>
        {selectedExam.sets.map((setName, index) => (
          <Button
            key={setName}
            variant={selectedSet === setName ? "primary" : "outline-primary"}
            onClick={() => handleSetChange(setName)}
            style={{ marginBottom: "10px" }}
          >
            {setName}
          </Button>
        ))}
      </div>

      {/* Display Questions for the Selected Set */}
      <div className="questions-container" style={{ border: "1px solid #ccc", background: "#fff", padding: "15px", borderRadius: "5px" }}>
  {selectedExam.questions.length === 0 ? (
    <p>No questions available.</p>
  ) : (
    shuffledQuestions.map((q, index) => (
      <div key={q.id} className="mb-3">
        <p style={{ marginBottom: "10px" }}>
          <strong>Q {index + 1}:</strong> {q.question}
        </p>
        <div className="d-flex flex-column" style={{ gap: "5px" }}>
          {q.options.map((option, optIndex) => (
            <div key={optIndex} className="d-flex align-items-center" style={{ gap: "15px" }}>
            
              <strong>{String.fromCharCode(65 + optIndex)}.</strong>
              <span style={{ marginLeft: "5px" }}>{option}</span>
              <Form.Check
                type="radio"
                name={`answer-${q.id}`}
                checked={q.answer === option}
                readOnly
                disabled
                style={{ margin: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    ))
  )}
</div>

      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          onClick={handleCloseViewPopup}
          className="mt-4"
          style={{ borderRadius: "5px" }}
        >
          Close
        </Button>
      </div>
    </div>
  </div>
)}
      </Card.Body>
    </>
  );
};

export default ExQuestion;