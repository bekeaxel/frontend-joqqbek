import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Worker } from '@react-pdf-viewer/core';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Search from './routes/Search';
import Submit from './routes/Submit';
import Resource from './routes/Resource';

const App = () => {
  return (
    <div className="App">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
        <BrowserRouter>
          <Navbar />
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/submit" element={<Submit />} /> 
            <Route path="/search" element={<Search />} />
            <Route path="/search/:course" element={<Search />} />
            <Route path="/search/:course/:resource" element={<Resource />} />
          </Routes>
        <Footer />
        </BrowserRouter> 
      </Worker>

    </div>
  );
}

export default App;
