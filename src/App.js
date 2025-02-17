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
import AboutUs from './Components/AboutUs/AboutUs'
import Propvichaar from './Components/PropVichaar/Propvichaar'
import PropVicCRM from './Components/PropVichaar/PropVicCRM'
import PropVicBMS from './Components/PropVichaar/PropVicBMS'
import { PropVicEnterprize } from './Components/PropVichaar/PropVicEnterprize'
import PropVic360 from './Components/PropVichaar/PropVic360'
import Services  from './Components/Service/Services'
import Success from './Components/Protfolio/Success'
import FAQs from './Components/Protfolio/FAQs'
import { Testimonials } from './Components/Protfolio/Testimonials'
import Contact from './Components/Contact'
import StudentLogin from './Components/Login/StudentLogin'
import ExaminerLogin from './Components/Login/ExaminerLogin'
import Exam from './Components/Exam'
import ResultPageViewTable from './Components/Login/ResultPageViewTable'
import './App.css';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
        <Routes> 
        <Route element={<Home />} path="/"></Route>
        <Route element={<AboutUs />} path="/AboutUs"></Route>
        <Route element={<Propvichaar />} path="/Propvichaar"></Route>
        <Route element={<PropVicCRM />} path="/PropVicCRM"></Route>
        <Route element={<PropVicBMS />} path="/PropVicBMS"></Route>
        <Route element={<PropVicEnterprize />} path="/PropVicEnterprize"></Route>
        <Route element={<PropVic360 />} path="/PropVic360"></Route>
        <Route element={<Services />} path="/Services"></Route>
        <Route element={<Success />} path="/Success"></Route>
        <Route element={<FAQs />} path="/FAQs"></Route>
        <Route element={<Testimonials />} path="/Testimonials"></Route>
        <Route element={<Contact />} path="/Contact"></Route>
        <Route element={<StudentLogin />} path="/StudentLogin"></Route>
        <Route element={<ExaminerLogin />} path="/ExaminerLogin"></Route>
        <Route element={<Exam />} path="/Exam"></Route>
        <Route element={<ResultPageViewTable />} path="/result-view/:examId"></Route>
      
         
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
