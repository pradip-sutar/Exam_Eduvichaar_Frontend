import React, { useRef } from "react";
import { Container, Card, Row, Col, Button, Image } from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
const MyAnswersheet = () => {
  const myanswerSheetRef = useRef();

  const handleDownloadPDF = () => {
    const input = myanswerSheetRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const margin = 10;
      const imgWidth = pageWidth - 2 * margin;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", margin, 10, imgWidth, imgHeight);
      pdf.save("MyAnswerSheet.pdf");
    });
  };

  const examDetails = {
    examName: "Mathematics Final Exam",
    set: "A",
    date: "2025-02-20",
    year: "2025",
    duration: "2 Hours",
    type: "Multiple Choice",
    fullMark: "100",
    purpose: "Final Term Assessment",
    StudentName: "Rajendra",
    StudentId: "875578567",
    RegdNo: "78767389",
    Time: "2:00pm",
    secureMarks: "456",
    totalqestion: "100",
    attamptedqestion: "70",
  };

  const questions = [
    {
      question: "What is the first planet of the Solar system?",
      correctAnswer: "A",
      answerText: "Mercury",
      myResOption: "C",
      myResponse: "Venus",
      correctAnsPoint: "+1",
      WrongAnsPoint: "-1",
    },
    {
      question: "What is the capital of France?",
      correctAnswer: "B",
      answerText: "Paris",
      myResOption: "C",
      myResponse: "Berlin",
      correctAnsPoint: "+1",
      WrongAnsPoint: "-1",
    },
    {
      question: "Who wrote 'Hamlet'?",
      correctAnswer: "C",
      answerText: "Shakespeare",
      myResOption: "A",
      myResponse: "Shakespeare",
      correctAnsPoint: "+1",
      WrongAnsPoint: "-1",
    },
  ];

  return (
    <>
      <Container
        className="mt-5"
        style={{ maxWidth: "900px", fontSize: "18px" }}
      >
        <div ref={myanswerSheetRef}>
          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
            My Answer Sheet
          </h2>

          <Card className="p-4 border" style={{ fontSize: "16px" }}>
            <Row>
              <Col md={6}>
                <strong>Exam Name:</strong> {examDetails.examName}
              </Col>
              <Col md={4} className="text-center">
                <strong>Set:</strong> {examDetails.set}
              </Col>
              <Col md={2}>
                <Image
                  src="assets/images/logoAdmin.png"
                  width={75}
                  height={75}
                  className="text-end"
                  style={{ top: "-5px", position: "absolute", right: "15px" }}
                />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={3}>
                <strong>Student Name:</strong> {examDetails.StudentName}
              </Col>
              <Col md={3}>
                <strong>Student ID:</strong> {examDetails.StudentId}
              </Col>
              <Col md={3}>
                <strong>Regd. No:</strong> {examDetails.RegdNo}
              </Col>
              <Col md={3}>
                <strong>Time:</strong> {examDetails.Time}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={3}>
                <strong>Date:</strong> {examDetails.date}
              </Col>
              <Col md={3}>
                <strong>Year:</strong> {examDetails.year}
              </Col>
              <Col md={3}>
                <strong>Duration:</strong> {examDetails.duration}
              </Col>
              <Col md={3}>
                <strong>Full Mark:</strong> {examDetails.fullMark}
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={4}>
                <strong>Exam Type:</strong> {examDetails.type}
              </Col>
              <Col md={4}>
                <strong>Purpose:</strong> {examDetails.purpose}
              </Col>
              <Col md={4}>
                <strong>Secure Marks:</strong> {examDetails.secureMarks}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col md={4}>
                <strong>Total Qestion:</strong> {examDetails.totalqestion}
              </Col>
              <Col md={4}>
                <strong>Attampted Qestion:</strong>{" "}
                {examDetails.attamptedqestion}
              </Col>
            </Row>
          </Card>

          <Card className="p-4 border mt-4" style={{ fontSize: "16px" }}>
            {questions.map((q, index) => (
              <div key={index} className="mb-3">
                <p className="mb-1">
                  <strong>Q{index + 1}:</strong> {q.question}
                </p>
                <Row>
                  <Col md={4}>
                    {" "}
                    <p>
                      <strong>Ans:</strong> {q.correctAnswer} - {q.answerText}{" "}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p>
                      {" "}
                      <strong>My Response: </strong>
                      {q.myResOption} - {q.myResponse}{" "}
                    </p>
                  </Col>
                  <Col md={4}>
                    <p>
                      {" "}
                      <strong>Marks:</strong> {q.correctAnsPoint}{" "}
                    </p>
                  </Col>
                </Row>
              </div>
            ))}
          </Card>
        </div>

        <div className="text-center mt-4">
          <Button variant="primary" size="lg" onClick={handleDownloadPDF}>
            Download PDF
          </Button>
        </div>
      </Container>
    </>
  );
};

export default MyAnswersheet;
