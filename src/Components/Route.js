import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import AboutScreen from './Screens/AboutScreen'
import BlogScreen from './Screens/BlogScreen'
import PortfolioScreen from './Screens/PortfolioScreen'
function Routing () {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<AboutScreen />} />
      <Route exact path="/blog" element={<BlogScreen />} />
      <Route exact path="/writingportfolio" element={<PortfolioScreen />} />
    </Routes>
  );
}
export default Routing;
