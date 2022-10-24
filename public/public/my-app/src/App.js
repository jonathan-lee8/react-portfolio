import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/bootcamp" element = {<Bootcamp />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
