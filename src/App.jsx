import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import NavBar from './components/Navbar';
import Home from './components/Home';
import math from './assets/mathLoop.mp4';
import './Style/App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <video autoPlay loop muted className="mathVideo">
          <source src={math} type="video/mp4" />
        </video>
        <div className="title" />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
