import './App.css';
import { Dog } from './Pets/Dog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Dog/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
