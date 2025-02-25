import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ExamLogin.css";
import { useNavigate } from "react-router-dom";

const ExamLogin = () => {
  const [questions] = useState([
    {
      id: 1,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 2,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 3,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 4,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 5,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 6,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 7,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 8,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 9,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 10,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 11,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 12,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 13,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 14,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 15,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 16,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 17,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 18,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 19,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 20,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 21,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 22,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 23,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 24,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 25,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 26,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 27,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 28,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 29,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 30,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 31,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 32,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 33,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 34,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 35,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 36,
      text: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id: 37,
      text: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
    },
    {
      id: 38,
      text: "Who wrote the Mahabharata?",
      options: ["Valmiki", "Vyasa", "Tulsidas", "Kalidas"],
    },
    {
      id: 39,
      text: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
    {
      id: 40,
      text: "What is the national animal of Bgh?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    enterFullScreen();
  }, []);

  const handleAnswerChange = (qId, option) => {
    setSelectedAnswers({ ...selectedAnswers, [qId]: option });
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", selectedAnswers);
    setShowModal(true); 
  };

  const handleModalConfirm = () => {
    setShowModal(false); 
    exitFullScreen(); 
    navigate("/Studentpagelogin"); 
  };

  const handleModalClose = () => {
    setShowModal(false); 
  };

  return (
    <>
      <main id="body-content" className="bg-white" style={{ height: "95vh", margin: 0, padding: 0 }}>
        <Container fluid className="mt-4 h-100">
          <Card className="p-5 mb-4 h-100">
            <Row>
              <Col md={12} className="text-center">
                <Image
                  src="assets/images/sidebar_widget_care.png"
                  roundedCircle
                  width={60}
                  height={60}
                  className="me-3 mb-2"
                />
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center">
              <Col md={8}>
                <h3 className="fs-2">CGL EXAM</h3>
                <p className="fs-5">
                  <strong>Description:</strong> Sample description of the exam.
                </p>
              </Col>
              <Col md={4} className="text-end">
                <p className="fs-5">
                  <strong>Duration:</strong> 100 Mins.
                </p>
                <p className="fs-5">
                  <strong>Total Marks:</strong> 100
                </p>
                <p className="fs-5">
                  <strong>Total Questions:</strong> {questions.length}/20
                </p>
              </Col>
            </Row>
            <hr />

            <Row>
              <Col md={8}>
                <Card className="p-3 shadow-sm border-0 mb-3">
                  <h5 className="mb-3 text-secondary fs-2">
                    {currentQuestion + 1}. {questions[currentQuestion].text}
                  </h5>
                  <Form>
                    {questions[currentQuestion].options.map((option, index) => (
                      <Form.Check
                        key={index}
                        type="radio"
                        label={option}
                        name={`question-${questions[currentQuestion].id}`}
                        checked={
                          selectedAnswers[questions[currentQuestion].id] === option
                        }
                        onChange={() =>
                          handleAnswerChange(questions[currentQuestion].id, option)
                        }
                        className="mb-3 fs-2"
                      />
                    ))}
                  </Form>
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="secondary"
                      onClick={handleBack}
                      disabled={currentQuestion === 0}
                      size="lg"
                    >
                      Previous
                    </Button>
                    <Button
                      variant="success"
                      onClick={handleNext}
                      disabled={currentQuestion === questions.length - 1}
                      size="lg"
                    >
                      Next
                    </Button>
                  </div>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="p-3 shadow-sm border-0 mb-3">
                  <h5 className="mb-3 fs-2">Questions</h5>
                  <div className="ExamLog-question-grid" style={{ overflowY: "scroll", maxHeight: "20rem" }}>
                    {questions.map((q, index) => (
                      <Button
                        key={q.id}
                        variant={
                          selectedAnswers[q.id]
                            ? "success"
                            : currentQuestion === index
                            ? "primary"
                            : "outline-secondary"
                        }
                        onClick={() => setCurrentQuestion(index)}
                        className="question-button"
                      >
                        {q.id}
                      </Button>
                    ))}
                  </div>
                </Card>
              </Col>
            </Row>

            <div className="mt-3 text-center fs-2">
              <Button variant="success" size="lg" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Card>
        </Container>

        {/* submission confirmation */}
        <Modal show={showModal} onHide={handleModalClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Submission Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your answers have been submitted! Do you want to proceed to the login page?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleModalConfirm}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
};

export default ExamLogin;