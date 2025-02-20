import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import './Cert.css'

const Certificate = () => {
  const certificateRef = useRef(null);

  const [candidateName] = useState("Ram");
  const [certificateNumber] = useState("G-12345");
  const [certificationDate] = useState("10 August, 2024");

  const handleDownload = () => {
    const input = certificateRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("landscape", "mm", [200, 280]);
      pdf.addImage(imgData, "PNG", 0, 0, 280, 200);
      pdf.save("GAQM_Certificate.pdf");
    });
  };

  return (
    <div className="container mt-4 text-center m-auto">
     <button onClick={handleDownload} className="btn btn-primary mb-3">
        Download as PDF
      </button>

      <div
        ref={certificateRef}
        style={{
          width: "1061px",
          height: "753px",
          position: "relative",
          // left:'130px',
          right:'50px',
          backgroundImage: `url('assets/images/cert.png')`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Arial', sans-serif",
          textAlign: "center",
        }}
      >
     
        <h1 style={{ fontWeight: "bold", color: "#cc0000", marginBottom: "5px" }}> Combined Graduate Level </h1>
        <p style={{ fontSize: "16px", marginBottom: "10px", color: "#444" }}>
          Global Association for Quality Management
        </p>
        <h2 style={{ fontWeight: "bold", color: "#333", letterSpacing: "1px" }}>
          CERTIFICATE OF APPRECIATION
        </h2>

     
        <p style={{ fontSize: "18px", marginTop: "10px", color: "#444" }}>
          This is to Certify that
        </p>
        <h2 style={{ color: "#cc0000", fontWeight: "bold", fontSize: "30px" }}>
          {candidateName}
        </h2>
        <p style={{ fontSize: "18px", color: "#444", maxWidth: "800px" }}>
          Has attanded Exam Name On date and secured mark:70 out of 100'
        </p>
        <h3 style={{ fontWeight: "bold", fontSize: "22px", color: "#1f6f3d" }}>
          wishing all the best
        </h3>
        

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "10px",
          }}
        >
          <p style={{ fontSize: "16px" }}>
            <strong>Certificate Number:</strong> {certificateNumber}
          </p>
          <p style={{ fontSize: "16px" }}>
            <strong>Certification Date:</strong> {certificationDate}
          </p>
        </div>

        <img
          src="assets/images/logoAdmin.png"
          alt="Certified Six Sigma Green Belt"
          style={{
            position: "absolute",
            right: "90px",
            top: "160px",
            width: "120px",
            height: "120px",
          }}
        />

   
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            marginTop: "40px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <hr style={{ width: "120px", borderColor: "#000" }} />
            <p style={{ fontSize: "14px" }}>Company</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <hr style={{ width: "120px", borderColor: "#000" }} />
            <p style={{ fontSize: "14px" }}>Examiner</p>
          </div>
        </div>
      </div>

      {/* <button onClick={handleDownload} className="btn btn-primary mb-3">
        Download as PDF
      </button> */}
    </div>
  );
};

export default Certificate;
