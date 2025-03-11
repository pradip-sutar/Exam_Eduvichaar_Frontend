import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Row, Col, Button } from "react-bootstrap";
import { FaPlus, FaTrash } from "react-icons/fa";

const AddNewQuestionFormPage = () => {

    const [questions, setQuestions] = useState(() => {
        return JSON.parse(localStorage.getItem("questions")) || [];
      });
    
      // Initialize setQuestionsMap from localStorage
      const [setQuestionsMap, setSetQuestionsMap] = useState(() => {
        return JSON.parse(localStorage.getItem("setQuestionsMap")) || {};
      });

  const navigate = useNavigate();
  const [examData, setExamData] = useState({
    examName: "",
    examType: "",
    purpose: "",
    company: "",
    year: "",
    duration: "",
    date: "",
    image: null,
  });
  const [numSets, setNumSets] = useState(1);
  const [selectedSet, setSelectedSet] = useState("SET A");
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
//   const [setQuestionsMap, setSetQuestionsMap] = useState({});

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
    if (!selectedExam) {

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
  }
};

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

  const handleAnswerSelect = (qIndex, optIndex) => {
      const updatedQuestions = shuffledQuestions.map((q, index) =>
        index === qIndex
          ? { ...q, answer: String.fromCharCode(65 + optIndex) }
          : q
      );
      setShuffledQuestions(updatedQuestions);
      setQuestions(updatedQuestions);
    };
  
    const [savedExams, setSavedExams] = useState(() => {
      return JSON.parse(localStorage.getItem("savedExams")) || [];
    });
  
 

  

  const handleNumSetsChange = (e) => {
    setNumSets(Number(e.target.value));
  };
  

  
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

    const setNames = Array.from(
      { length: numSets },
      (_, index) => `SET ${String.fromCharCode(65 + index)}`
    );

    const questionSets = setNames.map((setName) => {
      let questionsForSet =
        setQuestionsMap[setName] || shuffleArray([...questions]);
  
      // Format the questions with question_id, question_text, and options as an array
      const formattedQuestions = questionsForSet.map((q, index) => ({
        question_id: index + 1,
        question_text: q.question,
        options: q.options,
      }));
  
      // Build answers object mapping question_id to the correct option text
      const answersForSet = questionsForSet.reduce((acc, q, index) => {
        const answerIndex = q.answer.charCodeAt(0) - 65; // Convert "A"->0, "B"->1, etc.
        acc[index + 1] = q.options[answerIndex];
        return acc;
      }, {});
  
      return {
        set_name: setName,
        questions: formattedQuestions,
        answers: answersForSet,
      };
    });
  
    console.log(JSON.stringify({ question_sets: questionSets }, null, 2));
  
    const newExam = {
      id: Date.now(),
      ...examData,
      sets: setNames, // Array of set names for view consistency
      image: examData.image || "assets/images/sidebar_widget_care.png",
      question_sets: questionSets, 
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
    setSetQuestionsMap({});
    // handleClosePopup();
 

  
    navigate("/ExaminerLogin");
  };

  return (
    <div className="container mt-5">
      <div>
        {/* Logo above the heading */}
        <div className="text-left mb-3">
          <img
            src="assets/images/logo-amin.png" // Replace with your logo path
            alt="Logo"
            style={{ maxWidth: "100px", height: "auto" }} // Adjust size as needed
          />
        </div>

        {/* Heading and Back Button in the same line */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h2 className="breadCumb ml-2 mb-0">Add New Exam</h2>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-primary btn-sm waves-effect waves-light"
            
          >
            <span className="mdi mdi-keyboard-backspace"></span> 
          </button>
        </div>
      </div>
      <Form>
                     <Row className="mt-3 mb-3 d-flex align-items-center">
                       <Col md={4} xs={12} className="mb-3 mb-md-0">
                         <Form.Group>
                           <Form.Label>Upload Image</Form.Label>
                           <Form.Control type="file" onChange={handleImageUpload} />
                         </Form.Group>
                       </Col>
                       <Col md={4} className="mb-3 mb-md-0">
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
                         <Col md={4} key={idx} className="mb-3 mb-md-0">
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
                               selectedSet ===
                               `SET ${String.fromCharCode(65 + index)}`
                                 ? "primary"
                                 : "outline-primary"
                             }
                             onClick={() =>
                               handleSetChange(
                                 `SET ${String.fromCharCode(65 + index)}`
                               )
                             }
                           >
                             {`SET ${String.fromCharCode(65 + index)}`}
                           </Button>
                         </Col>
                       ))}
                     </Row>
                   </Form>
                   <div className="d-flex justify-content-end">
                <Button
                  variant="primary"
                  onClick={handleTabSave}
                  className="mb-3 mb-md-0"
                >
                  Save
                </Button>
              </div>
       <hr />
                    <h5 className="mt-3">Add Question:</h5>
                    {shuffledQuestions.length === 0 && (
                      <p>
                        No questions added yet. Click "Add Another Question" to start.
                      </p>
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
                              <Col xs="auto" className="mb-3 mb-md-0">
                                <strong>{String.fromCharCode(65 + optIndex)}.</strong>
                              </Col>
                              <Col xs={6} className="mb-3 mb-md-0">
                                <Form.Control
                                  type="text"
                                  value={option}
                                  onChange={(e) =>
                                    handleOptionChange(
                                      index,
                                      optIndex,
                                      e.target.value
                                    )
                                  }
                                  placeholder={`Option ${String.fromCharCode(
                                    65 + optIndex
                                  )}`}
                                />
                              </Col>
                              <Col xs="auto" className="mb-3 mb-md-0">
                                <Form.Check
                                  type="radio"
                                  name={`answer-${q.id}`}
                                  checked={
                                    q.answer === String.fromCharCode(65 + optIndex)
                                  } 
                                  onChange={() => handleAnswerSelect(index, optIndex)}
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
                        <Col md={3} key={idx} className="mb-3 mb-md-0">
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
    
  );
};

export default AddNewQuestionFormPage;