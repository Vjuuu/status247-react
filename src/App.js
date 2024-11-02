import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './users/pages/Home';
import Category from './users/pages/Category';
import Profile from './users/pages/Profile';
import Subcription from './users/pages/Subcription';
import Header from './users/components/Header';
import BottomMenu from './users/components/BottomMenu';

function App() {
  return (
    <Router>
      <div className="container-fluid p-0 pb-5">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subcription />} />
        </Routes>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
