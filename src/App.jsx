import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/frontend/homepage/HomePage";
import AboutPage from "./components/pages/frontend/aboutpage/AboutPage";
import SkillsPage from "./components/pages/frontend/skillspage/SkillsPage";
import ContactPage from "./components/pages/frontend/contactpage/ContactPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/skills" element={<SkillsPage/>} />
        <Route path="/contacts" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
