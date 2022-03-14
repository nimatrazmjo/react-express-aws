import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Routes>
          <Route exact path="/" element={<Fib />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
