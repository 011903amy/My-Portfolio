import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/frontend/homepage/HomePage";
import AboutPage from "./components/pages/frontend/aboutpage/AboutPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
