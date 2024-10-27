import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './users/pages/Home';
import Header from './users/components/Header';
import BottomMenu from './users/components/BottomMenu';

function App() {
  return (
    <div className="container-fluid p-0 pb-5">
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <BottomMenu />
    </div>
  );
}

export default App;
