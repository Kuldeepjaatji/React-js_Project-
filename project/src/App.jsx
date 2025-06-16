// EduVerse Main App.jsx Setup with Routing and Page Animations

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
