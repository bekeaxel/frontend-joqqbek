import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Search from './routes/Search';
import Submit from './routes/Submit';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<Submit />} /> 
          <Route path="/search" element={<Search />} />
        </Routes>
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
