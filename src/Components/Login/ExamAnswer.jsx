import React, { useState } from "react";
import { Card, Button, ListGroup, Image } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import "../../assets/css/costume.css";

const ExamAnswer = () => {
  const [savedRegExams, SetSavedRegExams] = useState([
    { id: 1, year: "2024", examName: "Physics Exam", date: "12-02-1993", totalmark: "100", set: "SET A" },
    { id: 2, year: "2023", examName: "Maths Exam", date: "12-02-2024", totalmark: "45", set: "SET B" },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedRegExam, SetSelectedRegExam] = useState(null);
  const [selectedSet, setSelectedSet] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  const questions = [
    { question: "What is the first planet of the Solar system?", correctAnswer: "A", answerText: "No idea" },
    { question: "What is the capital of France?", correctAnswer: "B", answerText: "Paris" },
    { question: "Who wrote 'Hamlet'?", correctAnswer: "C", answerText: "Shakespeare" },
  ];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const handleTabRegView = (exam) => {
    SetSelectedRegExam(exam);
    setShowPopup(true);
    setSelectedSet(null); // Reset selected set
  };

  const handleClose = () => {
    setShowPopup(false);
    SetSelectedRegExam(null);
    setSelectedSet(null);
  };

  const handleSetClick = (setName) => {
    setSelectedSet(setName);
    setShuffledQuestions(shuffleArray(questions)); // Shuffle questions on set selection
  };

  return (
    <div>
      <Card.Body>
      <div className="exam-list-container" style={{
          overflowX: 'auto',
          maxWidth: '100rem',
         
        }}>
        <ListGroup className="exam-list" style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            // width: 'max-content' 
          }}>
          {savedRegExams.map((exam) => (
            <ListGroup.Item key={exam.id} className="d-flex align-items-center container-fluid justify-content-between py-3 table-responsive" style={{ 
              minWidth: '300px',    
                  maxWidth: '800px',    
                  width:'130%',
                  flexShrink: 0     
            }}>
              <div className="d-flex align-items-center gap-3">
                <Image src="assets/images/sidebar_widget_care.png" roundedCircle width={50} height={50} className="me-3" />
                <div style={{ flex: 1 }}>
                  <h6 className="mb-1 fw-bold">{exam.examName}</h6>
                  <div className="d-flex flex-row gap-3">
                    <p className="mb-0 text-muted">{exam.year}</p>
                    <p className="mb-0 text-muted">{exam.date}</p>
                    <p className="mb-0 text-muted">{exam.totalmark}</p>
                    <p className="mb-0 text-muted">{exam.set}</p>
                  </div>
                </div>
              </div>
              <Button variant="warning" className="mx-4 px-3 py-1 d-flex align-items-center gap-2" onClick={() => handleTabRegView(exam)}>
                
                <span><FaEdit size={18} className="mx-2"/><strong>View</strong></span>
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
</div>
        {/* PopUp Modal */}
        {showPopup && selectedRegExam && (
          <div className="popup-overlay ">
            <div className="Res-popup-container animate-popup container-fluid p-3 table-responsive custom-AnswerPop-width" 
            // style={{ maxWidth: "90vw",  }}
            >
              
              <div className="d-flex justify-content-start gap-3 my-3">
                {["SET A", "SET B", "SET C", "SET D", "SET E"].map((setName) => (
                  <Button key={setName} variant="outline-dark" className="px-1 py-1 px-lg-4 py-lg-2 px-md-4 py-md-2 " onClick={() => handleSetClick(setName)}>
                    {setName}
                  </Button>
                ))}
              </div>

              {/* Questions Section */}
              <div className="border p-3" style={{ minHeight: "200px", border: "1px solid gray", borderRadius: "5px", background: "#f8f9fa", textAlign: "left" }}>
                {selectedSet ? (
                  <div>
                    {shuffledQuestions.map((q, index) => (
                      <div key={index} className="mb-3">
                        <p className="mb-1 fw-bold">Q{index + 1}: {q.question}</p>
                        <p className="mb-0"><strong>Ans:</strong> {q.correctAnswer} – {q.answerText}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <strong className="text-start d-block">Here the questions will show</strong>
                )}
              </div>

              <div className="d-flex justify-content-end gap-2 mt-3">
                <Button variant="secondary" onClick={handleClose}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </Card.Body>
    </div>
  );
};

export default ExamAnswer;
