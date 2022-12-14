import { HashRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
import './style.css';
import Header from './components/Header'
import AboutPage from './pages/About'
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ResumePage from "./pages/Resume";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div>
        <Router>
          <Routes>
          <Route path="/" element={ <Header/> }>
              <Route index element={<AboutPage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="resume" element={<ResumePage />} />
            </Route>
          </Routes>
        </Router>

      <Footer />
    </div>
  );
}

export default App;
