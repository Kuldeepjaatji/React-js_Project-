import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import Footer1 from "./components/Footer";
import Home1 from "./pages/Home";
import Courses1 from "./pages/Courses";
import Instructors1 from "./pages/Instructors";
import Blog1 from "./pages/Blog";
import Contact1 from "./pages/Contact";
import FAQs1 from "./pages/FAQs";

function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/courses" element={<Courses1 />} />
        <Route path="/instructors" element={<Instructors1 />} />
        <Route path="/blog" element={<Blog1 />} />
        <Route path="/contact" element={<Contact1 />} />
        <Route path="/faqs" element={<FAQs1 />} />
      </Routes>
      <Footer1/>
    </>
  );
}

export default App;
