import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import NavBar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/calculator" Component={Calculator} />
          <Route path="/quotes" Component={Quotes} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
