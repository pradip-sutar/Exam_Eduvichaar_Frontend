import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import Navbar from "../Header/Navbar";
import Footer from "../Footer";

const ResultPageViewTable = () => {
  const { examId } = useParams();
  const [exam, setExam] = useState({});

  useEffect(() => {
    const savedExams = [
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
    ];

    const selectedExam = savedExams.find((exam) => exam.id === parseInt(examId));

    if (selectedExam) {
      setExam(selectedExam);
    }
  }, [examId]);

  return (
    <div className="bg-primary header-bg">
      <Navbar />

      <section className="breadcrumbs-page">
        <div className="container">
          <h1>Examiner Login</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">
                  <i className="bi-house" />
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" style={{ textDecoration: "none" }}>
                  Pages
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a href="#" style={{ textDecoration: "none" }}>
                  Examiner Login
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <div className="container mt-4">
        <h2 className="mb-3">{exam.examName} Details</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Year</th>
              <th>Student Name</th>
              <th>Registration No</th>
              <th>Full Mark</th>
              <th>Secure Mark</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{exam.year || "N/A"}</td>
              <td>{exam.studentName || "N/A"}</td>
              <td>{exam.regdNo || "N/A"}</td>
              <td>{exam.fullMark || "N/A"}</td>
              <td>{exam.secureMark || "N/A"}</td>
              <td>{exam.certificate || "N/A"}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Footer />
    </div>
  );
};

export default ResultPageViewTable;
