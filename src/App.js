import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Component';
import Contact from './Pages/Contacts/contact';
import Register from './Pages/Register/register';
import Home from './Component/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <div >
     
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/register" element={<Register/>} />
       
        </Routes>
        
      </Router>
      
     
    </div>
  );
}

export default App;
