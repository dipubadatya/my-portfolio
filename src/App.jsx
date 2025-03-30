import './index.css'
import Portfolio from './portfolio.jsx';
import ProjectPage from "./ProjectPage"; 

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App()  {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  )
}

export default App
