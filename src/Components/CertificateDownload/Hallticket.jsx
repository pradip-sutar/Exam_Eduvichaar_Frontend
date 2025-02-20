import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const HallTicket = () => {
  const handleDownload = () => {
    const card = document.getElementById("hallTicketCard"); 

    html2canvas(card, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("HallTicket.pdf");
    });
  };

  return (
    <Container className="mt-4 text-center">
      <Card id="hallTicketCard" className="p-4 border-1" style={{ maxWidth: "800px", margin: "auto" }}>

        <Row className="text-center mb-3">
          <Col>
            <Image src="assets/images/logoAdmin.png" width={100} height={100} />
            <h5 className="mt-2">EDUVICHAAR UNIVERSITY</h5>
            <hr />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <div className="border p-2 text-center">
              <Image src="assets/images/sidebar_widget_care.png" rounded width={70} height={70} />
              <p className="mb-0">Photo of Candidate</p>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={6}><strong>Regd. No:</strong> 6473289</Col>
              <Col md={6}><strong>Full Name:</strong> Manasmita</Col>
              <Col md={6}><strong>Exam Center:</strong> Nandanvihar</Col>
              <Col md={6}><strong>Student ID:</strong> 34</Col>
            </Row>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={6}><strong>Exam Date:</strong> 12-02-2024</Col>
          <Col md={6}><strong>Exam Time:</strong> 10:00 AM - 12:00 PM</Col>
          <Col md={6}><strong>Exam Mode:</strong> Online</Col>
          <Col md={6}><strong>Total Marks:</strong> 100</Col>
        </Row>
      </Card>
      
      <button onClick={handleDownload} className="btn btn-primary mb-3 mt-3">
        Download as PDF
      </button>
    </Container>
  );
};

export default HallTicket;
