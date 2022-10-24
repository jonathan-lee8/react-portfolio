import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Bootcamp from './pages/Bootcamp';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/bootcamp" element = {<Bootcamp />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
