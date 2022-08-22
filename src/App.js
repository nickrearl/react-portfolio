import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import './style.css';
import Header from './components/Header'
import AboutPage from './pages/About'
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ResumePage from "./pages/Resume";

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
      <Header />

        <Router>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </Router>

    </div>
  );
}

export default App;
