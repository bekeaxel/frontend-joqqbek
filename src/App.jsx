import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Courses from './routes/Courses';
import Contact from './routes/Contact';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/courses" element={<Courses />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* all routing visa olika sidor beroende på vart man är */}
      {/* footer */}
    </div>
  );
}

export default App;
