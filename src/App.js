import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './users/pages/Home';
import Category from './users/pages/Category';
import Profile from './users/pages/Profile';
import Subcription from './users/pages/Subcription';
import Header from './users/components/Header';
import BottomMenu from './users/components/BottomMenu';
import Template_preview from './users/pages/Template_preview';
import { MainLayout  , NoHeaderFooterLayout} from './users/components/Layouts';
import NotFound from './users/pages/NotFound';
import Signin from './users/public_pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and BottomMenu */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/categories" element={<MainLayout><Category /></MainLayout>} />
        <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
        <Route path="/subscription" element={<MainLayout><Subcription /></MainLayout>} />

        {/* Routes without Header and BottomMenu */}
        <Route path="/template_preview/:id" element={<NoHeaderFooterLayout><Template_preview /></NoHeaderFooterLayout>} />
        <Route path="/login" element={<NoHeaderFooterLayout><Signin/></NoHeaderFooterLayout>}></Route>
        
        {/* Add more routes without header/footer as needed */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
