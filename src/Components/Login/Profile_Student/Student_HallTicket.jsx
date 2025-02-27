import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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


const Student_HallTicket = () => {
    const navigate = useNavigate();
  return (
    <>
        <Card.Body>
        <div style={{ width: "100%", overflowX: "auto" }}>
        <Table striped bordered hover style={{ minWidth: "1000px" }}>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Date</th>
              <th>Place</th>
              <th>Hall Ticket</th>
            </tr>
          </thead>
          <tbody className="text-start">
            <tr>
              <td>Sample Exam</td>
              <td>10-10-2024</td>
              <td>City Center</td>
              <td>
                <Button variant="link" onClick={() => navigate("/hall-ticket")} className="text-start">
                  Download
                </Button>
                
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
      </Card.Body>
    </>
  )
}

export default Student_HallTicket

