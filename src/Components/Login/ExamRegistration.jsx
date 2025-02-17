import React, { useState } from "react";

import { Button, Table, Card } from "react-bootstrap";

const ExamRegistration = () => {
    const [activeExam, setActiveExam] = useState("Exam 1");

    const examData = {
      "Exam 1": (
          <Table striped bordered hover>
          <thead>
            <tr>
            <th>year</th>
              <th>Exam Name</th>
              <th>Student Name</th>
              <th>Regd.No.</th>
              <th>Hall Ticket</th>
              <th>Duration</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Sample Exam 3</td>
              <td>simta rani</td>
              <td>7525652656</td>
              <td><Button variant="link">Download</Button></td>
              <td>90</td>
              <td>Pass</td>
            </tr>
          </tbody>
        </Table>
      ),
      "Exam 2": (
          <Table striped bordered hover>
          <thead>
            <tr>
            <th>year</th>
              <th>Exam Name</th>
              <th>Student Name</th>
              <th>Regd.No.</th>
              <th>Hall Ticket</th>
              <th>Duration</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Sample Exam 3</td>
              <td>Simta</td>
              <td>7525652656</td>
              <td><Button variant="link">Download</Button></td>
              <td>90</td>
              <td>Pass</td>
            </tr>
          </tbody>
        </Table>
      ),
      "Exam 3": (
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>year</th>
              <th>Exam Name</th>
              <th>Student Name</th>
              <th>Regd.No.</th>
              <th>Hall Ticket</th>
              <th>Duration</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Sample Exam 3</td>
              <td>Simta</td>
              <td>7525652656</td>
              <td><Button variant="link">Download</Button></td>
             
              <td>90</td>
              <td>Pass</td>
            </tr>
          </tbody>
        </Table>
      ),
    };
  return (
    <>
     <Card.Body>
      <div>
        {Object.keys(examData).map((exam) => (
          <Button
            key={exam}
            className={`my-2 mx-2 ${activeExam === exam ? "btn-primary" : "btn-secondary"}`}
            onClick={() => setActiveExam(exam)}
          >
            {exam}
          </Button>
        ))}
      </div>
      {examData[activeExam]}
    </Card.Body>
    </>
  )
}

export default ExamRegistration
