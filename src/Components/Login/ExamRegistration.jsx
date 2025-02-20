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
import { Link } from "react-router-dom";
// import { jsPDF } from "jspdf";
// import certificateBackground from "../../assets/image/cert.png";
// import logoImage from "../../assets/image/LogoPropVichaar.png";
// import sealImage from "../../assets/image/logoAdmin.png";
// const generateCertificate = (exam) => {
//   const doc = new jsPDF("landscape");
//   const pageWidth = doc.internal.pageSize.getWidth();
//   const pageHeight = doc.internal.pageSize.getHeight();

//   // 1) Background
//   doc.addImage(certificateBackground, "PNG", 0, 0, pageWidth, pageHeight);

//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(28);

 
//   doc.setTextColor(232, 0, 0);
//   doc.text("Entrance", 40, 40);

  
//   doc.setTextColor(0, 0, 0);
  

 
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(10);
//   doc.setTextColor(80, 80, 80); 
//   doc.text("Entrance Exam for Good Learning", 40, 50);

  
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(18);
//   doc.setTextColor(0, 0, 0);
//   const certTitle = "CERTIFICATE";
//   let textWidth = doc.getTextWidth(certTitle);
//   doc.text(certTitle, pageWidth - textWidth - 40, 45);

  
//   doc.setFontSize(12);
//   doc.setTextColor(100);
//   const certSubtitle = "OF APPRECIATION";
//   textWidth = doc.getTextWidth(certSubtitle);
//   doc.text(certSubtitle, pageWidth - textWidth - 40, 60);

  
//   const sealSize = 60;
//   doc.addImage(sealImage, "PNG", pageWidth - sealSize - 40, 70, sealSize, sealSize);

 
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(14);
//   doc.setTextColor(0, 0, 0);
//   doc.text("This to Certify that", 40, 95);

 
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(20);
//   doc.setTextColor(232, 0, 0);
//   doc.text(exam?.studentName || "manasmita", 40, 110);

  
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(12);
//   doc.setTextColor(0, 0, 0);
//   doc.text(
//     "Has successfully completed all prescribed requirements and is hereby awarded",
//     40,
//     125
//   );
//   doc.text("the professional designation", 40, 132);


//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(14);
//   doc.text("Certified Lean Six Sigma Green Belt (CLSSGB)", 40, 148);

  
//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(12);
//   doc.text("The Exam was delivered via proctor", 40, 163);

 
//   doc.setFontSize(12);
//   doc.text("Certificate Number: G-XXXXX", 40, 178);
//   doc.text("Certification Date: DD Month, YYYY", 180, 178);

 
//   doc.setFontSize(10);
//   doc.text("__________________________", 40, 220);
//   doc.text("__________________________", 140, 220);

//   doc.text("CEO", 60, 230);
//   doc.text("Founder", 160, 230);


//   doc.save("Certificate.pdf");

// };

const ExamRegistration = () => {
   
   const [savedRegExams, SetSavedRegExams] = useState([
      {
        id: 1,
        year: "2024",
        examName: "Physics Exam",
        studentName: "John Doe",
        regdNo: "12345",
        hallTicket: "100",
        duration: "85",
        result: "Issued",
      },
      {
        id: 2,
        year: "2023",
        examName: "Maths Exam",
        studentName: "Jane Smith",
        regdNo: "67890",
        hallTicket: "100",
        duration: "92",
        result: "Issued",
      },
    ]);
  
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRegExam, SetSelectedRegExam] = useState(null);
  
    const [newRegExam, SetNewRegExam] = useState({
      year: "",
      examName: "",
      studentName: "",
      regdNo: "",
      hallTicket: "",
      duration: "",
      result: "",
    });
  
    const handleTabRegView =(exam) =>{ 
      SetSelectedRegExam(exam);
      setShowPopup(true);
    }
    const handleClose = () => {
      setShowPopup(false);
      SetSelectedRegExam(null);
    };
  
    const handleSave = () => {
      if (
        newRegExam.year &&
        newRegExam.examName &&
        newRegExam.studentName &&
        newRegExam.regdNo &&
        newRegExam.hallTicket &&
        newRegExam.duration &&
        newRegExam.result
      ) {
        SetSavedRegExams([...savedRegExams, { id: savedRegExams.length + 1, ...newRegExam }]);
        handleClose();
      } else {
        alert("Please fill all fields.");
      }
    };
    return (
    <>
    <Card.Body>
        <ListGroup>
          {savedRegExams.map((exam) => (
            <ListGroup.Item
              key={exam.id}
              className="d-flex align-items-center  container-fluid justify-content-between py-3"
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
                    <p className="mb-0 text-muted"> {exam.hallTicket}</p>
                    <p className="mb-0 text-muted"> {exam.duration}</p>
                    <p className="mb-0 text-muted"> {exam.result}</p>
                  </div>
                </div>
              </div>
              <Button variant="warning" className="px-3 py-1 d-flex align-items-center gap-2 " onClick={handleTabRegView}>
                <FaEdit size={18} />
                <span>
                  <strong>View</strong>
                </span>
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* PopUp Modal */}
        {showPopup && selectedRegExam && (
  <div className="popup-overlay">
    <div className="Res-popup-container animate-popup container-fluid" style={{ maxWidth: "90vw" }}>
      <h4 className="mb-3 text-center">Exam Details</h4>

      <Table 
  responsive 
  striped 
  bordered 
  hover 
  className="text-center exam-table" 
  // style={{ fontSize: "1.5rem", width: "100%", margin: "20px 0" }}
>
  <thead style={{ backgroundColor: "#f8f9fa", fontWeight: "bold" }}>
    <tr>
      <th>Year</th>
      <th>Exam Name</th>
      <th>Student Name</th>
      <th>Student ID</th>
      <th>Regd. No.</th>
      <th>Hall Ticket</th>
      <th>Duration</th>
      <th>Download</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{ height: "60px" }}>
      <td>2024</td>
      <td>{selectedRegExam.examName}</td>
      <td>{selectedRegExam.studentName}</td>
      <td>{selectedRegExam.studentId}</td>
      <td>{selectedRegExam.regdNo}</td>
      <td>{selectedRegExam.hallTicket}</td>
      <td>{selectedRegExam.duration}</td>
      <td>
      <Link to={'/certificate'}><Button variant="primary" >
      certificate
                    </Button></Link> <Link to={'/Answersheet'}><Button variant="primary" >
                    Answersheet
                    </Button></Link>  <Link to={'/MyAnswersheet'}><Button variant="primary" >
                    MyAnswersheet
                    </Button></Link>
      </td>
    </tr>MyAnswersheet
    <tr style={{ height: "60px" }}>
      <td>{selectedRegExam.year}</td>
      <td>{selectedRegExam.examName}</td>
      <td>{selectedRegExam.studentName}</td>
      <td>{selectedRegExam.studentId}</td>
      <td>{selectedRegExam.regdNo}</td>
      <td>{selectedRegExam.regdNo}</td>
      <td>{selectedRegExam.hallTicket}</td>
      <td>{selectedRegExam.duration}</td>
    </tr>
  </tbody>
</Table>


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
  )
}

export default ExamRegistration
