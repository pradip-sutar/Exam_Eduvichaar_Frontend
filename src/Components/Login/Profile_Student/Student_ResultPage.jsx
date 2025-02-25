import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Button,
  Table,
  Form,
  InputGroup,
} from "react-bootstrap";


const Student_ResultPage = () => {
  return (
    <div>
       <Card.Body>
      <div style={{ width: "100%", overflowX: "auto" }}>
        <Table striped bordered hover style={{ minWidth: "1000px" }}>
          <thead>
            <tr>
              <th>Year</th>
              <th>Exam Name</th>
              <th>Date</th>
              <th>Set</th>
              <th>Place</th>
              <th>Regd. No.</th>
              <th>Full Mark</th>
              <th>Secured Mark</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024</td>
              <td>Sample Exam</td>
              <td>10-10-2024</td>
              <td>A</td>
              <td>City Center</td>
              <td>100</td>
              <td>85</td>
              <td>56</td>
              <td>
                <div style={{ display: "flex", gap: "3px", flexWrap: "wrap" }}>
                  <Link to={"/certificate"}>
                    <Button variant="primary" size="sm" style={{ fontSize: "11px", maxWidth: "100px" }}>
                      Certificate
                    </Button>
                  </Link>
                  <Link to={"/Answersheet"}>
                    <Button variant="primary" size="sm" style={{ fontSize: "11px", maxWidth: "200px" }}>
                      Answer sheet
                    </Button>
                  </Link>
                  <Link to={"/MyAnswersheet"}>
                    <Button variant="primary" size="sm" style={{ fontSize: "10px", maxWidth: "200px", height: "25px" }}>
                      My Answer sheet
                    </Button>
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Card.Body>
    </div>
  )
}

export default Student_ResultPage
