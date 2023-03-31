import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Hobbies from './pages/Hobbies';
import Qualifications from './pages/Qualifications'
import Certifications from './pages/Certifications'
import Experience from './pages/Experience'
import ContactMe from './pages/Experience'
import Skills from './pages/Skills'
function App() {
  return (
    <div className="App">
        <Navbar/> 
        <Routes>
          <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/Skills" element={<Skills/>}/>
          <Route path="/Experience" element={<Experience/>}/>
          <Route path="/Hobbies" element={<Hobbies/>}/>
          <Route path="/Certifications" element={<Certifications/>}/>
          <Route path="/Qualifications" element={<Qualifications/>}/>
          <Route path="/ContactMe" element={<ContactMe/>}/>
          
        </Routes>


    </div>
  );
}

export default App;
