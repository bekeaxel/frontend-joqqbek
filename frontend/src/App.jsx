import React from 'react';
import {Route, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      createBrowserRouter(
        createRoutesFromElements(
          <Routes>
            <Route path="/courses">
            </Route>
          </Routes>

        )
      )
      {/* all routing visa olika sidor beroende på vart man är */}
      {/* footer */}
    </div>
  );
}

export default App;
