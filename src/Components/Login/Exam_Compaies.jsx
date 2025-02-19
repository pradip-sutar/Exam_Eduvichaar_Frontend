import React, { useState } from "react";
import Navbar from "../Header/Navbar";
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
  Modal
} from "react-bootstrap";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaSchool,
  FaBook,
  FaUniversity,
  FaCalendar,
  FaEdit,
  FaPlus,
  FaClock
} from "react-icons/fa";
import Footer from "../Footer";
import ExamResults from "./ExamResults";
import ExamRegistration from "./ExamRegistration";
import ExQuestion from "./ExQuestion";
import ExamAnswer from "./ExamAnswer";
  
const Exam_Compaies = () => {
  
    const [isEditing, setIsEditing] = useState(false);
    const [editingCompany, setEditingCompany] = useState(null);
    // Companies
    const [companies, setCompanies] = useState([
      {
        id: 1,
        name: "Vichhar Labs",
        logo: "assets/images/partner/vichaarlab_favicon.png", 
        info: "A tech company specializing in AI solutions.",
      },
      {
        id: 2,
        name: "TechSphere",
        logo: "assets/images/partner/techS.png",
        info: "Innovative software development firm.",
      },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [newCompany, setNewCompany] = useState({ logo:"" , name: "", info: "" });
    const [logoPreview, setLogoPreview] = useState(null);

    
    const handleAddNew = () => {
        setIsEditing(false); // Reset edit state when adding a new company
        setShowPopup(true);
        setNewCompany({ logo: "", name: "", info: "" }); // Reset the form fields
        setLogoPreview(null);
      };
    
      const handleEditTab = (company) => {
        setIsEditing(true);
        setEditingCompany(company); // Set the company to be edited
        setNewCompany({ name: company.name, info: company.info, logo: company.logo }); // Pre-fill the form with the company's data
        setLogoPreview(company.logo);
        setShowPopup(true);
      };
      const handleClose = () => {
        setShowPopup(false);
        setNewCompany({ logo: "", name: "", info: "" });
        setLogoPreview(null);
        setEditingCompany(null); // Reset editing company when modal is closed
      };
    
      const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => setLogoPreview(reader.result);
          reader.readAsDataURL(file);
          setNewCompany({ ...newCompany, logo: file });
        }
      };
    
      const handleSave = () => {
        if (newCompany.name && newCompany.info && newCompany.logo) {
          if (isEditing && editingCompany) {
            // Update the existing company
            setCompanies(companies.map(company => 
              company.id === editingCompany.id
                ? { ...company, name: newCompany.name, info: newCompany.info, logo: logoPreview }
                : company
            ));
          } else {
            // Add a new company
            setCompanies([...companies, { id: companies.length + 1, name: newCompany.name, info: newCompany.info, logo: logoPreview }]);
          }
          handleClose();
        } else {
          alert("Please fill all fields.");
        }
      };
  return (
    <>
       <Card.Body>
          <div className="d-flex justify-content-end mb-2">
            <Button
              variant="primary"
              className="px-3 py-1 d-flex align-items-center gap-2"
              onClick={handleAddNew}
            >
              <FaPlus size={18} />
              <span>
                <strong>Add new</strong>
              </span>
            </Button>
          </div>

          <ListGroup>
            {companies.map((company) => (
              <ListGroup.Item
                key={company.id}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={company.logo}
                    roundedCircle
                    width={50}
                    height={50}
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-1">{company.name}</h6>
                    <p className="mb-0 text-muted">{company.info}</p>
                  </div>
                </div>
                <Button
                  variant="warning"
                  className="px-3 py-1 d-flex align-items-center gap-2"
                  onClick={() => handleEditTab(company)}
                >
                  <FaEdit size={18} />
                  <span>
                    <strong>Edit</strong>
                  </span>
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* PopUp Modal */}
          {showPopup && (
            <div className="popup-overlay">
              <div className="popup-container animate-popup">
                <h4 className="mb-3">{isEditing ? "Edit Company" : "Add New Company"}</h4>

                <input
                  type="file"
                  className="form-control mb-2"
                  onChange={handleLogoChange}
                />
                {logoPreview && (
                  <Image
                    src={logoPreview}
                    rounded
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                )}

                <input
                  type="text"
                  placeholder="Enter Company Name"
                  className="form-control mb-2"
                  value={newCompany.name}
                  onChange={(e) =>
                    setNewCompany({ ...newCompany, name: e.target.value })
                  }
                />

                <textarea
                  placeholder="Enter Description"
                  className="form-control mb-2"
                  value={newCompany.info}
                  onChange={(e) =>
                    setNewCompany({ ...newCompany, info: e.target.value })
                  }
                />

                <div className="d-flex justify-content-end gap-2 mt-3">
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="success" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card.Body>
    </>
  )
}

export default Exam_Compaies
