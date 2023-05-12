import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<h1>Test</h1>}/>
        <Route path="/home" element={<h1>What</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
