import React, { useState } from "react";
import {
  Card,
  Image,
  Button,
  ListGroup,
  Form,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import { FaPlus, FaEdit } from "react-icons/fa";
import "../../assets/css/costume.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ExamResults = () => {
  const navigate = useNavigate();
  const [savedExams, setSavedExams] = useState([
    {
      id: 1,
      year: "2024",
      examName: "Physics Exam",
      studentName: "John Doe",
      regdNo: "12345",
      fullMark: "100",
      secureMark: "85",
      certificate: "Issued",
    },
    {
      id: 2,
      year: "2023",
      examName: "Maths Exam",
      studentName: "Jane Smith",
      regdNo: "67890",
      fullMark: "100",
      secureMark: "92",
      certificate: "Issued",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const [newExam, setNewExam] = useState({
    year: "",
    examName: "",
    studentName: "",
    regdNo: "",
    fullMark: "",
    secureMark: "",
    certificate: "",
  });

  const handleTabView =(exam) =>{ 
    setSelectedExam(exam);
    setShowPopup(true);
  }
  const handleClose = () => {
    setShowPopup(false);
    setSelectedExam(null);
  };

  const handleSave = () => {
    if (
      newExam.year &&
      newExam.examName &&
      newExam.studentName &&
      newExam.regdNo &&
      newExam.fullMark &&
      newExam.secureMark &&
      newExam.certificate
    ) {
      setSavedExams([...savedExams, { id: savedExams.length + 1, ...newExam }]);
      handleClose();
    } else {
      alert("Please fill all fields.");
    }
  };


  return (
    <>
      <Card.Body>
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
                    <p className="mb-0 text-muted"> {exam.year}</p>
                    <p className="mb-0 text-muted"> {exam.studentName}</p>
                    <p className="mb-0 text-muted"> {exam.regdNo}</p>
                    <p className="mb-0 text-muted"> {exam.fullMark}</p>
                    <p className="mb-0 text-muted"> {exam.secureMark}</p>
                    <p className="mb-0 text-muted"> {exam.certificate}</p>
                  </div>
                </div>
              </div>
              <Button variant="warning" className="px-3 py-1 d-flex align-items-center gap-2 " onClick={handleTabView}>
                <FaEdit size={18} />
                <span>
                  <strong>View</strong>
                </span>
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* PopUp Modal */}
        {showPopup && selectedExam && (
  <div className="popup-overlay d-flex justify-content-center align-items-center vh-100">
    <div className="Res-popup-container animate-popup container-fluid p-3 rounded shadow" style={{ maxWidth: "90vw" }}>
      <h5 className="mb-3 text-center">Exam Details</h5>

      {/* Scrollable Table */}
      <div className="table-responsive">
        <Table className="exam-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Exam</th>
              <th>Student</th>
              <th>Regd. No.</th>
              <th>Hall Ticket</th>
              <th>Duration</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3435</td>
              <td>{selectedExam.examName}</td>
              <td>{selectedExam.studentName}</td>
              <td>{selectedExam.regdNo}</td>
              <td> <Link to={'/hall-ticket'}> 
                                               Download
                                           </Link></td>
              <td>{selectedExam.fullMark}</td>
              <td>{selectedExam.secureMark}</td>
            </tr>
            <tr>
              <td>{selectedExam.year}</td>
              <td>{selectedExam.examName}</td>
              <td>{selectedExam.studentName}</td>
              <td>{selectedExam.regdNo}</td>
              <td>{selectedExam.hallTicket}</td>
              <td>{selectedExam.fullMark}</td>
              <td>{selectedExam.secureMark}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      {/* Button Section */}
     <div className="d-flex justify-content-end gap-2 mt-3">
             <Button variant="secondary" onClick={handleClose}>
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

export default ExamResults;
