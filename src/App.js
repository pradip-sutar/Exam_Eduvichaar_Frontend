import './assets/css/style.css'
// import './assets/css/coming-soon.css'
import './assets/css/home-default.css'
import './assets/css/home-software.css'
import './assets/css/home-coworking.css'
import './assets/css/theme-plugins.min.css'
import './assets/css/fonts/Serenitedc5f.svg'
import './assets/css/fonts/icomoon8a92.svg'
import './assets/css/costume.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Header/Home";
import StudentLogin from './Components/Login/StudentLogin'
import ExaminerLogin from './Components/Login/ExaminerLogin'
import Exam from './Components/Exam'
import ExamLogin from './Components/ExamLogin/ExamLogin'
import Hallticket from './Components/CertificateDownload/Hallticket'
import Certificate from './Components/CertificateDownload/Certificate'
import ExamRegistration from './Components/Login/ExamRegistration'
import Answersheet from './Components/CertificateDownload/Answersheet'
import MyAnswersheet from './Components/CertificateDownload/MyAnswersheet'
import Studentpagelogin from './Components/Signin/Studentpagelogin'
import Studentsignup from './Components/Signin/Studentsignup'
import Examinerpagelogin from './Components/Signin/Examinerpagelogin'
import Examinersignup from './Components/Signin/Examinersignup'
import './App.css';

function App() {
  const sampleExamData = {
    examName: "Mathematics Exam",
    studentName: "John Doe",
    studentId: "123456",
    regdNo: "REG-789",
    hallTicket: "HT-2024",
    duration: "3 Hours",
    year: "2024",
  };
  return (
    <div className="App">
     
       <BrowserRouter>
        <Routes> 
        <Route element={<Home />} path="/"></Route>
        <Route element={<StudentLogin />} path="/StudentLogin"></Route>
        <Route element={<ExaminerLogin />} path="/ExaminerLogin"></Route>
        <Route element={<Exam />} path="/Exam"></Route>
        <Route element={<ExamLogin />} path="/exam-login"></Route>
        <Route element={<Hallticket />} path="/hall-ticket"></Route>
        <Route path="/" element={<ExamRegistration selectedRegExam={sampleExamData} />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/Answersheet" element={<Answersheet />} />
        <Route path="/MyAnswersheet" element={<MyAnswersheet />} />
        <Route path="/Studentpagelogin" element={<Studentpagelogin />} />
        <Route path="/Studentsignup" element={<Studentsignup />} />
        <Route path="/Examinerpagelogin" element={<Examinerpagelogin />} />
        <Route path="/Examinersignup" element={<Examinersignup />} />
        
       
         
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
